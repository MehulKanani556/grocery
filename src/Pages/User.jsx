import React from 'react'
import Header from '../Component/Header';
// import Footer from '../Component/Footer'
// import './user.css';
// import '../common.css'
// import '../CSS/Sidebar.css'
import { Col, Row } from 'react-bootstrap';
// import LogoutModel from './LogoutModel';
import Sidebar from '../Pages/Sidebar';
// import '../CSS/Sidebar.css';
import { Outlet } from 'react-router-dom';
import SubHeader from '../Component/SubHeader';

const User = () => {


    // const location = useLocation();
    // const navigate = useNavigate(); 

    // useEffect(() => {
    //     if (location.pathname === '/user') { 
    //         navigate('/user/profile'); 
    //     }
    //     if (location.pathname === '/address') { 
    //         navigate('/user/address'); 
    //     }
    //     if (location.pathname === '/privacy') { 
    //         navigate('/user/privacy'); 
    //     }
    //     if (location.pathname === '/order') { 
    //         navigate('/user/order'); 
    //     }
    //     if (location.pathname === '/coupon') { 
    //         navigate('/user/coupon'); 
    //     }
    // }, [location, navigate]); 
    return (
        <React.Fragment>
            <Header />
            <SubHeader />
            <section className=''>
                <div className=''>
                    <aside className='inter'>
                        <div className='d_container'>
                            <Row className='gx-0'>
                                {/* user Side Bar */}
                                <Col xxl={3} md={4} className='pe-lg-4  pb-md-0 '>
                                    <Sidebar />
                                </Col>
                                <Col xxl={9} md={8} className=' '>
                                    <Outlet />
                                </Col>
                            </Row>
                        </div>
                    </aside>
                </div>
            </section>

            {/* <Footer /> */}

            {/* 
            <LogoutModel show={modalShow}
                onHide={() => setModalShow(false)} /> */}

        </React.Fragment>
    )
}

export default User
