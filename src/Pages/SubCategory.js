import axios from "axios";
import { useEffect, useState } from "react";
// import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight, MdOutlineShoppingCart } from "react-icons/md";
import Login from "../Component/Login";
import { useCart } from "../Context/CartContext";

const BaseUrl = process.env.REACT_APP_BASEURL;
const token = localStorage.getItem('token');
const userId = localStorage.getItem('userId');

const SubCategory = () => {

    const { addToCart } = useCart();
    const [categoryData, setCategoryData] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeSubCategory, setActiveSubCategory] = useState(null);
    const [selectedId, setSelectedId] = useState('');
    const [productData, setProductData] = useState([]);
    const [loginmodalShow, setLoginModalShow] = useState(false);
    const [otpmodalShow, setOtpModalShow] = useState(false);
    // const [wishlist, setWishlist] = useState(() => {
    //     // Load wishlist from localStorage when the component mounts
    //     const savedWishlist = localStorage.getItem("wishlist");
    //     return savedWishlist ? JSON.parse(savedWishlist) : [];
    // });

    // Save wishlist to localStorage whenever it changes
    // useEffect(() => {
    //     localStorage.setItem("wishlist", JSON.stringify(wishlist));
    // }, [wishlist]);


    const getCategoryName = (categoryId) => {
        const catName = categoryData.find((cat) => cat._id === categoryId);
        return catName ? catName.categoryName : "";
    }
    const fetchCategories = async () => {
        try {
            const response = await axios.get(`${BaseUrl}/api/getUserSubCategory`);
            const categories = response.data.data;
            setCategoryData(categories);
            if (categories.length > 0) {
                const firstCategoryId = categories[0]._id;
                setSelectedId(firstCategoryId);
                setActiveSubCategory(firstCategoryId);
            }
        } catch (error) {
            console.error('Category Fetching Error:', error);
        }
    };

    const fetchProducts = async () => {
        try {
            if (selectedId) {
                const proResponse = await axios.get(`${BaseUrl}/api/getUserProduct`);
                const matchingProducts = proResponse.data.data.filter(
                    (product) => product.subCategoryId === selectedId
                );
                setProductData(matchingProducts);
                console.log('Matching Products:', matchingProducts);
            }
        } catch (error) {
            console.error('Product Fetching Error:', error);
        }
    };

    useEffect(() => {
        fetchCategories();
        fetchProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedId]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }
    const handleSubCategory = (id) => {
        // console.log("id", id);
        setSelectedId(id);
        setActiveSubCategory(id);

        if (window.innerWidth < 768) {
            setIsSidebarOpen(false);
        }

    }
    // const handleAddWishList = async (productId) => {
    //     // console.log("token", token);
    //     setWishlist([...wishlist, productId]);

    //     if (!token) {
    //         setLoginModalShow(true);
    //         return;
    //     }

    //     try {

    //         await axios.post(`${BaseUrl}/api/createWishList`, {
    //             productId,
    //             userId
    //         }, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         });
    //     } catch (error) {
    //         console.error('Data fetching error:', error);
    //     }
    // };
    const handleAddToCart = async (id, quantity) => {

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
            // addToCart({id, quantity})
        } catch (error) {
            console.error('Data Fetching Error', error);
        }
    }
    return (
        <>
            <div className="flex relative">
                <div className="w-10 shadow-md md:hidden block">
                    <button
                        className="s_sidebar_btn"
                        onClick={toggleSidebar}
                    >
                        <MdKeyboardDoubleArrowRight className="text-white text-3xl" />
                    </button>
                </div>
                <div className={`
                    md:w-80 w-64 shadow-md h-lvh 
                    md:block 
                    ${isSidebarOpen ? 'block absolute top-0 left-10 ' : 'hidden'}
                    bg-white
                `} >
                    <ul className="ps-4 s_subCat_ul">
                        {categoryData.map((item, index) => (
                            <li
                                key={index}
                                className={`py-2 cursor-pointer ${activeSubCategory === item._id ? 'active' : ''}`}
                                onClick={() => handleSubCategory(item._id)}
                            >
                                <div className="flex items-center">
                                    <img
                                        src={`${BaseUrl}/${item.subCategoryImage.replace(/\\/g, '/')}`}
                                        alt={item.productName}
                                        className="w-14 h-14 object-cover mx-3"
                                    />
                                    <h4 className="font-semibold text-2xl">{item.subCategoryName}</h4>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 p-4">
                        {productData.map((item, index) => {
                            const discountedPrice = item.price * (1 - item.discount / 100);
                            return (
                                <div key={item._id || index} className="bg-white rounded-lg border">
                                    <div className="d-flex justify-between">
                                        <div>
                                            <small className="bg-[#AB92F3] rounded-tl-md px-[15px] py-[4px]">
                                                Save {item.discount}%
                                            </small>
                                        </div>
                                        {/* <div className="px-4 pt-3 text-[#FD7171] cursor-pointer">
                                            {wishlist.includes(item._id) ? (
                                                <FaHeart onClick={() => handleAddWishList(item._id)} />
                                            ) : (
                                                <FaRegHeart onClick={() => handleAddWishList(item._id)} />
                                            )}
                                        </div> */}
                                    </div>
                                    <div className="px-4 pb-4">
                                        <img
                                            src={`${BaseUrl}/${item.productImage[0].replace(/\\/g, '/')}`}
                                            alt={item.productName}
                                            className="h-40 w-40 object-contain mb-4 mx-auto"
                                        />
                                        <small className="text-gray-500">{getCategoryName(item.categoryId)}</small>
                                        <h4 className="font-semibold text-lg">{item.productName}</h4>
                                        <p className="font-semibold text-[#AB92F3]">
                                            ${discountedPrice.toFixed(2)}{' '}
                                            <span className="text-gray-400 line-through">${item.price}</span>
                                        </p>
                                        <small>Qty : {item.totalQuantity ? item.totalQuantity : item.quantity}</small>
                                        <button className="mt-3 s_btn_puprle text-white w-full cursor-pointer" onClick={() => handleAddToCart(item._id, 1)}  >

                                            <MdOutlineShoppingCart className="inline-block mr-2" />
                                            Add to cart

                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
            <Login
                loginmodalShow={loginmodalShow}
                setLoginModalShow={setLoginModalShow}
                otpmodalShow={otpmodalShow}
                setOtpModalShow={setOtpModalShow}
            />
        </>
    )
}

export default SubCategory;