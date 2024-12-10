import React, { useState } from 'react'
import './../CSS/dstyle.css'
import { FaStar } from 'react-icons/fa'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Deatail = () => {

    const [mainImage, setMainImage] = useState(require("../Image/pro1.png"));

    const handleImageClick = (imgSrc) => {
        setMainImage(imgSrc);
    };


    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <div className="d_delleft">
                            <div className="d_mainimg d-flex justify-content-center">
                                <div className="d_img">
                                    <img src={mainImage} alt="" />
                                </div>
                            </div>
                            <div className="d-flex justify-content-center mb-xl-4 mb-2">
                                <div className="d_subimg d_cur" onClick={() => handleImageClick(require("../Image/pro1.png"))}>
                                    <img src={require('../Image/pro1.png')} alt="" />
                                </div>
                                <div className="d_subimg d_cur" onClick={() => handleImageClick(require("../Image/pro2.png"))}>
                                    <img src={require('../Image/pro2.png')} alt="" />
                                </div>
                                <div className="d_subimg d_cur" onClick={() => handleImageClick(require("../Image/pro3.png"))}>
                                    <img src={require('../Image/pro3.png')} alt="" />
                                </div>
                                <div className="d_subimg d_cur" onClick={() => handleImageClick(require("../Image/pro4.png"))}>
                                    <img src={require('../Image/pro4.png')} alt="" />
                                </div>
                                <div className="d_subimg d_cur" onClick={() => handleImageClick(require("../Image/pro5.png"))}>
                                    <img src={require('../Image/pro5.png')} alt="" />
                                </div>
                            </div>
                            <div className="d_head">
                                <div className="d_title fw-bold">Product Deatials</div>
                                <div className="d_desc">1 Packet</div>
                            </div>
                            <div className="d_del">
                                <div className="d_title">Nutrient Value & Benefits</div>
                                <div className="d_desc">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</div>
                            </div>
                            <div className="d_del">
                                <div className="d_title">Storage Temperature </div>
                                <div className="d_desc">7 - 13</div>
                            </div>
                            <div className="d_del">
                                <div className="d_title">Description</div>
                                <div className="d_desc">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                            </div>
                            <div className="d_del">
                                <div className="d_title">Disclaimer</div>
                                <div className="d_desc">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                            </div>
                            <div className="d_del">
                                <div className="d_title">FSSAI License</div>
                                <div className="d_desc">311XXXXXXXXX11</div>
                            </div>
                            <div className="d_del">
                                <div className="d_title">Customer Care details</div>
                                <div className="d_desc">Email : Info@grocery.com</div>
                            </div>
                            <div className="d_del">
                                <div className="d_title">Return Policy</div>
                                <div className="d_desc">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                            </div>
                            <div className="d_del">
                                <div className="d_title">Expiry Date</div>
                                <div className="d_desc">Expiry Date</div>
                            </div>
                            <div className="d_del">
                                <div className="d_title">Seller FSSAI</div>
                                <div className="d_desc">Lorem Ipsum has been the industry's standard</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="d_delright">
                            <div className="d_pad">
                                <div className="d_desc pb-3">
                                    <div className="d_type">Bakery & Biscuits</div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d_name">Britannia Brown Bread </div>
                                        <div className="d_size">1 Packet</div>
                                    </div>
                                    <div className="d_saved">You Saved $1 </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className='d-flex align-items-center'>
                                            <div className="d_price">$10</div>
                                            <div className="d_removesize">$11</div>
                                        </div>
                                        <div className="d_cartbtn">
                                            <div className="d-flex justify-content-around align-items-center">
                                                <button className='d_carticon'>-</button>
                                                <div className='d_carticon'>1</div>
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
                                    <div className="d_ratebox1">
                                        <div className="d_box mb-2">
                                            <div className="d-flex align-items-center">
                                                <div className="d_rate">4.6</div>
                                                <FaStar className='d_star' />
                                            </div>
                                        </div>
                                        <p className='mb-1'>Good Quality
                                        </p>
                                        <div className="d_username">Shivansh Agarwal</div>
                                    </div>
                                    <div className="d_ratebox1">
                                        <div className="d_box mb-2">
                                            <div className="d-flex align-items-center">
                                                <div className="d_rate">4.6</div>
                                                <FaStar className='d_star' />
                                            </div>
                                        </div>
                                        <p className='mb-1'>Good Quality
                                        </p>
                                        <div className="d_username">Shivansh Agarwal</div>
                                    </div>
                                    <div className="d_ratebox1">
                                        <div className="d_box mb-2">
                                            <div className="d-flex align-items-center">
                                                <div className="d_rate">4.6</div>
                                                <FaStar className='d_star' />
                                            </div>
                                        </div>
                                        <p className='mb-1'>Good Quality
                                        </p>
                                        <div className="d_username">Shivansh Agarwal</div>
                                    </div>
                                </div>
                            </div>
                            <div className="d_view text-center">
                                <Link to="">View All Reviews</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Deatail
