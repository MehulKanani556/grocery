import React, { useState } from 'react'
import { FaAngleRight, FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import '../CSS/Sidebar.css';
import User from '../Image/user.png';
import MyOrder from '../Image/MyOrder.png';
import Wishlist from '../Image/wishlist.png';
import Coupon from '../Image/Coupon.png';
import Address from '../Image/address (2).png';
import Privacy from '../Image/privacy.png';
import Logout from '../Image/logout.png';
import Payment from '../Image/payment.png'
import { Accordion, Modal, Offcanvas } from 'react-bootstrap';
import { IoCloseSharp } from 'react-icons/io5';
// import { FaBagShopping } from 'react-icons/fa6';

const Sidebar = ({setModalShow}) => {

  const [show, setShow] = useState(false);
  const [logoutmodalShow, setLogoutModalShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className=' '>
        <div className='d-flex justify-content-end'>
          {/* <h5 className='V_acc_heading py-4 m-0'>
            Account
          </h5> */}
          <button className='d-md-none border-0 V_bar h4 m-0 text-white p-2 m-3' onClick={handleShow}>
            <FaBars />
          </button>
        </div>
      </div>
      <section className='d-none d-md-block'>
        <div className="row  m-0">
          <div className="col-12">
            <Link to={'profile'}>
              <div className="ps-3 V_bg_color d-flex align-items-center V_account">
                <div className="V_account_img d-flex justify-content-center align-items-center">
                  <img src={User} alt="User Avatar" />
                </div>
                <div className="V_account_data d-flex align-items-center">
                  <div className="user-data ">
                    <p className="text-white text-medium mb-0">Ruhi Gupta</p>
                    <span className="text-white mb-0">+91 9874563210</span>
                  </div>
                </div>
                <div className="V_account_icon ms-auto">
                  <FaAngleRight className="text-white " />
                  {/* <FontAwesomeIcon icon={faAngleRight}  /> */}
                </div>
              </div>
            </Link>

            <Link to={'order'}>
              <div className="ps-3 V_account_part_2 d-flex align-items-center ">
                <div className="V_account_img2 d-flex justify-content-center align-items-center">
                  <img src={MyOrder} alt="My Order" />
                </div>
                <div className="V_account_data d-flex align-items-center">
                  <p className="mb-0">My Order</p>
                </div>
              </div>
            </Link>

            <Link to={'wishlist'}>
              <div className="ps-3 V_account_part_2 d-flex align-items-center ">
                <div className="V_account_img2 d-flex justify-content-center align-items-center">
                  <img src={Wishlist} alt="Wishlist" />
                </div>
                <div className="V_account_data d-flex align-items-center">
                  <p className="mb-0">Wishlist</p>
                </div>
              </div>
            </Link>

            <Link to={'coupon'}>
              <div className="ps-3 V_account_part_2 d-flex align-items-center ">
                <div className="V_account_img2 d-flex justify-content-center align-items-center">
                  <img src={Coupon} alt="Apply Coupon" />
                </div>
                <div className="V_account_data d-flex align-items-center">
                  <p className="mb-0">Apply Coupon</p>
                </div>
              </div>
            </Link>

            <Link to={'payment'}>
              <div className="ps-3 V_account_part_2 d-flex align-items-center ">
                <div className="V_account_img2 d-flex justify-content-center align-items-center">
                  <img src={Payment} alt="payment" />
                </div>
                <div className="V_account_data d-flex align-items-center">
                  <p className="mb-0">Payment</p>
                </div>
              </div>
            </Link>

            <Link to={'address'}>
              <div className="ps-3 V_account_part_2 d-flex align-items-center ">
                <div className="V_account_img2 d-flex justify-content-center align-items-center">
                  <img src={Address} alt="Delivery Address" />
                </div>
                <div className="V_account_data d-flex align-items-center">
                  <p className="mb-0">Delivery Address</p>
                </div>
              </div>
            </Link>

            <Link to={'privacy'}>
              <div className="ps-3 V_account_part_2 d-flex align-items-center ">
                <div className="V_account_img2 d-flex justify-content-center align-items-center">
                  <img src={Privacy} alt="Account Privacy" />
                </div>
                <div className="V_account_data d-flex align-items-center">
                  <p className="mb-0">Account Privacy</p>
                </div>
              </div>
            </Link>



            <Link >
              <div className="ps-3 V_account_part_2 d-flex align-items-center "  onClick={() => { setLogoutModalShow(true) }}>
                <div className="V_account_img2 d-flex justify-content-center align-items-center">
                  <img src={Logout} alt="Logout" />
                </div>
                <div className="V_account_data d-flex align-items-center">
                  <p className="mb-0">Logout</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>



      {/* offcanvas */}
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            Account
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="account" style={{ height: '100%', overflowY: 'auto' }}>
            <Link to="profile">
              <div className="V_account_part_small d-flex align-items-center">
                <div className="V_account_small_img d-flex justify-content-center align-items-center px-2 ms-2">
                  <img src={User} alt="User" />
                </div>
                <div className="V_small_account_data d-flex align-items-center ms-3">
                  <div className="V_small_user_data">
                    <p className="text-white text-medium mb-0">Ruhi Gupta</p>
                    <span className="text-white mb-0">+91 9874563210</span>
                  </div>
                </div>
                <div className="V_account_icon ms-auto">
                  <FaAngleRight className="text-white " />
                </div>
              </div>
            </Link>
            <Link to="order" className="text-decoration-none ">
              <div className="V_account_part_small_2 d-flex align-items-center my-2 py-2">
                <div className="V_account_small_img_2 d-flex justify-content-center align-items-center ms-2">
                  <img src={MyOrder} alt="my order" />
                </div>
                <div className="account-data-2 d-flex align-items-center ms-3">
                  <p className="mb-0 ">My Order</p>
                </div>
              </div>
            </Link>
            <Link to="wishlist" className="text-decoration-none ">
              <div className="V_account_part_small_2 d-flex align-items-center my-2 py-2">
                <div className="V_account_small_img_2 d-flex justify-content-center align-items-center ms-2">
                  <img src={Wishlist} alt="wishlist" />
                </div>
                <div className="account-data-2 d-flex align-items-center ms-3">
                  <p className="mb-0 ">Wishlist</p>
                </div>
              </div>
            </Link>
            <Link to="coupon" className="text-decoration-none ">
              <div className="V_account_part_small_2 d-flex align-items-center my-2 py-2">
                <div className="V_account_small_img_2 d-flex justify-content-center align-items-center ms-2">
                  <img src={Coupon} alt="coupon" />
                </div>
                <div className="account-data-2 d-flex align-items-center ms-3">
                  <p className="mb-0 ">Apply Coupon</p>
                </div>
              </div>
            </Link>
            <Link to="payment" className="text-decoration-none ">
              <div className="V_account_part_small_2 d-flex align-items-center my-2 py-2">
                <div className="V_account_small_img_2 d-flex justify-content-center align-items-center ms-2">
                  <img src={Payment} alt="" />
                </div>
                <div className="account-data-2 d-flex align-items-center ms-3">
                  <p className="mb-0 ">Payment</p>
                </div>
              </div>
            </Link>
            <Link to="address" className="text-decoration-none ">
              <div className="V_account_part_small_2 d-flex align-items-center my-2 py-2">
                <div className="V_account_small_img_2 d-flex justify-content-center align-items-center ms-2">
                  <img src={Address} alt="Address" />
                </div>
                <div className="account-data-2 d-flex align-items-center ms-3">
                  <p className="mb-0 ">Delivery Address</p>
                </div>
              </div>
            </Link>
            <Link to="privacy" className="text-decoration-none ">
              <div className="V_account_part_small_2 d-flex align-items-center my-2 py-2">
                <div className="V_account_small_img_2 d-flex justify-content-center align-items-center ms-2">
                  <img src={Privacy} alt="Privacy" />
                </div>
                <div className="account-data-2 d-flex align-items-center ms-3">
                  <p className="mb-0 ">Account Privacy</p>
                </div>
              </div>
            </Link>
            <Link >
              <div className="V_account_part_small_2 d-flex align-items-center my-2 py-2"  onClick={() => { setLogoutModalShow(true) }}>
                <div className="V_account_small_img_2 d-flex justify-content-center align-items-center ms-2">
                  <img src={Logout} alt="Logout" />
                </div>
                <div className="account-data-2 d-flex align-items-center ms-3">
                  <p className="mb-0 ">Logout</p>
                </div>
              </div>
            </Link>
          
          </div>
        </Offcanvas.Body>
      </Offcanvas>


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


    </>
  )
}

export default Sidebar