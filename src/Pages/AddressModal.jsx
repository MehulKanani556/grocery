import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import '../CSS/dstyle.css';
import { MdOutlineHomeRepairService } from 'react-icons/md';
import { PiBuildingApartmentDuotone } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { IoCloseSharp } from 'react-icons/io5';
import { RiHome4Line } from 'react-icons/ri';
import axios from 'axios';

const AddressModal = ({ isOpen, onClose, isId }) => {

    // console.log('isId', isId)

    const BaseUrl = process.env.REACT_APP_BASEURL;
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');

    const [addressValue, setAddressValue] = useState({
        orderFor: '',
        saveAddressAs: '',
        houseNo: '',
        floor: '',
        area: '',
        locality: '',
        yourName: '',
        yourPhoneNumber: ''
    });

    const [editAddress, setEditAddress] = useState({
        orderFor: '',
        saveAddressAs: '',
        houseNo: '',
        floor: '',
        area: '',
        locality: '',
        yourName: '',
        yourPhoneNumber: ''
    })

    const handleActiveClass = (event, value) => {

        const links = document.querySelectorAll(".d_cur");
        links.forEach((link) => link.classList.remove("active"));
        event.currentTarget.classList.add("active");


        setAddressValue((prevValues) => ({
            ...prevValues,
            saveAddressAs: value,
        }));
    };


    const handleChange = (e) => {
        const { name, value } = e.target;

        if (isId) {
            setEditAddress(prevValues => ({
                ...prevValues,
                [name]: value
            }))
        } 
            setAddressValue(prevValues => ({
                ...prevValues,
                [name]: value
            }));
        
    };



    const handleAddress = async () => {

        if (isId) {
            console.log('update api called')
            console.log(editAddress)

            try {

                const response = await axios.put(`${BaseUrl}/api/updateAddress/${isId}`, {
                    ...editAddress,
                },
                    {
                        headers: {
                            Authorization: `Berar ${token}`
                        }
                    });

                const editaddressdata = response?.data.data;
                console.log('editaddressSDFSDF', editaddressdata);


                // setAddressValue({
                //     orderFor: editAddress?.orderFor || editaddressdata.orderFor,
                //     saveAddressAs: editAddress?.saveAddressAs || editaddressdata.saveAddressAs,
                //     houseNo: editAddress?.houseNo || editaddressdata.houseNo,
                //     floor: editAddress?.floor || editaddressdata.floor,
                //     area: editAddress?.area || editaddressdata.area,
                //     locality: editAddress?.locality || editaddressdata.locality,
                //     yourName: editaddressdata.yourName,
                //     yourPhoneNumber: editaddressdata.yourPhoneNumber,
                // });

                onClose();
            }
            catch (error) {
                console.error('address is not saved', error);
            }
        }
        else {
            try {
                const response = await axios.post(`${BaseUrl}/api/createDeliveryAddress`, {
                    userId,
                    ...addressValue,
                },
                    {
                        headers: {
                            Authorization: `Berar ${token}`
                        }
                    });

                const addressdata = response.data;
                // console.log('address', addressdata);


                setAddressValue({
                    orderFor: '',
                    saveAddressAs: '',
                    houseNo: '',
                    floor: '',
                    area: '',
                    locality: '',
                    yourName: '',
                    yourPhoneNumber: '',
                });

                onClose();
            }
            catch (error) {
                console.error('address is not saved', error);
            }
        }
    }



    useEffect(
        () => {
            if (isId) {
                axios.get(`${BaseUrl}/api/getAddress/${isId}`,
                    {
                        headers: {
                            Authorization: `Berar ${token}`
                        }
                    }

                ).then((res) => {
                    // console.log("as", res)
                    const prevData = res.data.data
                    // console.log('prev', prevData);
                    setEditAddress({
                        orderFor: prevData.orderFor,
                        saveAddressAs: prevData.saveAddressAs,
                        houseNo: prevData.houseNo,
                        floor: prevData.floor,
                        area: prevData.area,
                        locality: prevData.locality,
                        yourName: prevData.yourName,
                        yourPhoneNumber: prevData.yourPhoneNumber,
                    });
                });
            }

        }, [isId]);

    return (
        <>
            {/* Add Address Modal */}

            <Modal
                show={isOpen}
                onHide={onClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='d_addressmodal'
            >
                <Modal.Body>
                    <div className="d_content">
                        <div class="d_search">
                            <span class="d_searchicon">
                                <FiSearch />
                            </span>
                            <input type="text" placeholder="Search for a new, locality..."
                                class="d_searchinput" />
                        </div>
                        <div className="row gy-3">
                            <div className="col-12 col-sm-6">
                                <iframe
                                    id="map-frame"
                                    src="https://www.google.com/maps/embed?..."
                                    allowFullScreen=""
                                    loading="lazy"
                                    className="rounded d_map"
                                    title="Google Map"
                                    width={"100%"}
                                ></iframe>
                                <div className="d_gaddress">
                                    <h6>Delivering tour order to</h6>
                                    <div className="d_box">
                                        <div className="d-flex align-items-center">
                                            <img src={require('../Image/addressimg.png')} alt="" />
                                            <p className='mb-0'>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="d_enteraddress">
                                    <div className="d_head pb-2 d-flex justify-content-between align-items-center">
                                        <h6>Enter complete address </h6>
                                        <IoCloseSharp onClick={onClose} />
                                    </div>
                                    <div className="d_ordering">
                                        <div className='d_que'>Who you are ordering for?</div>
                                        <div className="d_radio d-flex align-items-center mb-2">
                                            <div className="d-flex align-items-center me-3">
                                                <input type="radio" className='me-2' name='orderFor'
                                                    value="Myself"
                                                    onChange={handleChange}
                                                    checked={addressValue.orderFor === "Myself" }
                                                />
                                                <label>Myself</label>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <input type="radio" className='me-2' name='orderFor'
                                                    value="Someone else"
                                                    onChange={handleChange}
                                                    checked={addressValue.orderFor === "Someone else"}
                                                />
                                                {/* {console.log('change', addressValue.orderFor)} */}
                                                <label>Someone else</label>
                                            </div>
                                        </div>
                                        <div className="d_savetype">
                                            <p className='mb-1'>Save address as</p>
                                            <div className="d-flex align-items-center flex-wrap">
                                                <Link className='d-flex align-items-center active me-lg-3 me-2 d_cur' onClick={(event) => handleActiveClass(event, "Home")}>
                                                    <RiHome4Line className='me-1 d_addressicon' />
                                                    <p className='mb-0'>Home</p>
                                                </Link>
                                                <Link className='d-flex align-items-center me-lg-3 me-2 d_cur' onClick={(event) => handleActiveClass(event, "Work")}>
                                                    <MdOutlineHomeRepairService className='me-1 d_addressicon' />
                                                    <p className='mb-0'>Work</p>
                                                </Link>
                                                <Link className='d-flex align-items-center me-lg-3 me-2 d_cur' onClick={(event) => handleActiveClass(event, "Hotel")}>
                                                    <PiBuildingApartmentDuotone className='me-1 d_addressicon' />
                                                    <p className='mb-0'>Hotel</p>
                                                </Link>
                                                <Link className='d-flex align-items-center d_cur d_other' onClick={(event) => handleActiveClass(event, "Other")}>
                                                    <div className='me-1 d_addressicon'></div>
                                                    <p className='mb-0'>other</p>

                                                </Link>
                                            </div>
                                        </div>
                                        <div className="d_form pb-0">
                                            <div className="row gy-lg-3 gy-2">
                                                <div className="col-12">
                                                    <input type="text" placeholder='Flat / House no / Building name'
                                                        name='houseNo'
                                                        value={isId ? (editAddress.houseNo) : (addressValue.houseNo)}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="col-12">
                                                    <input type="text" placeholder='Floor (optional)'
                                                        name='floor'
                                                        value={isId ? (editAddress.floor) : (addressValue.floor)}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="col-12">
                                                    <input type="text" placeholder='Area'
                                                        name='area'
                                                        value={isId ? (editAddress.area) : (addressValue.area)}
                                                        onChange={handleChange}
                                                    />
                                                    {/* {console.log(addressValue.area)} */}
                                                </div>
                                                <div className="col-12">
                                                    <input type="text" placeholder='Sector/Locality'
                                                        name='locality'
                                                        value={isId ? (editAddress.locality) : (addressValue.locality)}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <p className='mb-0'>Enter your details fpr seamless delivery experience</p>
                                                <div className="col-12">
                                                    <input type="text" placeholder='Your name'
                                                        name='yourName'
                                                        value={isId ? (editAddress.yourName) : (addressValue.yourName)}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="col-12">
                                                    <input type="text" placeholder='Your phone number'
                                                        name='yourPhoneNumber'
                                                        value={isId ? (editAddress.yourPhoneNumber) : (addressValue.yourPhoneNumber)}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="col-12">
                                                    <Link to="" className='d-block text-center d_saveaddbtn' onClick={handleAddress}> {isId ? 'Edit Address' : 'Save Address'}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </Modal.Body>
            </Modal>


            {/* Add Address Modal */}</>
    )
}

export default AddressModal