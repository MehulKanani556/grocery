import axios from 'axios'
import React, { useEffect } from 'react'
import { BiSolidRightArrow } from 'react-icons/bi'
import { FaHeart, FaStar } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'

const Wishlist = () => {

    const BaseUrl = process.env.REACT_APP_BASEURL;

    const userId = localStorage.getItem('userId');

    const fetchwishlist = async () => {
        try {
            const res = await axios.get(`${BaseUrl}/api/allMyWishList/${userId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            console.log("response", res.data.data);
        }
        catch (error) {
            console.error("Not Fetch product details:", error);
        }
    }

    useEffect(() => {
        fetchwishlist();
    },[])

    return (
        <>

            <div className="d_wishlist">
                <div className="d_right px-2 px-sm-0">
                    <div className="d_heading">
                        <h6>My Wishlist</h6>
                    </div>
                    <div className="container-fluid">
                        <div className="row gy-3">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Wishlist
