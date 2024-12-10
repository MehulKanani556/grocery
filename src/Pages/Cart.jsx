import React, { useState } from 'react'
import './../CSS/dstyle.css'
import { BiSolidRightArrow } from 'react-icons/bi'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { Modal } from 'react-bootstrap'
import { IoCloseSharp } from 'react-icons/io5'
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { RiHome4Line } from 'react-icons/ri'
import { MdOutlineHomeRepairService } from 'react-icons/md'
import { PiBuildingApartmentDuotone } from 'react-icons/pi'
import { FaArrowLeftLong } from 'react-icons/fa6'

const Cart = () => {

    const [logoutmodalShow, setLogoutModalShow] = useState(false);
    const [deleteaccountmodalShow, setDeleteaccountModalShow] = useState(false);
    const [paymentmodalShow, setPaymentModalShow] = useState(false);
    const [addaddressmodalShow, setAddaddressModalShow] = useState(false);

    const [currentSection, setCurrentSection] = useState("cart");

    const handleActiveClass = (event) => {
        const links = document.querySelectorAll(".d_cur");
        links.forEach((link) => link.classList.remove("active")); // Remove active from all
        event.currentTarget.classList.add("active"); // Add active to clicked
    };

    return (
        <>

            <div className="container-fluid">
                <div className="row d_100vh flex-lg-row flex-column-reverse">
                    <div className="col-sm-12 col-lg-4 col-xl-3 d_100vh">

                        {/* cart section  */}
                        <div className={`d_left d_100vh ${currentSection === "cart" ? "" : "d-none"}`} >
                            <div className="d_box">
                                <div className="d-flex align-items-center">
                                    <div className="d_img d-flex justify-content-center align-items-center">
                                        <img src={require('../Image/time.png')} alt="" />
                                    </div>
                                    <div className="d_text">
                                        <h6>Delivery in 15 minutes</h6>
                                        <p className='mb-0'>Shipment of 1 item</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d_box">
                                <div className="d-flex align-items-center">
                                    <div className="d_img d-flex justify-content-center align-items-center">
                                        <img src={require('../Image/applycoupon.png')} alt="" />
                                    </div>
                                    <div className="d_text">
                                        <h6>Apply Coupon</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="d_bill">
                                <h6 className='mb-2'>Bill Details</h6>
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <div className="d_title">Sub Total</div>
                                    <div className="d_price"><span>$11</span>$10</div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <div className="d_title">Delivery Charge</div>
                                    <div className="d_price">$5</div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <div className="d_title">Handling Charge </div>
                                    <div className="d_price">$2</div>
                                </div>
                            </div>
                            <div className="d_total">
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <div className="d_title">Grand Total</div>
                                    <div className="d_price">$17</div>
                                </div>
                            </div>
                            <div className="d_box">
                                <div className="d_text">
                                    <h6 className='mb-1'>Cancellation Policy</h6>
                                    <p className='mb-0'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                            <div className="d_proceedbtn mt-auto d_cur" onClick={() => setCurrentSection("delivery")}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <div className="d_totalprice">$40</div>
                                        <div className="d_totaldesc">Total</div>
                                    </div>
                                    <div className="d_btnname">Proceed</div>
                                    <div><BiSolidRightArrow className='d_icon' /></div>
                                </div>
                            </div>
                        </div>

                        {/* Delivery Address */}
                        <div className={`d_deliveryadd d_100vh ${currentSection === "delivery" ? "" : "d-none"}`}>
                            <div className="d_select">
                                <div className="d-flex align-items-center">
                                    <FaArrowLeftLong className='me-xl-5 me-3 d_cur'  onClick={() => setCurrentSection("cart")} />
                                    <h6>Select Delivery Address</h6>
                                </div>
                            </div>
                            <div className="d_addinput">
                                <div className="d-flex align-items-center">
                                    <div className="d_img">
                                        <img src={require('../Image/plus.png')} alt="" />
                                    </div>
                                    <p className='mb-0'>Add New Address</p>
                                </div>
                            </div>
                            <p className='mb-1'>Your Saved Address</p>
                            <div className="d_addinput d_savedaddress">
                                <div className="d-flex align-items-center">
                                    <div className="d_img">
                                        <img src={require('../Image/deliveryimg1.png')} alt="" />
                                    </div>
                                    <p className='mb-0 d_desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                                </div>
                            </div>
                            <div className="d_addinput d_savedaddress">
                                <div className="d-flex align-items-center">
                                    <div className="d_img">
                                        <img src={require('../Image/deliveryimg2.png')} alt="" />
                                    </div>
                                    <p className='mb-0 d_desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-8 col-xl-9">
                        <div className="d_right">
                            <div className="d_heading">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6>Your Cart(4)</h6>
                                    <div className="d_price">$ 40</div>
                                </div>
                            </div>
                            <div className="row gy-3">
                                <div className="col-12 col-xl-6">
                                    <div className="d_item">
                                        <div className="row align-items-center">
                                            <div className="col-3">
                                                <div className="d_img">
                                                    <img src={require('./../Image/bread.png')} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-9">
                                                <div className="d_desc">
                                                    <div className="d_type">Bakery & Biscuits</div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d_name">Britannia Brown Bread </div>
                                                        <div className="d_size">1 Packet</div>
                                                    </div>
                                                    <div className="d_saved">You Saved $1 </div>
                                                    <div className="d-flex align-items-center">
                                                        <div className="d_price">$10</div>
                                                        <div className="d_removesize">$11</div>
                                                    </div>
                                                    <div className="d-flex justify-content-end">
                                                        <div className="d_cartbtn">
                                                            <div className="d-flex justify-content-around align-items-center">
                                                                <div className='d_carticon'>-</div>
                                                                <div className='d_carticon'>1</div>
                                                                <div className='d_carticon'>+</div>
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
                                        <div className="row align-items-center">
                                            <div className="col-3">
                                                <div className="d_img">
                                                    <img src={require('./../Image/bread.png')} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-9">
                                                <div className="d_desc">
                                                    <div className="d_type">Bakery & Biscuits</div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d_name">Britannia Brown Bread </div>
                                                        <div className="d_size">1 Packet</div>
                                                    </div>
                                                    <div className="d_saved">You Saved $1 </div>
                                                    <div className="d-flex align-items-center">
                                                        <div className="d_price">$10</div>
                                                        <div className="d_removesize">$11</div>
                                                    </div>
                                                    <div className="d-flex justify-content-end">
                                                        <div className="d_cartbtn">
                                                            <div className="d-flex justify-content-around align-items-center">
                                                                <div className='d_carticon'>-</div>
                                                                <div className='d_carticon'>1</div>
                                                                <div className='d_carticon'>+</div>
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
                                        <div className="row align-items-center">
                                            <div className="col-3">
                                                <div className="d_img">
                                                    <img src={require('./../Image/bread.png')} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-9">
                                                <div className="d_desc">
                                                    <div className="d_type">Bakery & Biscuits</div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d_name">Britannia Brown Bread </div>
                                                        <div className="d_size">1 Packet</div>
                                                    </div>
                                                    <div className="d_saved">You Saved $1 </div>
                                                    <div className="d-flex align-items-center">
                                                        <div className="d_price">$10</div>
                                                        <div className="d_removesize">$11</div>
                                                    </div>
                                                    <div className="d-flex justify-content-end">
                                                        <div className="d_cartbtn">
                                                            <div className="d-flex justify-content-around align-items-center">
                                                                <div className='d_carticon'>-</div>
                                                                <div className='d_carticon'>1</div>
                                                                <div className='d_carticon'>+</div>
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
                                        <div className="row align-items-center">
                                            <div className="col-3">
                                                <div className="d_img">
                                                    <img src={require('./../Image/bread.png')} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-9">
                                                <div className="d_desc">
                                                    <div className="d_type">Bakery & Biscuits</div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d_name">Britannia Brown Bread </div>
                                                        <div className="d_size">1 Packet</div>
                                                    </div>
                                                    <div className="d_saved">You Saved $1 </div>
                                                    <div className="d-flex align-items-center">
                                                        <div className="d_price">$10</div>
                                                        <div className="d_removesize">$11</div>
                                                    </div>
                                                    <div className="d-flex justify-content-end">
                                                        <div className="d_cartbtn">
                                                            <div className="d-flex justify-content-around align-items-center">
                                                                <div className='d_carticon'>-</div>
                                                                <div className='d_carticon'>1</div>
                                                                <div className='d_carticon'>+</div>
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
            </div>

            {/* Logout modal */}

            <Modal
                show={logoutmodalShow}
                onHide={() => setLogoutModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='d_logoutmodal'
            >
                <Modal.Body className='ps-lg-5 ps-sm-3'>
                    <div className="d_con">
                        <div className='d-flex justify-content-end d_cur' onClick={() => setLogoutModalShow(false)}><IoCloseSharp className='d_closeicon' /></div>
                        <div className="row align-items-center my-xl-5 my-lg-4 my-3">
                            <div className="col-12 col-sm-7">
                                <div className="d_textwidth">
                                    <div className="d_heading">
                                        <h6>logout</h6>
                                        <p className='mb-0'>Do you Want to Exit this page ?</p>
                                    </div>
                                    <div className="d_modalbtn mb-3">
                                        <Link to="" className='d-block text-center'>Yes</Link>
                                    </div>
                                    <div className="d_modalbtn d_nobtn" onClick={() => setLogoutModalShow(false)}>
                                        <Link to="" className='d-block text-center'>No</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-5 d-sm-block d-none">
                                <div className="d_img">
                                    <img src={require('../Image/logoutimg.png')} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>


            {/* Logout modal */}

            {/* Delete Account Modal */}

            <Modal
                show={deleteaccountmodalShow}
                onHide={() => setDeleteaccountModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='d_logoutmodal'
            >
                <Modal.Body className='ps-lg-5 ps-sm-3'>
                    <div className="d_con">
                        <div className='d-flex justify-content-end d_cur' onClick={() => setDeleteaccountModalShow(false)}><IoCloseSharp className='d_closeicon' /></div>
                        <div className="row align-items-center my-xl-5 my-lg-4 my-3">
                            <div className="col-12 col-sm-7">
                                <div className="d_textwidth">
                                    <div className="d_heading">
                                        <h6>Delete Account</h6>
                                        <p className='mb-0'>Do you Want to This Account ?</p>
                                    </div>
                                    <div className="d_modalbtn mb-3">
                                        <Link to="" className='d-block text-center'>Yes</Link>
                                    </div>
                                    <div className="d_modalbtn d_nobtn" onClick={() => setDeleteaccountModalShow(false)}>
                                        <Link to="" className='d-block text-center'>No</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-5 d-sm-block d-none">
                                <div className="d_img">
                                    <img src={require('../Image/deleteaccount.png')} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Delete Account Modal */}

            {/* Payment Modal */}

            <Modal
                show={paymentmodalShow}
                onHide={() => setPaymentModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='d_logoutmodal d_paymentmodal'
            >
                <Modal.Body className='text-center'>
                    <div className="d_con">
                        <div className='d-flex justify-content-end d_cur' onClick={() => setPaymentModalShow(false)}><IoCloseSharp className='d_closeicon' /></div>
                        <div className="my-xl-5 my-lg-4 my-3'">
                            <div className="d_img text-center">
                                <img src={require('../Image/paymentimg.png')} alt="" />
                            </div>
                            <h6>Order Placed Successfully!</h6>
                            <p className='mb-0'>Congratulations! Your order has been placed.</p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Payment Modal */}

            {/* Add Address Modal */}

            <Modal
                show={addaddressmodalShow}
                onHide={() => setAddaddressModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='d_addressmodal'
            >
                <Modal.Body>
                    <div className="d_content">
                        <div class="d_search">
                            <span class="d_searchicon">
                                <FiSearch />
                            </span>
                            <input type="text" placeholder="Search for a new, locality..."
                                class="d_searchinput" />
                        </div>
                        <div className="row gy-3">
                            <div className="col-12 col-sm-6">
                                <iframe
                                    id="map-frame"
                                    src="https://www.google.com/maps/embed?..."
                                    allowFullScreen=""
                                    loading="lazy"
                                    className="rounded d_map"
                                    title="Google Map"
                                    width={"100%"}
                                ></iframe>
                                <div className="d_gaddress">
                                    <h6>Delivering tour order to</h6>
                                    <div className="d_box">
                                        <div className="d-flex align-items-center">
                                            <img src={require('../Image/addressimg.png')} alt="" />
                                            <p className='mb-0'>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="d_enteraddress">
                                    <div className="d_head pb-2 d-flex justify-content-between align-items-center">
                                        <h6>Enter complete address </h6>
                                        <IoCloseSharp />
                                    </div>
                                    <div className="d_ordering">
                                        <div className='d_que'>Who you are ordering for?</div>
                                        <div className="d_radio d-flex align-items-center mb-2">
                                            <div className="d-flex align-items-center me-3">
                                                <input type="radio" className='me-2' name='self' />
                                                <label>Myself</label>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <input type="radio" className='me-2' name='self' />
                                                <label>Someone else</label>
                                            </div>
                                        </div>
                                        <div className="d_savetype">
                                            <p className='mb-1'>Save address as</p>
                                            <div className="d-flex align-items-center flex-wrap">
                                                <Link className='d-flex align-items-center active me-lg-3 me-2 d_cur' onClick={handleActiveClass}>
                                                    <RiHome4Line className='me-1 d_addressicon' />
                                                    <p className='mb-0'>Home</p>
                                                </Link>
                                                <Link className='d-flex align-items-center me-lg-3 me-2 d_cur' onClick={handleActiveClass}>
                                                    <MdOutlineHomeRepairService className='me-1 d_addressicon' />
                                                    <p className='mb-0'>Home</p>
                                                </Link>
                                                <Link className='d-flex align-items-center me-lg-3 me-2 d_cur' onClick={handleActiveClass}>
                                                    <PiBuildingApartmentDuotone className='me-1 d_addressicon' />
                                                    <p className='mb-0'>Hotel</p>
                                                </Link>
                                                <Link className='d-flex align-items-center d_cur d_other' onClick={handleActiveClass}>
                                                    <div className='me-1 d_addressicon'></div>
                                                    <p className='mb-0'>other</p>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="d_form pb-0">
                                            <div className="row gy-lg-3 gy-2">
                                                <div className="col-12">
                                                    <input type="text" placeholder='Flat / House no / Building name' />
                                                </div>
                                                <div className="col-12">
                                                    <input type="text" placeholder='Floor (optional)' />
                                                </div>
                                                <div className="col-12">
                                                    <input type="text" placeholder='Area' />
                                                </div>
                                                <div className="col-12">
                                                    <input type="text" placeholder='Sector/Locality' />
                                                </div>
                                                <p className='mb-0'>Enter your details fpr seamless delivery experience</p>
                                                <div className="col-12">
                                                    <input type="text" placeholder='Your name' />
                                                </div>
                                                <div className="col-12">
                                                    <input type="text" placeholder='Your phone number' />
                                                </div>
                                                <div className="col-12">
                                                    <Link to="" className='d-block text-center d_saveaddbtn'>Save address</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>


            {/* Add Address Modal */}

        </>
    )
}

export default Cart
