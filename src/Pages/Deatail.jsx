import React, { useEffect, useState } from 'react'
import './../CSS/dstyle.css'
import { FaStar } from 'react-icons/fa'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import SubHeader from '../Component/SubHeader'
import Footer from '../Component/Footer'
import axios from 'axios'

const Deatail = () => {

    const BaseUrl = process.env.REACT_APP_BASEURL;

    const [mainImage, setMainImage] = useState("");
    const [productdetail, setPrdouctDetail] = useState({})
    const [subCategoryName, setSubCategoryName] = useState("");
    const [reviewdata, setReviewdata] = useState([]);
    const [filteredReviews, setFilteredReviews] = useState([]);

    const handleImageClick = (imageUrl) => {
        setMainImage(imageUrl);
    };

    const fetchsinglepoduct = async () => {
        try {
            const res = await axios.get(`${BaseUrl}/api/getProduct/675aa27570798bb7c25e84aa`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            // console.log("response", res.data.data);
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
    }, [productdetail,reviewdata]);


    useEffect(() => {
        fetchsinglepoduct();
        fetchreview();
    }, []);



    return (
        <>

            <SubHeader />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <div className="d_delleft">
                            <div className="d_mainimg d-flex justify-content-center">
                                <div className="d_img">
                                    <img src={`${BaseUrl}/${mainImage.replace('/\\/g','/')}`} alt="" />
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
                                        <div className="d_size">{productdetail?.productDetails}</div>
                                    </div>
                                    <div className="d_saved">You Saved ${productdetail?.discount}</div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className='d-flex align-items-center'>
                                            <div className="d_price">${productdetail?.price}</div>
                                            <div className="d_removesize">${productdetail?.discount}</div>
                                        </div>
                                        <div className="d_cartbtn">
                                            <div className="d-flex justify-content-around align-items-center">
                                                <button className='d_carticon'>-</button>
                                                <div className='d_carticon'>{productdetail?.quantity}</div>
                                                <button className='d_carticon'>+</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d_tax">(Inclusive of all taxes)</div>
                                    <div className="d_addcartbtn">
                                        <Link to="" className='text-center d-block'>Add to Cart</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="d_pad">
                                <div className="d_say">
                                    <h6>Say Yes to fresh!</h6>
                                </div>
                                <div className="d_freshbox">
                                    <div className="d-flex align-items-center mb-lg-4 mb-3">
                                        <div className="d_img d-flex justify-content-center align-items-center">
                                            <img src={require('../Image/say1.png')} alt="" />
                                        </div>
                                        <div className="d_text">
                                            <h6>Sourced Fresh Daily</h6>
                                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-lg-4 mb-3">
                                        <div className="d_img d-flex justify-content-center align-items-center">
                                            <img src={require('../Image/say2.png')} alt="" />
                                        </div>
                                        <div className="d_text">
                                            <h6>Sourced By Experts</h6>
                                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-lg-4 mb-3">
                                        <div className="d_img d-flex justify-content-center align-items-center">
                                            <img src={require('../Image/say3.png')} alt="" />
                                        </div>
                                        <div className="d_text">
                                            <h6>Daily Thorough Quality Checks</h6>
                                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-lg-4 mb-3">
                                        <div className="d_img d-flex justify-content-center align-items-center">
                                            <img src={require('../Image/say4.png')} alt="" />
                                        </div>
                                        <div className="d_text">
                                            <h6>High Packaging Standards</h6>
                                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="d_img d-flex justify-content-center align-items-center">
                                            <img src={require('../Image/say5.png')} alt="" />
                                        </div>
                                        <div className="d_text">
                                            <h6>Quality Assurance At Stores</h6>
                                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        </div>
                                    </div>
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
                                        filteredReviews.slice(0,3).map((review, i) => {
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

            <Footer />

        </>
    )
}

export default Deatail
