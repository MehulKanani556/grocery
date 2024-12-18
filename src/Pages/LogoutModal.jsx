import React from 'react'
import { Modal } from 'react-bootstrap'
import { IoCloseSharp } from 'react-icons/io5';
import { Link} from 'react-router-dom';
import '../CSS/dstyle.css';

const LogoutModal = ({isOpen, onClose, onLogoutUser}) => {

  


    
    return (
        <>
            {/* Logout modal */}

            <Modal
                show={isOpen}
                onHide={onClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='d_logoutmodal'
            >
                <Modal.Body className='ps-lg-5 ps-sm-3'>
                    <div className="d_con">
                        <div className='d-flex justify-content-end d_cur' ><IoCloseSharp className='d_closeicon' onClick={onClose} /></div>
                        <div className="row align-items-center my-xl-5 my-lg-4 my-3">
                            <div className="col-12 col-sm-7">
                                <div className="d_textwidth">
                                    <div className="d_heading">
                                        <h6>logout</h6>
                                        <p className='mb-0'>Do you Want to Exit this page ?</p>
                                    </div>
                                    <div className="d_modalbtn mb-3">
                                        <Link to="/" className='d-block text-center' onClick={onLogoutUser} >Yes</Link>
                                    </div>
                                    <div className="d_modalbtn d_nobtn" >
                                        <Link  className='d-block text-center' onClick={onClose}>No</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-5 d-sm-block d-none">
                                <div className="d_img">
                                    <img src={require('../Image/logoutimg.png')} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>


            {/* Logout modal */}
        </>
    )
}

export default LogoutModal
