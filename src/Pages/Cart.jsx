import React, { useState } from 'react'
import './../CSS/cart.css'
import { BiSolidRightArrow } from 'react-icons/bi'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { Modal } from 'react-bootstrap'
import { IoCloseSharp } from 'react-icons/io5'
import { FiSearch } from 'react-icons/fi'

const Cart = () => {

    const [logoutmodalShow, setLogoutModalShow] = useState(false);
    const [deleteaccountmodalShow, setDeleteaccountModalShow] = useState(false);
    const [paymentmodalShow, setPaymentModalShow] = useState(false);
    const [addaddressmodalShow, setAddaddressModalShow] = useState(true);

    return (
        <>

            <div className="container-fluid">
                <div className="row d_100vh flex-row flex-column-reverse">
                    <div className="col-sm-12 col-lg-4 col-xl-3 d_100vh">
                        <div className="d_left d_100vh">
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
                            <div className="d_proceedbtn mt-auto">
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
                                        <a href="" className='d-block text-center'>Yes</a>
                                    </div>
                                    <div className="d_modalbtn d_nobtn" onClick={() => setLogoutModalShow(false)}>
                                        <a href="" className='d-block text-center'>No</a>
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
                                        <a href="" className='d-block text-center'>Yes</a>
                                    </div>
                                    <div className="d_modalbtn d_nobtn" onClick={() => setDeleteaccountModalShow(false)}>
                                        <a href="" className='d-block text-center'>No</a>
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
                    </div>
                </Modal.Body>
            </Modal>


            {/* Add Address Modal */}

        </>
    )
}

export default Cart
