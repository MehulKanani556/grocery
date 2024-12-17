import React, { useEffect, useState } from 'react';
import '../CSS/Profile.css';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import Phonepe from '../Image/phonepe.png';
import PTM from '../Image/PTM.png';
import CoDown from '../Image/coupon down.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BaseUrl = process.env.REACT_APP_BASEURL;
const token = localStorage.getItem('token');

const Coupon = () => {

    const navigate = useNavigate();

    const [showDetails, setShowDetails] = useState(true);
    const [showMoreInfo, setShowMoreInfo] = useState(true);
    const [coupon, setCoupon] = useState([]);

    const toggleMoreInfo = () => {
        setShowMoreInfo((prev) => !prev);
        setShowDetails((prev) => !prev);
    };

    const toggleDetails = () => {
        setShowDetails((prev) => !prev);
    };

    const fetchData = async () => {
        try {
            const response = await axios.get(`${BaseUrl}/api/allCoupens`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const activeCoupons = response.data.data.filter(item => item.active === true);
            setCoupon(activeCoupons);
            // console.log("response",response.data.data);

        } catch (error) {
            console.error('Data Fetching Error:', error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    const handleApplyCoupon = (id) => {
        navigate('/cart', { state: { couponId: id } });
    }
    return (
        <>
            <div className="px-3 px-md-0 pe-md-5">
                <div className="col-12 pe-md-5 px-3 px-sm-4 px-md-0">
                    <div className="V_information">
                        <div className="pt-md-3 d-flex align-items-center justify-content-between">
                            <h2 className="pb-4 py-md-4">Coupons</h2>
                        </div>
                    </div>
                </div>

                {
                    coupon.map((item, index) => (
                        <div className="V_net_border w-100 my-2" key={index}>
                            <div
                                className="d-flex py-2 "
                                onClick={toggleMoreInfo}
                                style={{ cursor: "pointer" }}
                            >
                                <div className="px-3">
                                    <img src={`${BaseUrl}/${item.coupenImage.replace(/\\/g, '/')}`} alt="Axis logo" className="V_upi_img_size" />
                                </div>
                                <div className="ps-2 align-self-center">
                                    <p className="fw-bold V_flat">{item.coupenName}</p>
                                    <p className="V_use_coupon">
                                        Use code <span className="fw-bolder">{item.coupenCode}</span>
                                    </p>
                                </div>
                                <div className="ms-auto align-self-center pe-3 pe-xxl-5">
                                    <button className="V_apply px-3 py-1" onClick={() => handleApplyCoupon(item._id)}>Apply</button>
                                </div>
                            </div>

                            {showMoreInfo && (
                                <>
                                    <p className='V_dashed' />
                                    <div className="px-2 py-3 V_dashed1">
                                        <div className="px-3 V_shop">
                                            <p className="V_shop_width py-2">
                                                Discount: ${item.coupenDiscount}
                                            </p>
                                        </div>
                                        <div className="ps-5 pe-5 pe-sm-4 py-3">
                                            <ul className="V_unorder">
                                                <li className="V_li">
                                                    Lorem Ipsum has been the industry's standard
                                                </li>
                                                <li className="V_li">
                                                    Lorem Ipsum has been the industry's standard
                                                </li>
                                                <li className="V_li">
                                                    Lorem Ipsum has been the industry's standard dummy text
                                                    ever since the 1500s, when an
                                                </li>
                                                <li className="V_li">
                                                    Lorem Ipsum has been the industry's standard dummy text
                                                    ever since the 1500s, when an
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="V_read_less" onClick={toggleMoreInfo}>
                                            <p>- Read less</p>
                                        </div>
                                    </div>
                                    <div className="px-4 py-3">
                                        <div
                                            className="px-3 d-flex align-items-center"
                                            onClick={toggleDetails}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <p className="pe-2 V_hide">
                                                {showDetails ? "Hide details" : "Show details"}
                                            </p>
                                            {showDetails ? (
                                                <FaAngleUp style={{ color: "#3081BC" }} />
                                            ) : (
                                                <FaAngleDown style={{ color: "#3081BC" }} />
                                            )}
                                        </div>
                                        {showDetails && (
                                            <div className="px-3 py-3 V_pad">
                                                <ul className="V_unorder">
                                                    <li className="V_li">
                                                        Lorem Ipsum has been the industry's standard
                                                    </li>
                                                    <li className="V_li">
                                                        Lorem Ipsum has been the industry's standard
                                                    </li>
                                                    <li className="V_li">
                                                        Lorem Ipsum has been the industry's standard dummy text
                                                        ever since the 1500s, when an
                                                    </li>
                                                    <li className="V_li">
                                                        Lorem Ipsum has been the industry's standard dummy text
                                                        ever since the 1500s, when an
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    ))
                }

                <div className="col-12  pe-md-5  px-3 px-sm-4 px-md-0 ">
                    <div className="V_information">
                        <div className=" pt-3 d-flex align-items-center justify-content-between">
                            <h2 className="py-4">Bank offers</h2>
                        </div>
                    </div>
                </div>
                <div className='V_net_border my-2  w-100'>
                    <div className="d-flex px-2 px-sm-3 px-lg-4 py-3 justify-content-between">
                        <div className="d-flex">
                            <div className='px-xxl-3'>
                                <img src={Phonepe} alt="phone pe logo" className='V_copon_img_size' />
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
                    <div className="d-flex px-2 px-sm-3 px-lg-4 py-3 justify-content-between">
                        <div className="d-flex">
                            <div className='px-xxl-3'>
                                <img src={PTM} alt="phone pe logo" className='V_copon_img_size' />
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
                    <div className="d-flex px-2 px-sm-3 px-lg-4 py-3 justify-content-between">
                        <div className="d-flex">
                            <div className='px-xxl-3'>
                                <img src={PTM} alt="phone pe logo" className='V_copon_img_size' />
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
                    <div className="d-flex px-2 px-sm-3 px-lg-4 py-3 justify-content-between">
                        <div className="d-flex">
                            <div className='px-xxl-3'>
                                <img src={Phonepe} alt="phone pe logo" className='V_copon_img_size' />
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

            </div >

        </>


    )
}

export default Coupon