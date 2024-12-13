import { useEffect, useState } from 'react';
import { Col, InputGroup, Row, Form, Dropdown, Offcanvas } from "react-bootstrap";
import { MdKeyboardArrowDown, MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoHeart } from 'react-icons/go';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Login from './Login';


const Header = () => {

    const BaseUrl = process.env.REACT_APP_BASEURL;

    const [showDropdown, setShowDropdown] = useState(false);
    const [show, setShow] = useState(false);
    const [loginmodalShow, setLoginModalShow] = useState(false);
    const [otpmodalShow, setOtpModalShow] = useState(false);
    const [catogeroDrop, setCatogeryDrop] = useState([]);
    const [wishList, setWishList] = useState('');
    const [AddToCart, setAddToCart] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    const navigate = useNavigate();

    const token = localStorage.getItem('token');


    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const fetchcatogerydrop = async () => {
        try {
            const fetchcatdata = await axios.get(`${BaseUrl}/api/getUserCategory`);

            const catdata = fetchcatdata.data.data
            setCatogeryDrop(catdata);
            // console.log('catogery', catdata)
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    }

    const fetchWishList = async () => {
        try {
            const response = await axios.get(`${BaseUrl}/api/allWishList`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setWishList(response.data.totalWishList);

            // console.log("wishlist", response.data.totalWishList);
        } catch (error) {
            console.error("Data Fetching Error:", error);
        }
    };

    const fetchAddCart = async () => {
        try {
            const response = await axios.get(`${BaseUrl}/api/allCarts`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setAddToCart(response.data.totalCarts);

            // console.log("wishlist", response.data.totalWishList);
        } catch (error) {
            console.error("Data Fetching Error:", error);
        }
    };

    useEffect(() => {
        fetchcatogerydrop();
        fetchWishList();
        fetchAddCart();
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                                            {catogeroDrop.map((category) => (
                                                <Dropdown.Item key={category._id} value={category.categoryName.toLowerCase().replace(/\s+/g, '-')}>
                                                    {category.categoryName}
                                                </Dropdown.Item>
                                            ))}
                                            {/* <Dropdown.Item>Category 1</Dropdown.Item>
                                            <Dropdown.Item>Category 2</Dropdown.Item>
                                            <Dropdown.Item>Category 3</Dropdown.Item> */}
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
                                <Link to={'/user/wishlist'} >
                                    <li className='flex items-center mx-2 relative'>
                                        <GoHeart className='text-2xl mx-2' />
                                        <span className='h-[20px] w-[20px] rounded-full bg-[#AB92F3] flex items-center justify-center text-white text-xs absolute top-1 left-3 transform translate-x-1/2 -translate-y-1/2'>
                                            {wishList || 0}
                                        </span>
                                        <p className='text-sm ml-3' >Wishlist</p>
                                    </li>
                                </Link>
                                <Link to={'/cart'} >
                                    <li className='flex items-center mx-2 relative'>
                                        <FiShoppingCart className='text-2xl mx-2 fw-bold' />
                                        <span className='h-[20px] w-[20px] rounded-full bg-[#AB92F3] flex items-center justify-center text-white text-xs absolute top-2 left-3 transform translate-x-1/2 -translate-y-1/2'>
                                            {AddToCart || 0}
                                        </span>
                                        <p className='text-sm ml-3'>My Cart <p className='text-xs text-[#AB92F3] fw-bold'>$10</p></p>
                                    </li>
                                </Link>
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
                                    {catogeroDrop.map((category) => (
                                        <Dropdown.Item key={category._id} value={category.categoryName.toLowerCase().replace(/\s+/g, '-')}>
                                            {category.categoryName}
                                        </Dropdown.Item>
                                    ))}
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
                                    {wishList || 0}
                                </span>
                                <p className='text-sm ml-3'>Wishlist</p>
                            </li>
                            <li className='flex items-center my-3 relative'>
                                <FiShoppingCart className='text-2xl mx-2 fw-bold' />
                                <span className='h-[20px] w-[20px] rounded-full bg-[#AB92F3] flex items-center justify-center text-white text-xs absolute top-2 left-3 transform translate-x-1/2 -translate-y-1/2'>
                                    {AddToCart || 0}
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

            <Login
                loginmodalShow={loginmodalShow}
                setLoginModalShow={setLoginModalShow}
                otpmodalShow={otpmodalShow}
                setOtpModalShow={setOtpModalShow}
            />

        </>
    );
}

export default Header;