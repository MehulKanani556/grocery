import React, { useEffect, useState } from 'react'
import './../CSS/dstyle.css'
import { FaStar } from 'react-icons/fa'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link, useParams } from 'react-router-dom'
import SubHeader from '../Component/SubHeader'
import Footer from '../Component/Footer'
import axios from 'axios'
import Login from '../Component/Login'
import { useCart } from '../Context/CartContext'

const Deatail = () => {

    const { id } = useParams();
    const BaseUrl = process.env.REACT_APP_BASEURL;
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    const [mainImage, setMainImage] = useState("");
    const [productdetail, setPrdouctDetail] = useState({})
    const [subCategoryName, setSubCategoryName] = useState("");
    const [reviewdata, setReviewdata] = useState([]);
    const [filteredReviews, setFilteredReviews] = useState([]);
    const [aditionalPro, setAditionalPro] = useState([]);
    const [loginmodalShow, setLoginModalShow] = useState(false);
    const [otpmodalShow, setOtpModalShow] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    const handleImageClick = (imageUrl) => {
        setMainImage(imageUrl);
    };

    const fetchsinglepoduct = async () => {
        try {
            const res = await axios.get(`${BaseUrl}/api/getProduct/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            console.log("response", res.data.data);
            setPrdouctDetail(res.data.data);
        }
        catch (error) {
            console.error("Not Fetch product details:", error);
        }
    }

    // Fetch subcategory details by ID
    const fetchSubCategory = async (subCategoryId) => {
        try {
            const res = await axios.get(`${BaseUrl}/api/getSubCategory/${subCategoryId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            setSubCategoryName(res.data.data.subCategoryName);
        } catch (error) {
            console.error("Failed to fetch subcategory:", error);
        }
    };

    const fetchreview = async () => {
        try {
            const res = await axios.get(`${BaseUrl}/api/allRating`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            setReviewdata(res.data.data);
        }
        catch (error) {
            console.error("Not Fetch review:", error);
        }
    }
    const AditionalProduct = async () => {
        try {
            const response = await axios.get(`${BaseUrl}/api/allProductAditional`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            // console.log("response",response.data.productAditional);
            const matchingProduct = response.data.productAditional.filter((item => item.productId === id));

            // console.log("matchingProduct",matchingProduct);
            setAditionalPro(matchingProduct);

        } catch (error) {
            console.error('Data Fetching Error:', error);
        }
    }
    const handleAddToCart = async (id) => {
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
               addToCart({id, quantity})
           } catch (error) {
               console.error('Data Fetching Error');
           }
       }

    useEffect(() => {
        if (productdetail?.productImage?.length > 0) {
            setMainImage(productdetail.productImage[0]);
        }
        if (productdetail?.subCategoryId) {
            fetchSubCategory(productdetail.subCategoryId);
        }
        if (productdetail._id && reviewdata.length > 0) {
            const reviewfilter = reviewdata.filter((review, i) => {
                return review.productId?._id === productdetail._id
            })
            setFilteredReviews(reviewfilter);
            console.log("filtered reviews", reviewfilter);
        }
    }, [productdetail, reviewdata]);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity - 1));
    };
    useEffect(() => {
        fetchsinglepoduct();
        fetchreview();
        AditionalProduct();
    }, []);

    return (
        <>

            <div className='my-3 border-b s_sub_header'>
                <SubHeader />
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <div className="d_delleft">
                            <div className="d_mainimg d-flex justify-content-center">
                                <div className="d_img">
                                    <img src={`${BaseUrl}/${mainImage.replace('/\\/g', '/')}`} alt="" />
                                </div>
                            </div>
                            <div className="d-flex justify-content-center mb-xl-4 mb-2">
                                {
                                    productdetail.productImage?.map((image, index) => {
                                        // console.log(image)
                                        return (
                                            <div
                                                key={index}
                                                className="d_subimg d_cur"
                                                onClick={() => handleImageClick(image)}
                                            >
                                                <img src={`${BaseUrl}/${image.replace('/\\/g', '/')}`} alt={`Product ${index + 1}`} />
                                            </div>
                                        )
                                    })
                                }

                            </div>
                            <div className="d_head">
                                <div className="d_title fw-bold">Product Deatials</div>
                                <div className="d_desc">{productdetail?.productDetails}</div>
                            </div>
                            <div className="d_del">
                                <div className="d_title">Nutrient Value & Benefits</div>
                                <div className="d_desc">{productdetail?.NutrientValueAndBenefits}</div>
                            </div>
                            <div className="d_del">
                                <div className="d_title">Storage Temperature </div>
                                <div className="d_desc">{productdetail?.StorageTemperature}</div>
                            </div>
                            <div className="d_del">
                                <div className="d_title">Description</div>
                                <div className="d_desc">{productdetail?.description}</div>
                            </div>
                            <div className="d_del">
                                <div className="d_title">Disclaimer</div>
                                <div className="d_desc">{productdetail?.disclaimer}</div>
                            </div>
                            <div className="d_del">
                                <div className="d_title">FSSAI License</div>
                                <div className="d_desc">{productdetail?.FSSAILicense}</div>
                            </div>
                            <div className="d_del">
                                <div className="d_title">Customer Care details</div>
                                <div className="d_desc">{productdetail?.customerCareDetails}</div>
                            </div>
                            <div className="d_del">
                                <div className="d_title">Return Policy</div>
                                <div className="d_desc">{productdetail?.returnPolicy}</div>
                            </div>
                            <div className="d_del">
                                <div className="d_title">Expiry Date</div>
                                <div className="d_desc">{productdetail?.expiryDate}</div>
                            </div>
                            <div className="d_del">
                                <div className="d_title">Seller FSSAI</div>
                                <div className="d_desc">{productdetail?.SellerFSSAI}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="d_delright">
                            <div className="d_pad">
                                <div className="d_desc pb-3">
                                    <div className="d_type">{subCategoryName}</div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d_name">{productdetail?.productName}</div>
                                        <div className="d_size">{productdetail?.weight}</div>
                                    </div>
                                    <div className="d_saved">You Saved ${productdetail?.discount} %</div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className='d-flex align-items-center'>
                                            <div className="d_price">${(productdetail?.price * (1 - productdetail.discount / 100) * quantity).toFixed(2)}
                                            </div>
                                            <div className="d_removesize"> ${(productdetail?.price * quantity).toFixed(2)}</div>
                                        </div>
                                        <div className="d_cartbtn">
                                            <div className="d-flex justify-content-around align-items-center">
                                                <button className='d_carticon' onClick={handleDecrement}>-</button>
                                                <div className='d_carticon'>{quantity}</div>
                                                <button className='d_carticon'  onClick={handleIncrement} >+</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d_tax">(Inclusive of all taxes)</div>
                                    <div className="d_addcartbtn">
                                        <button className='text-center d-block' onClick={() => handleAddToCart(productdetail._id)}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="d_pad">
                                <div className="d_say">
                                    <h6>Say Yes to fresh!</h6>
                                </div>
                                <div className="d_freshbox">
                                    {aditionalPro.map((item, index) => (
                                        <div key={index}>
                                            {item.data.map((dataItem, dataIndex) => (

                                                <div
                                                    key={dataIndex}
                                                    className="d-flex align-items-center mb-lg-4 mb-3"
                                                >
                                                    <React.Fragment key={dataIndex}>
                                                        <div className="d_img d-flex justify-content-center align-items-center">
                                                            <img
                                                                src={`${BaseUrl}/${dataItem.image?.replace(/\\/g, '/')}`}
                                                                alt={dataItem.title}
                                                            />
                                                        </div>
                                                        <div className="d_text">
                                                            <h6>{dataItem.title}</h6>
                                                            <p>{dataItem.description}</p>
                                                        </div>
                                                    </React.Fragment>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="d_pad">
                                <div className="d_review">
                                    <h6>Rating & Reviews</h6>
                                    <div className="d_ratebox">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <div className="d_rate">4.6</div>
                                                <FaStar className='d_star' />
                                            </div>
                                            <MdKeyboardArrowRight className='d_rightarrow' />
                                        </div>
                                        <p className='mb-0'>125 Ratings & 25 Reviews</p>
                                    </div>
                                    {
                                        filteredReviews.slice(0, 3).map((review, i) => {
                                            return (
                                                <div className="d_ratebox1">
                                                    <div className="d_box mb-2">
                                                        <div className="d-flex align-items-center">
                                                            <div className="d_rate">{review?.star}</div>
                                                            <FaStar className='d_star' />
                                                        </div>
                                                    </div>
                                                    <p className='mb-1'>{review?.review}</p>
                                                    <div className="d_username">{review?.name}</div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="d_view text-center">
                                <Link to="">View All Reviews</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Login
                loginmodalShow={loginmodalShow}
                setLoginModalShow={setLoginModalShow}
                otpmodalShow={otpmodalShow}
                setOtpModalShow={setOtpModalShow}
            />
            <Footer />

        </>
    )
}

export default Deatail
