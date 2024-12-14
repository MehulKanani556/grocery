import React, { useEffect, useState } from 'react'
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
import SubHeader from '../Component/SubHeader'
import AddressModal from './AddressModal'
import axios from 'axios'

const BaseUrl = process.env.REACT_APP_BASEURL;
const token = localStorage.getItem('token');
const userId = localStorage.getItem('userId');

const Cart = () => {

    const [addaddressmodalShow, setAddaddressModalShow] = useState(false);
    const [currentSection, setCurrentSection] = useState("cart");
    const [productData, setProductData] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0); // total price define
    const [quantity, setQuantity] = useState(1);

   
    const fetchData = async () => {
        try {
            const response = await axios.get(`${BaseUrl}/api/allMyCarts/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log("response", response.data.data);
            const products = response.data.data;
            setProductData(products);

            const total = products.reduce((acc, item) => {
                const discountedPrice = item.productId.price * (1 - item.productId.discount / 100);
                return acc + discountedPrice * item.quantity;
            }, 0);
            setTotalPrice(total);
        } catch (error) {
            console.error('Data Fetching Error:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleDecrement = () => {
        
    }
    const handleIncrement = () => {

    }
    return (
        <>

            <SubHeader />

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
                                    <FaArrowLeftLong className='me-xl-5 me-3 d_cur' onClick={() => setCurrentSection("cart")} />
                                    <h6>Select Delivery Address</h6>
                                </div>
                            </div>
                            <div className="d_addinput d_cur" onClick={() => setAddaddressModalShow(true)}>
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
                                    <div className="d_price">Total Price</div>
                                </div>
                            </div>
                            <div className="row gy-3">
                                <div className="col-12 col-xl-6">
                                    <div className="d_item">
                                        {productData.map((item, index) => {
                                            return (
                                                <div className="row align-items-center" key={index}>
                                                <div className="col-3">
                                                    <div className="d_img">
                                                        <img src={`${BaseUrl}/${item.productId.productImage[0]}`} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-9">
                                                    <div className="d_desc">
                                                        <div className="d_type">{item.productId.subCategoryId}</div>
                                                        <div className="d-flex flex-sm-nowrap flex-wrap align-items-center justify-content-between">
                                                            <div className="d_name">{item.productId.productName}</div>
                                                            <div className="d_size">{item.productId.productDetails}</div>
                                                        </div>
                                                        <div className="d_saved">Yoy Saved {item.productId.discount}%</div>
                                                        <div className="d-flex align-items-center">
                                                            <div className="d_price">${(item.productId.price * (1 - item.productId.discount / 100)).toFixed(2)}</div>
                                                            <div className="d_removesize">${(item.productId.price) * (item.quantity)}</div>
                                                        </div>
                                                        <div className="d-flex justify-content-end">
                                                            <div className="d_cartbtn">
                                                                <div className="d-flex justify-content-around align-items-center">
                                                                    <button className='d_carticon' onClick={() => handleDecrement(index)}>-</button>
                                                                    <div className='d_carticon'>{item.quantity}</div>
                                                                    <button className='d_carticon' onClick={() => handleIncrement(index)}>+</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d_later">Save for Later</div>
                                            </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add Address Modal */}
            <AddressModal
                isOpen={addaddressmodalShow}
                onClose={() => setAddaddressModalShow(false)}
            />

            {/* Add Address Modal */}

        </>
    )
}

export default Cart