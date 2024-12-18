import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Login from './Login';
import { useCart } from '../Context/CartContext';

const Slider = ({ title, data, type, BaseUrl }) => {
// console.log("data",data);


    // const { addToCart } = useCart();
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    const [loginmodalShow, setLoginModalShow] = useState(false);
    const [otpmodalShow, setOtpModalShow] = useState(false);
    const [category, setCategory] = useState([]);

    const getRandomColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const opacity = Math.random() * 0.1 + 0.1; // Random value between 0.5 and 1
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/api/getUserCategory`);
                // console.log("response",response.data.data);
                const data = response.data.data;
                setCategory(data);

            } catch (error) {
                console.error('data fetching error:', error);
            }
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleAddToCart = async (id, quantity) => {
        console.log("id",id);
        
        if (!token) {
            setLoginModalShow(true);
            return;
        }
    
        try {

           await axios.post(`${BaseUrl}/api/addToCart`, {
                productId: id,
                userId: userId,
                quantity: quantity
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            // addToCart({id, quantity});
        } catch (error) {
            console.error('Error while adding product to cart:', error);
        }
    };

    
    const getCategoryName = (categoryId) => {
        const catName = category.find((cat) => cat._id === categoryId);
        return catName ? catName.categoryName : "";
    }
    return (
        <>
            <div className="slider-section mb-8">
                <div className="s_container">
                    <div className="flex justify-between mb-3">
                        <h2 className="text-2xl font-bold">{title}</h2>
                        <Link to={'/subCategory'} className="font-semibold">See All</Link>
                    </div>

                    <Swiper
                        spaceBetween={20}
                        slidesPerView={type === 'explore' ? 8 : 4}
                        navigation
                        breakpoints={{
                            320: { slidesPerView: type === 'explore' ? 2 : 1 },
                            // 640: { slidesPerView: type === 'explore' ? 3 : 2 },
                            768: { slidesPerView: type === 'explore' ? 4 : 2 },
                            1024: { slidesPerView: type === 'explore' ? 6 : 3 },
                            1440: { slidesPerView: type === 'explore' ? 8 : 6 },
                        }}
                        modules={[Navigation]}
                    >
                        {data.map((item) => (
                            <SwiperSlide key={item._id}>
                                {type === 'explore' && (
                                    <div className=" p-4 rounded-lg text-center h-48" style={{ backgroundColor: getRandomColor() }}>
                                        <img
                                            src={`${BaseUrl}/${item.moreToExploreImage.replace(/\\/g, '/')}`}
                                            alt={item.title}
                                            className="w-20 h-20 mx-auto mb-2 object-cover"
                                        />
                                        <p className="font-semibold">{item.title}</p>
                                        <small>{item.description}</small>
                                    </div>
                                )}
                                {/* {type === 'categories' && (
                                <div className="bg-gray-100 p-4 rounded-lg text-center">
                                    <img
                                        src={`${BaseUrl}/${item.vectorImage.replace(/\\/g, '/')}`}
                                        alt={item.categoryName}
                                        className="w-16 h-16 mx-auto mb-2"
                                    />
                                    <p className="font-semibold">{item.categoryName}</p>
                                </div>
                            )} */}
                                
                                {type === 'products' && (
                                    <div className="p-4 bg-white rounded-lg border ">
                                        <img
                                            src={`${BaseUrl}/${item.productImage[0].replace(/\\/g, '/')}`}
                                            alt={item.productName}
                                            className="w-full h-40 object-contain mb-4"
                                        />
                                        <small className='text-gray-500'>{getCategoryName(item.categoryId)}</small>
                                        <h4 className="font-semibold text-lg">{item.productName}</h4>
                                        <p className="font-semibold text-[#AB92F3]">${item.price}</p>
                                        <small>Qty : {item.totalQuantity ? item.totalQuantity : item.quantity}</small>
                                        <button className="mt-3 s_btn_puprle text-white w-full"  onClick={() => handleAddToCart(item.productId || item._id, 1)} >
                                            <MdOutlineShoppingCart className='inline-block mr-2' />Add to cart
                                        </button>
                                    </div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <Login
                loginmodalShow={loginmodalShow}
                setLoginModalShow={setLoginModalShow}
                otpmodalShow={otpmodalShow}
                setOtpModalShow={setOtpModalShow}
            />
        </>
    );
};

export default Slider;
