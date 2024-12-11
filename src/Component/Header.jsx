import { useEffect, useRef, useState } from 'react';
import { Col, InputGroup, Row, Form, Dropdown, Offcanvas, Modal } from "react-bootstrap";
import { MdKeyboardArrowDown, MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoHeart } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { IoCloseSharp } from 'react-icons/io5';

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [show, setShow] = useState(false);
    const [loginmodalShow, setLoginModalShow] = useState(false);
    const [otpmodalShow, setOtpModalShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const phoneNumber = "+12345672678"; 
    const maskedPhoneNumber = `${phoneNumber.slice(0, 2)}******${phoneNumber.slice(-4)}`;

    const inputRefs = useRef([]);
    const handleOtpInput = (e, index) => {
        const value = e.target.value;
        if (value.length === 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus(); 
        }
        if (value.length === 0 && inputRefs.current[index - 1]) {
            inputRefs.current[index - 1].focus(); 
        }
    };

    const handleopenotpmodal = () => {
        setLoginModalShow(false)
        setOtpModalShow(true)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setShow(false);
            }
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])
    return (
        <>
            <header className='d-md-block d-none'>
                <div className='s_header'>
                    <Row className='items-center justify-between'>
                        <Col xl={7} lg={12}>
                            <div className="flex items-center justify-between">
                                <img src={require('../Image/logo.png')} alt="" />
                                <InputGroup className="position-relative mx-3">
                                    <Dropdown show={showDropdown} onToggle={toggleDropdown} >
                                        <Dropdown.Toggle as={InputGroup.Text} id="basic-addon3" className='bg-transparent s_dropdwon_toogle'>
                                            All Categories <MdKeyboardArrowDown className='text-2xl' />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>Category 1</Dropdown.Item>
                                            <Dropdown.Item>Category 2</Dropdown.Item>
                                            <Dropdown.Item>Category 3</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Form.Control
                                        id="basic-url"
                                        aria-describedby="basic-addon3"
                                        placeholder="Search for items...."
                                        className="pr-5"
                                    />
                                    <MdOutlineKeyboardVoice className="position-absolute right-3 top-1/2 transform -translate-y-1/2 text-2xl text-[#AB92F3]" />
                                </InputGroup>
                            </div>
                        </Col>
                        <Col xl={5} lg={12}>
                            <ul className='flex items-center xl:justify-end justify-center xl:mt-0 mt-3'>
                                <li className='flex items-center mx-2 relative'>
                                    <GoHeart className='text-2xl mx-2' />
                                    <span className='h-[20px] w-[20px] rounded-full bg-[#AB92F3] flex items-center justify-center text-white text-xs absolute top-1 left-3 transform translate-x-1/2 -translate-y-1/2'>
                                        4
                                    </span>
                                    <p className='text-sm ml-3'>Wishlist</p>
                                </li>
                                <li className='flex items-center mx-2 relative'>
                                    <FiShoppingCart className='text-2xl mx-2 fw-bold' />
                                    <span className='h-[20px] w-[20px] rounded-full bg-[#AB92F3] flex items-center justify-center text-white text-xs absolute top-2 left-3 transform translate-x-1/2 -translate-y-1/2'>
                                        4
                                    </span>
                                    <p className='text-sm ml-3'>My Cart <p className='text-xs text-[#AB92F3] fw-bold'>$10</p></p>
                                </li>
                                <li className='flex items-center mx-2'>
                                    <MdOutlineLocationOn className='text-2xl mx-2 fw-bold' />
                                    <p className='text-xs'>Diliver To Karnataka
                                        <div className='d-flex'>
                                            <p className=' text-[#AB92F3] fw-bold'>Update Location</p><MdKeyboardArrowDown className='text-2xl' />
                                        </div>
                                    </p>
                                </li>
                                <li className='mx-2'>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic" className='bg-transparent border-0 text-black flex items-center'>
                                            <img src={require('../Image/canada.png')} alt="" />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1"> <img src={require('../Image/canada.png')} alt="" /></Dropdown.Item>
                                            <Dropdown.Item href="#/action-2"> <img src={require('../Image/canada.png')} alt="" /></Dropdown.Item>
                                            <Dropdown.Item href="#/action-3"> <img src={require('../Image/canada.png')} alt="" /></Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                                <li className='mx-2 d_cur' onClick={() => setLoginModalShow(true)}>
                                    <img src={require('../Image/user.png')} alt="" className='rounded-full w-[40px] h-[40px]' />
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </header>

            <header className='d-md-none d-block'>
                <div className='s_mobile_menu'>
                    <div className='flex items-center justify-between'>
                        <img src={require('../Image/logo.png')} alt="" />
                        <div>
                            <GiHamburgerMenu className='text-3xl text-[#56A897]' onClick={handleShow} />
                        </div>
                    </div>
                    <div>
                        <InputGroup className="position-relative my-3">
                            <Dropdown show={showDropdown} onToggle={toggleDropdown} >
                                <Dropdown.Toggle as={InputGroup.Text} id="basic-addon3" className='bg-transparent s_dropdwon_toogle'>
                                    All Categories <MdKeyboardArrowDown className='text-2xl' />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Category 1</Dropdown.Item>
                                    <Dropdown.Item>Category 2</Dropdown.Item>
                                    <Dropdown.Item>Category 3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Form.Control
                                id="basic-url"
                                aria-describedby="basic-addon3"
                                placeholder="Search for items...."
                                className="pr-5"
                            />
                            <MdOutlineKeyboardVoice className="position-absolute right-3 top-1/2 transform -translate-y-1/2 text-2xl text-[#AB92F3]" />
                        </InputGroup>
                    </div>
                </div>

                <Offcanvas show={show} onHide={handleClose} placement='end' className="s_offcanvas">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title> <img src={require('../Image/logo.png')} alt="" /></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ul >
                            <li className='flex items-center my-3 relative'>
                                <GoHeart className='text-2xl mx-2' />
                                <span className='h-[20px] w-[20px] rounded-full bg-[#AB92F3] flex items-center justify-center text-white text-xs absolute top-1 left-3 transform translate-x-1/2 -translate-y-1/2'>
                                    4
                                </span>
                                <p className='text-sm ml-3'>Wishlist</p>
                            </li>
                            <li className='flex items-center my-3 relative'>
                                <FiShoppingCart className='text-2xl mx-2 fw-bold' />
                                <span className='h-[20px] w-[20px] rounded-full bg-[#AB92F3] flex items-center justify-center text-white text-xs absolute top-2 left-3 transform translate-x-1/2 -translate-y-1/2'>
                                    4
                                </span>
                                <p className='text-sm ml-3'>My Cart <p className='text-xs text-[#AB92F3] fw-bold'>$10</p></p>
                            </li>
                            <li className='flex items-center my-3'>
                                <MdOutlineLocationOn className='text-2xl mx-2 fw-bold' />
                                <p className='text-xs'>Diliver To Karnataka
                                    <div className='d-flex'>
                                        <p className=' text-[#AB92F3] fw-bold'>Update Location</p><MdKeyboardArrowDown className='text-2xl' />
                                    </div>
                                </p>
                            </li>
                            <li className='my-3'>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic" className='bg-transparent border-0 text-black flex items-center'>
                                        <img src={require('../Image/canada.png')} alt="" />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1"> <img src={require('../Image/canada.png')} alt="" /></Dropdown.Item>
                                        <Dropdown.Item href="#/action-2"> <img src={require('../Image/canada.png')} alt="" /></Dropdown.Item>
                                        <Dropdown.Item href="#/action-3"> <img src={require('../Image/canada.png')} alt="" /></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li className='my-3' onClick={() => setLoginModalShow(true)}>
                                <img src={require('../Image/user.png')} alt="" className='rounded-full' />
                            </li>
                        </ul>
                    </Offcanvas.Body>
                </Offcanvas>
            </header>

            {/* Login modal */}

            <Modal
                show={loginmodalShow}
                onHide={() => setLoginModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='d_loginmodal'
            >
                <Modal.Body className='p-0'>
                    <div className="d_loginwrapper ">
                        <div className='d-flex justify-content-end d_cur' onClick={() => setLoginModalShow(false)}><IoCloseSharp className='d_closeicon' /></div>
                        <div className="d_loginbox">
                            <div className="row align-items-center">
                                <div className="col-12 col-sm-7">
                                    <h5 className='mb-2'>Shop With Us</h5>
                                    <h6 className='mb-1'>Explore Thousands of our products</h6>
                                    <p className='mb-lg-4 mb-2'>Verify your mobile number to access your <span>Grocery Store account</span></p>
                                    <div className="d_mixinput">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <img src={require('../Image/google.png')} className='me-3' alt="" />
                                            <p className='mb-0'>Sign up with your Google account</p>
                                        </div>
                                    </div>
                                    <div className="d_or text-center">OR</div>
                                    <div className="d_mixinput mt-2 px-3">
                                        <div className="d-flex align-items-center">
                                            <p className='mb-0 me-2'>+91</p>
                                            <input type="text" placeholder='Enter Mobile Number' />
                                        </div>
                                    </div>
                                    <div className='d_agree mb--lg-5 mb-4'>By signing up, you agree to the <a href="">Terms of use</a> and <a href="">Privacy Policy</a>. </div>
                                    <div className="d_loginbtn m-auto" onClick={() => handleopenotpmodal()}>
                                        <Link className='text-center d-block'>Continue</Link>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-5 d-none d-sm-block">
                                    <div className="d_img">
                                        <img src={require('../Image/login.png')} className='w-100' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>


            {/* Login modal */}

            {/* OTP modal */}

            <Modal
                show={otpmodalShow}
                onHide={() => setLoginModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='d_loginmodal d_otpmodal'
            >
                <Modal.Body className='p-0'>
                    <div className="d_loginwrapper ">
                        <div className='d-flex justify-content-end d_cur' onClick={() => setOtpModalShow(false)}><IoCloseSharp className='d_closeicon' /></div>
                        <div className="d_loginbox">
                            <div className="row align-items-center">
                                <div className="col-12 col-sm-7">
                                    <div className="d_text text-center">
                                        <h5 className='mb-2'>OTP Verification</h5>
                                        <div className='mb-1 d_otpdesc'>We have sent a verification code to</div>
                                        <p className='mb-lg-4 mb-2 d_phone'>{maskedPhoneNumber}</p>
                                        <div className="d-flex justify-content-center mb-3">
                                        {[0, 1, 2, 3].map((_, index) => (
                                            <input
                                                key={index}
                                                type="text"
                                                className="me-2 otp-input"
                                                maxLength="1"
                                                ref={(el) => (inputRefs.current[index] = el)}
                                                onChange={(e) => handleOtpInput(e, index)}
                                            />
                                        ))}
                                        </div>
                                        <div className='d_resendotp mb-3'>Resend OTP</div>
                                        <div className="d_loginbtn m-auto">
                                            <Link href="" className='text-center d-block'>Verify Now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-5 d-none d-sm-block">
                                    <div className="d_img">
                                        <img src={require('../Image/otp.png')} className='w-100' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* OTP modal */}


        </>
    );
};

export default Header;