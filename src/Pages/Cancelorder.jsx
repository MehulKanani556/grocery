import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom'

const BaseUrl = process.env.REACT_APP_BASEURL;
const token = localStorage.getItem('token');
const userId = localStorage.getItem('userId');

const Cancelorder = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [orderDetails, setOrderDetails] = useState(null);
    const [cancelReason, setCancelReason] = useState('');

    const fetchData = async () => {
        try {
            const response = await axios.get(`${BaseUrl}/api/getMyOrder/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const foundOrder = response.data.data.find(order => 
                order.orderItems.some(item => item._id === id)
            );

            if (foundOrder) {
                foundOrder.orderItems.find(item => item._id === id);
                setOrderDetails(foundOrder);
            }
            
        } catch (error) {
            console.error('Data Fetching Error:', error);
        }
    }

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const handleCancelReasonChange = (e) => {
        setCancelReason(e.target.value);
    }

    const handleCancelProduct = async () => {
        try {
            const response = await axios.put(`${BaseUrl}/api/cancelOrder/${id}`, 
            {
                reason: cancelReason
            }, 
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            // console.log("response",response);
            if(response.data.status === 200) {
                alert('Order Cancel Successfully');
                navigate('/user/order');
            }
            
        } catch (error) {
            console.error('Order Cancellation Error:', error);
        }
    }

   
    return (
        <div className="d_cancelorder">
            <div className="d_heading mb-4">
                <h6>Product Detail</h6>
            </div>
            <div className="d_cancelbox mb-3">
                <div className="d_suppierbox">
                    <p className='mb-0'>Supplier : <span>MD_CREATIONS</span></p>
                </div>
                <div className="d_itembox">
                    <div className="d_procate">
                        {orderDetails?.subCategoryData?.[0]?.subCategoryName}
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="d_img">
                            <img 
                                src={`${BaseUrl}/${orderDetails?.productData?.[0]?.productImage[0]}`} 
                                alt="Product" 
                                className='w-100 h-100' 
                            />
                        </div>
                        <div className="d_text">
                            <div className="d_proprice">
                                ${orderDetails?.productData?.[0]?.price}
                            </div>
                            <div className="d_proname">
                                {orderDetails?.productData?.[0]?.productName}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d_cancelreason d-flex flex-column">
                <p className='mb-0'>Write Reason For Canceling</p>
                <textarea 
                    placeholder='Write here your reason for canceling.....' 
                    rows={5}
                    value={cancelReason}
                    onChange={handleCancelReasonChange}
                ></textarea>
                <div className="d_cancelprobtn mt-auto mx-auto">
                    <Link 
                        onClick={handleCancelProduct} 
                        className='text-center d-block'
                    >
                        Cancel Product
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cancelorder;