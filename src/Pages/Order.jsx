import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { TiArrowSortedDown } from 'react-icons/ti'
import { useNavigate } from 'react-router-dom'

const BaseUrl = process.env.REACT_APP_BASEURL;
const token = localStorage.getItem('token');
const userId = localStorage.getItem('userId');

const Order = () => {

    const navigate = useNavigate();
    const [orderData, setOrderData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchData = async () => {
        try {
            const response = await axios.get(`${BaseUrl}/api/getMyOrder/${userId}`, {
                headers: { Authorization: `Berar ${token}` }
            });
            // console.log("response.data.data", response.data.data);

            setOrderData(response.data.data);
        } catch (error) {
            console.error('Data fetching Error:', error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    const handleCancel = (id) => {
        // console.log("id", id);
        navigate(`/user/cancelorder/${id}`);
    }

    const filteredOrders = orderData
    .map((order) => {
        // Filter products within each order
        const filteredProducts = order.productData.filter((product) => {
            const productName = product?.productName || '';
            return productName.toLowerCase().includes(searchQuery.toLowerCase());
        });

        // Return only orders with matching products
        if (filteredProducts.length > 0 || order.orderId.toLowerCase().includes(searchQuery.toLowerCase())) {
            return {
                ...order,
                productData: filteredProducts, // Update to filtered products
                orderItems: order.orderItems.slice(0, filteredProducts.length), // Align with filtered products
            };
        }
        return null; // Exclude orders without matching products
    })
    .filter(Boolean); // Remove null results


    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };
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
                        <input type="text" placeholder="Search by Product or Order ID "
                            class="d_searchinput" value={searchQuery} onChange={handleSearchChange} />
                    </div>
                </div>
                {filteredOrders.map((item, index) => (
                    <div className="row gy-4 my-2">
                        <div className="col-12">
                            <div className="d_orderbox" key={index}>
                                <div className="d_firstsec">
                                    <div className="d_warp d-flex justify-content-between align-items-center">
                                        <div className="d_leftside d-flex align-items-center">
                                            <div className='d_rightspace'>
                                                <div className="d_text">Order {item.orderStatus}</div>
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
                                                <div className="d_orderid">Order ID {item.orderId}</div>
                                                <div className="d-flex align-items-center">
                                                    <div className='d_orderviewdel'>View Order Detail</div>
                                                    <TiArrowSortedDown className='ms-2' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="d_secondsec">
                                    <div className="d_suppiler">Supplier : <span>MD_CREATIONS</span></div>
                                </div> */}
                                {item.orderItems.map((orderItem, oIndex) => (
                                    <div key={oIndex} className="d_mainbox">
                                        <div className="row align-items-center">
                                            <div className="col-12 col-lg-8 col-xl-9">
                                                <div className='d_ordertrack'>Order {orderItem.status}</div>
                                                <div className="d-flex align-items-center mt-3">
                                                    <div className="d_img">
                                                        <img src={`${BaseUrl}/${item.productData[oIndex]?.productImage[0]}`} alt="" />
                                                    </div>
                                                    <div className="d_con">
                                                        <div className="d_ordertype">
                                                            {item.subCategoryData.find(
                                                                (subcat) => subcat._id === item.productData[oIndex]?.subCategoryId
                                                            )?.subCategoryName}
                                                        </div>
                                                        <div className="d_ordername">{item.productData[oIndex]?.productName}</div>
                                                        {/* <div><small>{}</small></div> */}
                                                        <div className="d_orderreturn">Easy Return</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4 col-xl-3 d-flex justify-content-end">
                                                <div className="d_cancelbtn" onClick={() => handleCancel(orderItem._id)}>
                                                    <button>Cancel Order</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

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
            </div >

        </>
    )
}

export default Order
