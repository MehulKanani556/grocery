import React, { useState } from 'react'
import PDelete from '../Image/privacydelete.png';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { IoCloseSharp } from 'react-icons/io5';

const Privacy = () => {

    const [deleteaccountmodalShow, setDeleteaccountModalShow] = useState(false);

    return (
        <>
            <div className="col-12  pe-md-5  px-3 px-sm-4 px-md-0 ">
                <div className="V_information">
                    <div className=" pt-md-3 d-flex align-items-center justify-content-between">
                        <h2 className="pb-4 py-md-4">Account Privacy</h2>
                    </div>
                    <div className='fw-lighter V_Ptag2 '>
                        <p className='py-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p className='py-2'>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <p className='py-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p className='py-2'>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.         </p>
                    </div>
                    <div className='mt-5'>
                        <button className='d-flex align-items-center   V_pri_del_btn py-2 px-3 px-sm-5' onClick={() => setDeleteaccountModalShow(true)}>
                            <div className='pe-3'>
                                <img src={PDelete} alt="" className='V_pd_size' />
                            </div>
                            <div className="V_Pri_delete text-white">
                                Delete Your Account
                            </div>
                        </button>
                    </div>
                </div>
            </div>


        {/* Delete Account Modal */}

        <Modal
                show={deleteaccountmodalShow}
                onHide={() => setDeleteaccountModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='d_logoutmodal'
            >
                <Modal.Body className='ps-lg-5 ps-sm-3'>
                    <div className="d_con">
                        <div className='d-flex justify-content-end d_cur' onClick={() => setDeleteaccountModalShow(false)}><IoCloseSharp className='d_closeicon' /></div>
                        <div className="row align-items-center my-xl-5 my-lg-4 my-3">
                            <div className="col-12 col-sm-7">
                                <div className="d_textwidth">
                                    <div className="d_heading">
                                        <h6>Delete Account</h6>
                                        <p className='mb-0'>Do you Want to This Account ?</p>
                                    </div>
                                    <div className="d_modalbtn mb-3">
                                        <Link to="" className='d-block text-center'>Yes</Link>
                                    </div>
                                    <div className="d_modalbtn d_nobtn" onClick={() => setDeleteaccountModalShow(false)}>
                                        <Link to="" className='d-block text-center'>No</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-5 d-sm-block d-none">
                                <div className="d_img">
                                    <img src={require('../Image/deleteaccount.png')} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Delete Account Modal */}

        </>
    )
}

export default Privacy