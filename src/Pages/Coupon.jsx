import React, { useState } from 'react';
import '../CSS/Profile.css';
import Axis from '../Image/Axis.png';
import { FaAngleDown, FaAngleRight, FaAngleUp } from 'react-icons/fa6';
import Phonepe from '../Image/phonepe.png';
import { IoMdArrowDropdown } from 'react-icons/io';
import CoDown from '../Image/coupon down.png';

const Coupon = () => {

    const [show, setShow] = useState(true);

    const toggleDetails = () => {
        setShow((prev) => !prev);
    };
    return (
        <>
            <div className='px-3 px-md-0 pe-md-5'>
                <div className="col-12  pe-md-5  px-3 px-sm-4 px-md-0 ">
                    <div className="V_information">
                        <div className=" pt-3 d-flex align-items-center justify-content-between">
                            <h2 className="py-4">Coupons</h2>
                        </div>
                    </div>
                </div>

                <div className=' V_net_border  w-100'>
                    <div className='d-flex py-2 V_dashed'>
                        <div className='px-3'>
                            <img src={Axis} alt="hdfc logo" className='V_upi_img_size' />
                        </div>
                        <div className='ps-2 align-self-center'>
                            <p className='fw-bold V_flat'> Flat 250 off on Sports pro...</p>
                            <p className='V_use_coupon'>Use code <span className='fw-bolder'> AXISSPORTS250 </span></p>
                        </div>
                        <div className='ms-auto align-self-center pe-5'>
                            <button className='V_apply px-3 py-1'>
                                apply
                            </button>
                        </div>
                    </div>
                    <hr className='' />

                    <div className='px-2 py-3 V_dashed'>
                        <div className='px-3 V_shop'>
                            <p className='V_shop_width py-2'>Shop Sports Products Worth $750 more to avail the offer </p>
                        </div>
                        <div className='px-5 py-3'>
                            <ul className='V_unorder'>
                                <li className='V_li'>Lorem Ipsum has been the industry's standard</li>
                                <li className='V_li'>Lorem Ipsum has been the industry's standard</li>
                                <li className='V_li'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an</li>
                                <li className='V_li'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an</li>
                            </ul>
                        </div>
                        <div className='V_read_less'>
                            <p>-  Read less</p>
                        </div>
                    </div>

                    <div className="px-4 py-3 ">
                        <div className="px-3 d-flex align-items-center">
                            <p className="pe-2 V_hide" onClick={toggleDetails} style={{ cursor: "pointer" }}>
                                {show ? "Hide details" : "Hide details"}
                            </p>
                            {show ? (
                                <FaAngleUp style={{ color: "#3081BC" }} />
                            ) : (
                                <FaAngleDown style={{ color: "#3081BC" }} />
                            )}
                        </div>
                        {show && (
                            <div className="px-3 py-3 V_pad">
                                <ul className="V_unorder">
                                    <li className="V_li">Lorem Ipsum has been the industry's standard</li>
                                    <li className="V_li">Lorem Ipsum has been the industry's standard</li>
                                    <li className="V_li">
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    </li>
                                    <li className="V_li">
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                </div>


                <div className="col-12  pe-md-5  px-3 px-sm-4 px-md-0 ">
                    <div className="V_information">
                        <div className=" pt-3 d-flex align-items-center justify-content-between">
                            <h2 className="py-4">Bank offers</h2>
                        </div>
                    </div>
                </div>
                <div className='V_net_border my-2  w-100'>
                    <div className="d-flex px-4 py-3 justify-content-between">
                        <div className="d-flex">
                            <div className='px-3'>
                                <img src={Phonepe} alt="phone pe logo" className='V_upi_img_size' />
                            </div>
                            <div className='ps-2 align-self-center'>
                                <p className='V_upto'>Up to $100 Cashback </p>
                            </div>
                        </div>
                        <div className='align-self-center'>
                            <p className='V_use_code'>Use code <span className='fw-bolder'> PHONEPERUPAYCC </span></p>
                        </div>
                        <div className=' align-self-center'>
                            <img src={CoDown} alt="" className='V_down_size' />
                        </div>
                    </div>
                </div>
                <div className='V_net_border my-2  w-100'>
                    <div className="d-flex px-4 py-3 justify-content-between">
                        <div className="d-flex">
                            <div className='px-3'>
                                <img src={Phonepe} alt="phone pe logo" className='V_upi_img_size' />
                            </div>
                            <div className='ps-2 align-self-center'>
                                <p className='V_upto'>Up to $200 Cashback </p>
                            </div>
                        </div>
                        <div className='align-self-center'>
                            <p className='V_use_code'>Use code <span className='fw-bolder'> PHONEPERUPAYCC </span></p>
                        </div>
                        <div className=' align-self-center'>
                            <img src={CoDown} alt="" className='V_down_size' />
                        </div>
                    </div>
                </div>
                <div className='V_net_border my-2  w-100'>
                    <div className="d-flex px-4 py-3 justify-content-between">
                        <div className="d-flex">
                            <div className='px-3'>
                                <img src={Phonepe} alt="phone pe logo" className='V_upi_img_size' />
                            </div>
                            <div className='ps-2 align-self-center'>
                                <p className='V_upto'>Up to $300 Cashback </p>
                            </div>
                        </div>
                        <div className='align-self-center'>
                            <p className='V_use_code'>Use code <span className='fw-bolder'> PHDTHFTTPO0PIB </span></p>
                        </div>
                        <div className=' align-self-center'>
                            <img src={CoDown} alt="" className='V_down_size' />
                        </div>
                    </div>
                </div>
                <div className='V_net_border my-2  w-100'>
                    <div className="d-flex px-4 py-3 justify-content-between">
                        <div className="d-flex">
                            <div className='px-3'>
                                <img src={Phonepe} alt="phone pe logo" className='V_upi_img_size' />
                            </div>
                            <div className='ps-2 align-self-center'>
                                <p className='V_upto'>Up to $100 Cashback </p>
                            </div>
                        </div>
                        <div className='align-self-center'>
                            <p className='V_use_code'>Use code <span className='fw-bolder'> TRYHFTERUAYIOP </span></p>
                        </div>
                        <div className=' align-self-center'>
                            <img src={CoDown} alt="" className='V_down_size' />
                        </div>
                    </div>
                </div>

            </div>

        </>


    )
}

export default Coupon