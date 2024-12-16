import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BiSolidRightArrow } from 'react-icons/bi'
import { FaHeart, FaStar } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import Login from '../Component/Login'

const Wishlist = () => {

    const BaseUrl = process.env.REACT_APP_BASEURL;
    const token = localStorage.getItem('token');

    const userId = localStorage.getItem('userId');

    const [wishlistproduct, setWishlistProducts] = useState([]);
    const [subcategory, setSubcategory] = useState([])
    const [groupproduct, setGroupedProducts] = useState([])
    const [loginmodalShow, setLoginModalShow] = useState(false);
    const [otpmodalShow, setOtpModalShow] = useState(false);
    const [quantity, setQuantity] = useState(1);


    const fetchwishlist = async () => {
        try {
            const res = await axios.get(`${BaseUrl}/api/allMyWishList/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log("response", res.data.data);

            const productIds = res.data.data.map((item) => item.productId);
            fetchproductwishlist(productIds);
        } catch (error) {
            console.error("Not Fetch product details:", error);
        }
    };

    const fetchproductwishlist = async (productIds) => {
        try {
            const promises = productIds.map((id) =>
                axios.get(`${BaseUrl}/api/getProduct/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
            );

            const responses = await Promise.all(promises);
            const products = responses.map((res) => res.data.data);

            const subcategoryPromises = products.map((product) =>
                axios.get(`${BaseUrl}/api/getSubCategory/${product.subCategoryId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
            )

            const subcategoryResponses = await Promise.all(subcategoryPromises);
            const subcategories = subcategoryResponses.map((res) => res.data.data);

            const productsWithSubcategory = products.map((product, index) => ({
                ...product,
                subcategory: subcategories[index]
            }));

            console.log("wishlist products", productsWithSubcategory);
            setWishlistProducts(productsWithSubcategory);
        } catch (error) {
            console.error("Not Fetch product details:", error);
        }
    };

    

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
        } catch (error) {
            console.error('Data Fetching Error');
        }
    }

    const handleremovewishlist = async (productId) => {
        try {
            const wishlistRes = await axios.get(`${BaseUrl}/api/allMyWishList/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
    
            const wishlistItemToRemove = wishlistRes.data.data.find(
                (item) => item.productId === productId
            );
    
            if (wishlistItemToRemove) {
                const res = await axios.delete(`${BaseUrl}/api/deleteWishList/${wishlistItemToRemove._id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log("Removed wishlist", res);
    
                const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
                const updatedWishlist = wishlist.filter(id => id !== productId);
                localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    
                fetchwishlist();
            } else {
                console.error("Wishlist item not found");
            }
        } catch (error) {
            console.error("Not removed wishlist:", error);
        }
    };

    useEffect(() => {
        fetchwishlist();
        fetchproductwishlist();
    }, []);

    return (
        <>

            <div className="d_wishlist">
                <div className="d_right px-2 px-sm-0">
                    <div className="d_heading">
                        <h6>My Wishlist</h6>
                    </div>
                    <div className="container-fluid">
                        <div className="row gy-3">
                            {
                                wishlistproduct.map((item, index) => {
                                    return (
                                        <>
                                            <div className="col-12 col-xl-6">
                                                <div className="d_item">
                                                    <div className="d_heart d-flex justify-content-end d_cur" onClick={() => handleremovewishlist(item._id)}>
                                                        <FaHeart />
                                                    </div>
                                                    <div className="row align-items-center">
                                                        <div className="col-3">
                                                            <div className="d_img">
                                                                {
                                                                    item?.productImage?.[0] && (
                                                                        <img
                                                                            src={`${BaseUrl}/${item.productImage[0]?.replace(/\\/g, '/')}`}
                                                                            alt="Product"
                                                                        />
                                                                    )
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className="col-9">
                                                            <div className="d_desc">
                                                                <div className="d_type">{item?.subcategory?.subCategoryName}</div>
                                                                <div className="d_name">{item?.productName}</div>
                                                                <div className="d_saved">You Saved ${item?.discount} %</div>
                                                                <div className="d-flex align-items-center">
                                                                    <FaStar className='me-2 d_starrate d_yellow' />
                                                                    <FaStar className='me-2 d_starrate d_yellow' />
                                                                    <FaStar className='me-2 d_starrate d_yellow' />
                                                                    <FaStar className='me-2 d_starrate d_yellow' />
                                                                    <FaStar className='me-2 d_starrate d_gray' />
                                                                    <div className="d_totalrate">(4)</div>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <div className="d_price">{(item?.price * (1 - item.discount / 100) * item?.quantity).toFixed(2)}</div>
                                                                    <div className="d_removesize">${(item?.price * item?.quantity).toFixed(2)}</div>
                                                                </div>
                                                                <div className="d-flex justify-content-end d_cur">
                                                                    <div className="d_addcart">
                                                                        <div className='d-flex align-items-center justify-content-center' onClick={() => handleAddToCart(item._id)}>
                                                                            <FiShoppingCart className='d_carticon me-3' />
                                                                            <p className='mb-0'>Add to cart </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d_later">Save for Later</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                            {/* <div className="col-12 col-xl-6">
                                <div className="d_item">
                                    <div className="d_heart d-flex justify-content-end">
                                        <FaHeart />
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-3">
                                            <div className="d_img">
                                                <img src={require('./../Image/bread.png')} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-9">
                                            <div className="d_desc">
                                                <div className="d_type">Bakery & Biscuits</div>
                                                <div className="d_name">Britannia Brown Bread</div>
                                                <div className="d_saved">You Saved $1</div>
                                                <div className="d-flex align-items-center">
                                                    <FaStar className='me-2 d_starrate d_yellow' />
                                                    <FaStar className='me-2 d_starrate d_yellow' />
                                                    <FaStar className='me-2 d_starrate d_yellow' />
                                                    <FaStar className='me-2 d_starrate d_yellow' />
                                                    <FaStar className='me-2 d_starrate d_gray' />
                                                    <div className="d_totalrate">(4)</div>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <div className="d_price">$10</div>
                                                    <div className="d_removesize">$11</div>
                                                </div>
                                                <div className="d-flex justify-content-end d_cur">
                                                    <div className="d_addcart">
                                                        <div className='d-flex align-items-center justify-content-center'>
                                                            <FiShoppingCart className='d_carticon me-3' />
                                                            <p className='mb-0'>Add to cart </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d_later">Save for Later</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-xl-6">
                                <div className="d_item">
                                    <div className="d_heart d-flex justify-content-end">
                                        <FaHeart />
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-3">
                                            <div className="d_img">
                                                <img src={require('./../Image/bread.png')} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-9">
                                            <div className="d_desc">
                                                <div className="d_type">Bakery & Biscuits</div>
                                                <div className="d_name">Britannia Brown Bread </div>
                                                <div className="d_saved">You Saved $1 </div>
                                                <div className="d-flex align-items-center">
                                                    <div className="d_price">$10</div>
                                                    <div className="d_removesize">$11</div>
                                                </div>
                                                <div className="d-flex justify-content-end d_cur">
                                                    <div className="d_addcart">
                                                        <div className='d-flex align-items-center justify-content-center'>
                                                            <FiShoppingCart className='d_carticon me-3' />
                                                            <p className='mb-0'>Add to cart </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d_later">Save for Later</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-xl-6">
                                <div className="d_item">
                                    <div className="d_heart d-flex justify-content-end">
                                        <FaHeart />
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-3">
                                            <div className="d_img">
                                                <img src={require('./../Image/bread.png')} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-9">
                                            <div className="d_desc">
                                                <div className="d_type">Bakery & Biscuits</div>
                                                <div className="d_name">Britannia Brown Bread </div>
                                                <div className="d_saved">You Saved $1 </div>
                                                <div className="d-flex align-items-center">
                                                    <div className="d_price">$10</div>
                                                    <div className="d_removesize">$11</div>
                                                </div>
                                                <div className="d-flex justify-content-end d_cur">
                                                    <div className="d_addcart">
                                                        <div className='d-flex align-items-center justify-content-center'>
                                                            <FiShoppingCart className='d_carticon me-3' />
                                                            <p className='mb-0'>Add to cart </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d_later">Save for Later</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-xl-6">
                                <div className="d_item">
                                    <div className="d_heart d-flex justify-content-end">
                                        <FaHeart />
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-3">
                                            <div className="d_img">
                                                <img src={require('./../Image/bread.png')} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-9">
                                            <div className="d_desc">
                                                <div className="d_type">Bakery & Biscuits</div>
                                                <div className="d_name">Britannia Brown Bread </div>
                                                <div className="d_saved">You Saved $1 </div>
                                                <div className="d-flex align-items-center">
                                                    <div className="d_price">$10</div>
                                                    <div className="d_removesize">$11</div>
                                                </div>
                                                <div className="d-flex justify-content-end d_cur">
                                                    <div className="d_addcart">
                                                        <div className='d-flex align-items-center justify-content-center'>
                                                            <FiShoppingCart className='d_carticon me-3' />
                                                            <p className='mb-0'>Add to cart </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d_later">Save for Later</div>
                                    </div>
                                </div>
                            </div> */}
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

        </>
    )
}

export default Wishlist
