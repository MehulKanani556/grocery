import React, { useEffect, useState } from 'react';
import './../CSS/dstyle.css';
import { BiSolidRightArrow } from 'react-icons/bi';
import { FaArrowLeftLong } from 'react-icons/fa6';
import SubHeader from '../Component/SubHeader';
import AddressModal from './AddressModal';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const BaseUrl = process.env.REACT_APP_BASEURL;
const token = localStorage.getItem('token');
const userId = localStorage.getItem('userId');

const Cart = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const handalingCharge = 20;
    const deliveryCharge = 25;
    const { couponId } = location.state || {};

    const [addaddressmodalShow, setAddaddressModalShow] = useState(false);
    const [currentSection, setCurrentSection] = useState("cart");
    const [productData, setProductData] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0); // total price define
    const [categoryData, setCategoryData] = useState([]);
    const [address, setAddress] = useState([])
    const [selectedAddress, setSelectedAddress] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${BaseUrl}/api/allMyCarts/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            // console.log("response", response.data);
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
    const fatchSubCategory = async () => {
        try {
            const response = await axios.get(`${BaseUrl}/api/getUserSubCategory`);

            // console.log("response",response.data.data);
            setCategoryData(response.data.data);

        } catch (error) {
            console.error('Data Fetching Error:', error);
        }
    }
    const fetchAddress = async () => {
        try {
            const response = await axios.get(`${BaseUrl}/api/getAllMyAddress/${userId}`, {
                headers: { Authorization: `Berar ${token}` }
            });
            // console.log("response", response.data.data);
            setAddress(response.data.data);
        } catch (error) {
            console.error('Data Fetching Error:', error);
        }
    }
    useEffect(() => {
        fetchData();
        fatchSubCategory();
        fetchAddress();
    }, []);

    const handleCouponApply = () => {
        navigate('/user/coupon');
    };

    const handleIncrement = async (index) => {
        try {
            const response = await axios.put(
                `${BaseUrl}/api/updateCartQuantity/${productData[index]._id}`, // Use the cart item's _id
                {
                    quantity: productData[index].quantity + 1
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            if (response.data.status === 200) {
                setProductData((prevData) => {
                    const updatedData = [...prevData];
                    updatedData[index] = {
                        ...updatedData[index],
                        quantity: updatedData[index].quantity + 1
                    };

                    // Recalculate total price
                    const total = updatedData.reduce((acc, item) => {
                        const discountedPrice = item.productId.price * (1 - item.productId.discount / 100);
                        return acc + discountedPrice * item.quantity;
                    }, 0);
                    setTotalPrice(total);

                    return updatedData;
                });
            }
        } catch (error) {
            console.error('Error updating cart quantity:', error);
        }
    };

    const handleDecrement = async (index) => {
        if (productData[index].quantity > 1) {
            try {
                const response = await axios.put(
                    `${BaseUrl}/api/updateCartQuantity/${productData[index]._id}`, // Use the cart item's _id
                    {
                        quantity: productData[index].quantity - 1
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                if (response.data.status === 200) {
                    setProductData((prevData) => {
                        const updatedData = [...prevData];
                        updatedData[index] = {
                            ...updatedData[index],
                            quantity: updatedData[index].quantity - 1
                        };

                        // Recalculate total price
                        const total = updatedData.reduce((acc, item) => {
                            const discountedPrice = item.productId.price * (1 - item.productId.discount / 100);
                            return acc + discountedPrice * item.quantity;
                        }, 0);
                        setTotalPrice(total);

                        return updatedData;
                    });
                }
            } catch (error) {
                console.error('Error updating cart quantity:', error);
            }
        }
    };

    const totalPriceBeforeDiscount = productData.reduce((acc, item) => {
        return acc + item.productId.price * item.quantity;
    }, 0);

    const getSubCatname = (id) => {
        const subCatname = categoryData.find((subcat) => subcat._id === id);
        return subCatname ? subCatname.subCategoryName : '';
    }
    const handleCreateOrder = async () => {
        if (!selectedAddress) {
            alert('Please select a delivery address');
            return;
        }

        try {
            const orderResponse = await axios.post(`${BaseUrl}/api/createOrder`, {
                userId: userId,
                address: selectedAddress,
                coupenId: couponId,
                handalingCharge: handalingCharge,
                deliveryCharge: deliveryCharge
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log("orderResponse", orderResponse);

            if (orderResponse.data.status === 201) {
               alert('order Create Successfully');
               navigate('/user/order');
            }
        } catch (error) {
            console.error('Error creating order:', error);
            alert('Failed to create order. Please try again.');
        }
    };
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
                            <div className="d_box" onClick={handleCouponApply}>
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
                                    <div className="d_price"><span className='line-through'>${totalPriceBeforeDiscount.toFixed(2)}</span>${totalPrice.toFixed(2)}</div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <div className="d_title">Delivery Charge</div>
                                    <div className="d_price">${deliveryCharge}</div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <div className="d_title">Handling Charge </div>
                                    <div className="d_price">${handalingCharge}</div>
                                </div>
                            </div>
                            <div className="d_total">
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <div className="d_title">Grand Total</div>
                                    <div className="d_price">${(totalPrice + deliveryCharge + handalingCharge).toFixed(2)}</div>
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
                                        <div className="d_totalprice">${(totalPrice + deliveryCharge + handalingCharge).toFixed(2)}</div>
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
                            {address.map((item, index) => (
                                <div className={`d_addinput d_savedaddress ${selectedAddress === item._id ? 'selected' : ''}`}
                                    key={index} onClick={() => setSelectedAddress(item._id)} >
                                    <div className="d-flex align-items-center">
                                        <div className="d_img">
                                            <img src={require('../Image/deliveryimg1.png')} alt="" />
                                        </div>
                                        <p className='mb-0 d_desc'>{item.address}</p>
                                        {selectedAddress === item._id && (
                                            <div className="selected-indicator">✓</div>
                                        )}
                                    </div>
                                </div>
                            ))}
                            <div className="d_proceedbtn mt-auto d_cur text-white" onClick={handleCreateOrder}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <div className="d_totalprice">${(totalPrice + deliveryCharge + handalingCharge).toFixed(2)}</div>
                                        <div className="d_totaldesc">Total</div>
                                    </div>
                                    <div className="d_btnname">Place order</div>
                                    <div><BiSolidRightArrow className='d_icon' /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-8 col-xl-9">
                        <div className="d_right">
                            <div className="d_heading">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6>Your Cart({productData.length})</h6>
                                    <div className="d_price">Total Price : ${totalPrice.toFixed(2)}</div>
                                </div>
                            </div>
                            <div className="row gy-3">
                                {productData.map((item, index) => {
                                    return (
                                        <div className="col-12 col-xl-6">
                                            <div className="d_item">
                                                <div className="row align-items-center" key={index}>
                                                    <div className="col-3">
                                                        <div className="d_img">
                                                            <img src={`${BaseUrl}/${item.productId.productImage[0]}`} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-9">
                                                        <div className="d_desc">
                                                            <div className="d_type">{getSubCatname(item.productId.subCategoryId)}</div>
                                                            <div className="d-flex flex-sm-nowrap flex-wrap align-items-center justify-content-between">
                                                                <div className="d_name">{item.productId.productName}</div>
                                                                <div className="d_size">{item.productId.productDetails}</div>
                                                            </div>
                                                            <div className="d_saved">Yoy Saved {item.productId.discount}%</div>
                                                            <div className="d-flex align-items-center">
                                                                <div className="d-price">${(item.productId.price * (1 - item.productId.discount / 100) * item.quantity).toFixed(2)}</div>
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
                                            </div>
                                        </div>
                                    )
                                })}
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

export default Cart;