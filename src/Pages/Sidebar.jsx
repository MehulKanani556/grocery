import React, { useEffect, useState } from 'react'
import { FaAngleRight, FaBars } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import '../CSS/Sidebar.css';
import User from '../Image/user.png';
import MyOrder from '../Image/MyOrder.png';
// import Wishlist from '../Image/wishlist.png';
import Coupon from '../Image/Coupon.png';
import Address from '../Image/address (2).png';
import Privacy from '../Image/privacy.png';
import Logout from '../Image/logout.png';
import Payment from '../Image/payment.png'
import { Offcanvas } from 'react-bootstrap';
import LogoutModal from './LogoutModal';
import axios from 'axios';

const BaseUrl = process.env.REACT_APP_BASEURL;

const Sidebar = () => {

  const [show, setShow] = useState(false);
  const [logoutmodalShow, setLogoutModalShow] = useState(false);
  const [user, setUser] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlelogout = () => {
    setLogoutModalShow(false);
  }

  const logoutUser = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    localStorage.removeItem('wishlist');
    localStorage.removeItem('googleToken');
    localStorage.removeItem('userEmail');
    setLogoutModalShow(false);
  }


  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');
  // console.log("userId", userId);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/api/getUser/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data.data)
      // console.log("response", response.data.data);

    } catch (error) {
      console.error('Data Fetching Error:', error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
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
            <NavLink to={'profile'}>
              <div className="ps-3 d-flex align-items-center V_account">
                <div className="V_account_img d-flex justify-content-center align-items-center">
                  <img src={User} alt="User Avatar" />
                </div>
                <div className="V_account_data d-flex align-items-center">
                    <div className="user-data " >
                      <p className="text-white text-medium mb-0">{user.name || ''}</p>
                      <span className="text-white mb-0">+91 {user.mobileNo}</span>
                    </div>
                </div>
                <div className="V_account_icon ms-auto">
                  <FaAngleRight className="text-white " />
                  {/* <FontAwesomeIcon icon={faAngleRight}  /> */}
                </div>
              </div>
            </NavLink>

            <NavLink to="/user/order" className={({ isActive }) =>
              `ps-3 V_account_part_2 d-flex align-items-center ${isActive ? "V_account_part_2_active" : ""}`
            }>
              <div className="d-flex" >
                <div className="V_account_img2 d-flex justify-content-center align-items-center">
                  <img src={MyOrder} alt="My Order" />
                </div>
                <div className="V_account_data d-flex align-items-center">
                  <p className="mb-0">My Order</p>
                </div>
              </div>
            </NavLink>

            {/* <NavLink to="/user/wishlist" className={({ isActive }) =>
              `ps-3 V_account_part_2 d-flex align-items-center ${isActive ? "V_account_part_2_active" : ""}`
            }>
              <div className=" d-flex">
                <div className="V_account_img2 d-flex justify-content-center align-items-center">
                  <img src={Wishlist} alt="Wishlist" />
                </div>
                <div className="V_account_data d-flex align-items-center">
                  <p className="mb-0">Wishlist</p>
                </div>
              </div>
            </NavLink> */}

            <NavLink to="/user/coupon" className={({ isActive }) =>
              `ps-3 V_account_part_2 d-flex align-items-center ${isActive ? "V_account_part_2_active" : ""}`
            }>
              <div className=" d-flex">
                <div className="V_account_img2 d-flex justify-content-center align-items-center">
                  <img src={Coupon} alt="Apply Coupon" />
                </div>
                <div className="V_account_data d-flex align-items-center">
                  <p className="mb-0">Apply Coupon</p>
                </div>
              </div>
            </NavLink>

            <NavLink to="/user/payment" className={({ isActive }) =>
              `ps-3 V_account_part_2 d-flex align-items-center ${isActive ? "V_account_part_2_active" : ""}`
            }>
              <div className=" d-flex">
                <div className="V_account_img2 d-flex justify-content-center align-items-center">
                  <img src={Payment} alt="payment" />
                </div>
                <div className="V_account_data d-flex align-items-center">
                  <p className="mb-0">Payment</p>
                </div>
              </div>
            </NavLink>

            <NavLink to="/user/address" className={({ isActive }) =>
              `ps-3 V_account_part_2 d-flex align-items-center ${isActive ? "V_account_part_2_active" : ""}`
            }>
              <div className=" d-flex">
                <div className="V_account_img2 d-flex justify-content-center align-items-center">
                  <img src={Address} alt="Delivery Address" />
                </div>
                <div className="V_account_data d-flex align-items-center">
                  <p className="mb-0">Delivery Address</p>
                </div>
              </div>
            </NavLink>

            <NavLink to="/user/privacy" className={({ isActive }) =>
              `ps-3 V_account_part_2 d-flex align-items-center ${isActive ? "V_account_part_2_active" : ""}`
            }>
              <div className=" d-flex">
                <div className="V_account_img2 d-flex justify-content-center align-items-center">
                  <img src={Privacy} alt="Account Privacy" />
                </div>
                <div className="V_account_data d-flex align-items-center">
                  <p className="mb-0">Account Privacy</p>
                </div>
              </div>
            </NavLink>



            {/* <Link >
              <div className="ps-3 V_account_part_2 d-flex align-items-center "  onClick={() => { setLogoutModalShow(true) }}> */}
            <NavLink onClick={() => { setLogoutModalShow(true) }}>
              <div className="ps-3 V_account_part_2 d-flex align-items-center "  >
                <div className="V_account_img2 d-flex justify-content-center align-items-center">
                  <img src={Logout} alt="Logout" />
                </div>
                <div className="V_account_data d-flex align-items-center">
                  <p className="mb-0">Logout</p>
                </div>
              </div>
            </NavLink>
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
            <NavLink to="/user/profile" onClick={handleClose}>
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
            </NavLink>
            <NavLink to="order" className="text-decoration-none " onClick={handleClose}>
              <div className="V_account_part_small_2 d-flex align-items-center my-2 py-2">
                <div className="V_account_small_img_2 d-flex justify-content-center align-items-center ms-2">
                  <img src={MyOrder} alt="my order" />
                </div>
                <div className="account-data-2 d-flex align-items-center ms-3">
                  <p className="mb-0 ">My Order</p>
                </div>
              </div>
            </NavLink>
            {/* <NavLink to="wishlist" className="text-decoration-none " onClick={handleClose}>
              <div className="V_account_part_small_2 d-flex align-items-center my-2 py-2">
                <div className="V_account_small_img_2 d-flex justify-content-center align-items-center ms-2">
                  <img src={Wishlist} alt="wishlist" />
                </div>
                <div className="account-data-2 d-flex align-items-center ms-3">
                  <p className="mb-0 ">Wishlist</p>
                </div>
              </div>
            </NavLink> */}
            <NavLink to="coupon" className="text-decoration-none " onClick={handleClose}>
              <div className="V_account_part_small_2 d-flex align-items-center my-2 py-2">
                <div className="V_account_small_img_2 d-flex justify-content-center align-items-center ms-2">
                  <img src={Coupon} alt="coupon" />
                </div>
                <div className="account-data-2 d-flex align-items-center ms-3">
                  <p className="mb-0 ">Apply Coupon</p>
                </div>
              </div>
            </NavLink>
            <NavLink to="payment" className="text-decoration-none " onClick={handleClose}>
              <div className="V_account_part_small_2 d-flex align-items-center my-2 py-2">
                <div className="V_account_small_img_2 d-flex justify-content-center align-items-center ms-2">
                  <img src={Payment} alt="" />
                </div>
                <div className="account-data-2 d-flex align-items-center ms-3">
                  <p className="mb-0 ">Payment</p>
                </div>
              </div>
            </NavLink>
            <NavLink to="address" className="text-decoration-none " onClick={handleClose}>
              <div className="V_account_part_small_2 d-flex align-items-center my-2 py-2">
                <div className="V_account_small_img_2 d-flex justify-content-center align-items-center ms-2">
                  <img src={Address} alt="Address" />
                </div>
                <div className="account-data-2 d-flex align-items-center ms-3">
                  <p className="mb-0 ">Delivery Address</p>
                </div>
              </div>
            </NavLink>
            <NavLink to="privacy" className="text-decoration-none " onClick={handleClose}>
              <div className="V_account_part_small_2 d-flex align-items-center my-2 py-2">
                <div className="V_account_small_img_2 d-flex justify-content-center align-items-center ms-2">
                  <img src={Privacy} alt="Privacy" />
                </div>
                <div className="account-data-2 d-flex align-items-center ms-3">
                  <p className="mb-0 ">Account Privacy</p>
                </div>
              </div>
            </NavLink>
            <NavLink onClick={() => { setLogoutModalShow(true) }}>
              <div className="V_account_part_small_2 d-flex align-items-center my-2 py-2"  >
                <div className="V_account_small_img_2 d-flex justify-content-center align-items-center ms-2">
                  <img src={Logout} alt="Logout" />
                </div>
                <div className="account-data-2 d-flex align-items-center ms-3">
                  <p className="mb-0 ">Logout</p>
                </div>
              </div>
            </NavLink>
          </div>
        </Offcanvas.Body>
      </Offcanvas>


      <LogoutModal
        isOpen={logoutmodalShow}
        onClose={handlelogout}
        onLogoutUser={logoutUser}
      />


    </>
  )
}

export default Sidebar