import React, { useEffect, useState } from 'react';
import '../CSS/Profile.css';
import { Dropdown } from 'react-bootstrap';
import Drop from '../Image/dropdot.png';
import Edit from '../Image/edit.png';
import Delete from '../Image/delete.png';
// import { Link } from 'react-router-dom';
// import { FiSearch } from 'react-icons/fi';
// import { IoCloseSharp } from 'react-icons/io5';
// import { RiHome4Line } from 'react-icons/ri';
// import { MdOutlineHomeRepairService } from 'react-icons/md';
// import { PiBuildingApartmentDuotone } from 'react-icons/pi';
import AddressModal from '../Pages/AddressModal';
import axios from 'axios';

const Adderess = () => {

  const [addaddressmodalShow, setAddaddressModalShow] = useState(false);
  const [myAddress, setMyAddress] = useState([]);
  const [deleteAddress, setdeleteAddress] = useState(0);
  const [editAddress, setEditAddress ] = useState('');

  const BaseUrl = process.env.REACT_APP_BASEURL;
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios
      .get(`${BaseUrl}/api/getAllMyAddress/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((Response) => {
        setMyAddress(Response?.data?.data || []);
        // console.log("Addresses:", Response?.data?.data);
      })
      .catch((error) => {
        console.error("Error fetching addresses:", error);
      });
  }, [deleteAddress, addaddressmodalShow  ]);

  const handleDeleteAddress = async (id) => {
    // console.log('id', id);
    try {
     await axios.delete(`${BaseUrl}/api/deleteAddress/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
      setdeleteAddress(deleteAddress + 1)
    }
    catch (error) {
      console.error('Id is not found for delete address', error);
    }
  }

//   const handleEditAddress = async (id) => {
//     console.log('id', id);
//     try {
//       const editAddressData = await axios.put(`${BaseUrl}/api/updateAddress/${id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           }
//         }
//       );

// console.log(editAddressData)

//     }
//     catch (error) {
//       console.error('address is not edited successfully', error);
//     }
//   }

  return (
    <>
      <div className="col-12  pe-md-5 V_marg px-3 px-sm-4 px-md-0 ">
        <div className="V_information">
          <div className=" pt-md-3 d-flex align-items-center justify-content-between">
            <h2 className=" pb-4 py-md-4">Manage Address</h2>
          </div>
          <div className='V_add_border' onClick={() => {setAddaddressModalShow(true); setEditAddress('')}}>
            <button type="button" className="V_btn_text" >
              + Add A New Address
            </button>
          </div>

          <div>
            {myAddress.map((element) => (
              <div className="V_add_border my-3" key={element._id}>
                <div className="d-flex justify-content-end">
                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="V_drop_icon bg-transparent border-0"
                    >
                      <img src={Drop} alt="" className="V_delete" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="V_drop_menu">
                      <Dropdown.Item
                        href=""
                        className="d-flex"
                        onClick={() => { setAddaddressModalShow(true); setEditAddress(element._id) }}
                      >
                        <img src={Edit} alt="" className="V_delete pe-3" />
                        <p>Edit</p>
                      </Dropdown.Item>
                      <Dropdown.Item href="" className="d-flex" onClick={() => handleDeleteAddress(element._id)}>
                        <img src={Delete} alt="" className="V_delete pe-3" />
                        <p>Delete</p>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="V_top">
                  <h2 className="py-4 V_add_dynamic_add">{element.yourName}</h2>
                  <p className="V_Ptag fw-lighter px-4 pb-3">
                    {element.address}
                  </p>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>

      {/* Add Address Modal */}

      {/* <Modal
        show={addaddressmodalShow}
        onHide={() => setAddaddressModalShow(false)}
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
                    <IoCloseSharp />
                  </div>
                  <div className="d_ordering">
                    <div className='d_que'>Who you are ordering for?</div>
                    <div className="d_radio d-flex align-items-center mb-2">
                      <div className="d-flex align-items-center me-3">
                        <input type="radio" className='me-2' name='self' />
                        <label>Myself</label>
                      </div>
                      <div className="d-flex align-items-center">
                        <input type="radio" className='me-2' name='self' />
                        <label>Someone else</label>
                      </div>
                    </div>
                    <div className="d_savetype">
                      <p className='mb-1'>Save address as</p>
                      <div className="d-flex align-items-center flex-wrap">
                        <Link className='d-flex align-items-center active me-lg-3 me-2 d_cur' onClick={handleActiveClass}>
                          <RiHome4Line className='me-1 d_addressicon' />
                          <p className='mb-0'>Home</p>
                        </Link>
                        <Link className='d-flex align-items-center me-lg-3 me-2 d_cur' onClick={handleActiveClass}>
                          <MdOutlineHomeRepairService className='me-1 d_addressicon' />
                          <p className='mb-0'>Home</p>
                        </Link>
                        <Link className='d-flex align-items-center me-lg-3 me-2 d_cur' onClick={handleActiveClass}>
                          <PiBuildingApartmentDuotone className='me-1 d_addressicon' />
                          <p className='mb-0'>Hotel</p>
                        </Link>
                        <Link className='d-flex align-items-center d_cur d_other' onClick={handleActiveClass}>
                          <div className='me-1 d_addressicon'></div>
                          <p className='mb-0'>other</p>
                        </Link>
                      </div>
                    </div>
                    <div className="d_form pb-0">
                      <div className="row gy-lg-3 gy-2">
                        <div className="col-12">
                          <input type="text" placeholder='Flat / House no / Building name' />
                        </div>
                        <div className="col-12">
                          <input type="text" placeholder='Floor (optional)' />
                        </div>
                        <div className="col-12">
                          <input type="text" placeholder='Area' />
                        </div>
                        <div className="col-12">
                          <input type="text" placeholder='Sector/Locality' />
                        </div>
                        <p className='mb-0'>Enter your details fpr seamless delivery experience</p>
                        <div className="col-12">
                          <input type="text" placeholder='Your name' />
                        </div>
                        <div className="col-12">
                          <input type="text" placeholder='Your phone number' />
                        </div>
                        <div className="col-12">
                          <Link to="" className='d-block text-center d_saveaddbtn'>Save address</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal> */}
      <AddressModal
        isOpen={addaddressmodalShow}
        onClose={() => setAddaddressModalShow(false)}
        isId={editAddress}
      />

      {/* Add Address Modal */}

    </>
  )
}

export default Adderess