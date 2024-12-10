import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { TiArrowSortedDown } from 'react-icons/ti'
import { Link } from 'react-router-dom'

const Order = () => {
    return (
        <>

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
                <div className="row gy-4">
                    <div className="col-12">
                        <div className="d_orderbox">
                            <div className="d_firstsec">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d_leftside d-flex align-items-center">
                                        <div className='d_rightspace'>
                                            <div className="d_text">Order Pending</div>
                                            <div className="d_desc">03 june 2024</div>
                                        </div>
                                        <div className='d_rightspace'>
                                            <div className="d_text">Total</div>
                                            <div className="d_desc">$10.00</div>
                                        </div>
                                        <div>
                                            <div className="d_ship">Ship to <span>Amma Anderson</span></div>
                                        </div>
                                    </div>
                                    <div className="d_rightside">
                                        <div>
                                            <div className="d_orderid">Order ID 32435654</div>
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
                                <div className="row">
                                    <div className="col-12 col-sm-10">
                                        <Link to='' className='d_ordertrack'>Order Tracking</Link>
                                        <div className="d-flex align-items-center">
                                            <div className="d_img">
                                                <img src={require('../Image/pro1.png')} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Order
