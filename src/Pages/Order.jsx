import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { TiArrowSortedDown } from 'react-icons/ti'
import { Link } from 'react-router-dom'

const BaseUrl = process.env.REACT_APP_BASEURL;
const token = localStorage.getItem('token');
const userId = localStorage.getItem('userId');

const Order = () => {

    const [orderData, setOrderData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${BaseUrl}/api/getMyOrder/${userId}`, {
                headers: { Authorization: `Berar ${token}` }
            });
            console.log("response.data.data", response.data.data);

            setOrderData(response.data.data);
        } catch (error) {
            console.error('Data fetching Error:', error);
        }
    }
    useEffect(() => {
        fetchData();
    },[])
    return (
        <>

            <div className="d_emptyorder h-100 d-flex justify-content-center align-items-center d-none">
                <div className="d_img text-center">
                    <img src={require('../Image/emptyorder.png')} alt="" />
                    <p className='mb-0'>Oops, you haven’t placed an order yet</p>
                </div>
            </div>

            <div className="d_order">
                <div className="d_heading d-flex justify-content-between align-items-center">
                    <h6>My Order</h6>
                    <div class="d_search">
                        <span class="d_searchicon">
                            <FiSearch />
                        </span>
                        <input type="text" placeholder="Search by Customer, Product, or Order ID "
                            class="d_searchinput" />
                    </div>
                </div>
                {orderData.map((item, index) => (
                    <div className="row gy-4">
                        <div className="col-12">
                            <div className="d_orderbox" key={index}>
                                <div className="d_firstsec">
                                    <div className="d_warp d-flex justify-content-between align-items-center">
                                        <div className="d_leftside d-flex align-items-center">
                                            <div className='d_rightspace'>
                                                <div className="d_text">Order {item.orderItems.status}</div>
                                                <div className="d_desc">{new Date(item.createdAt).toLocaleDateString()}</div>
                                            </div>
                                            <div className='d_rightspace'>
                                                <div className="d_text">Total</div>
                                                <div className="d_desc">${item.totalAmount}</div>
                                            </div>
                                            <div>
                                                <div className="d_ship">Ship to <span>{item.address}</span></div>
                                            </div>
                                        </div>
                                        <div className="d_rightside">
                                            <div>
                                                <div className="d_orderid">Order ID {item.orderId }</div>
                                                <div className="d-flex align-items-center">
                                                    <div className='d_orderviewdel'>View Order Detail</div>
                                                    <TiArrowSortedDown className='ms-2' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d_secondsec">
                                    <div className="d_suppiler">Supplier : <span>MD_CREATIONS</span></div>
                                </div>
                                <div className="d_mainbox">
                                    <div className="row align-items-center">
                                        <div className="col-12 col-lg-8 col-xl-9">
                                            <Link to='' className='d_ordertrack'>Order Tracking</Link>
                                            <div className="d-flex align-items-center mt-3">
                                                <div className="d_img">
                                                    <img src={require('../Image/pro1.png')} alt="" />
                                                </div>
                                                <div className="d_con">
                                                    <div className="d_ordertype">Bakery & Biscuits</div>
                                                    <div className="d_ordername">Britannia Brown Bread</div>
                                                    <div className="d_orderreturn">Easy Return</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4 col-xl-3 d-flex justify-content-end">
                                            <div className="d_cancelbtn">
                                                <Link to="/user/cancelorder">Cancel Order</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d_thirdsec">
                                    <div className="d_ratetext">How was the product?</div>
                                    <div className="d-flex align-items-center">
                                        <FaStar className='me-2 d_yellow' />
                                        <FaStar className='me-2 d_yellow' />
                                        <FaStar className='me-2 d_yellow' />
                                        <FaStar className='me-2 d_yellow' />
                                        <FaStar className='me-2 d_gray' />
                                        <div className="d_totalrate">(4)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                   </div>
                ))}
            </div>

        </>
    )
}

export default Order
