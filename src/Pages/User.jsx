import React, { useEffect } from 'react'
// import Header from '../header/Header'
// import Footer from '../footer/Footer'
// import './user.css';
// import '../common.css'
// import '../CSS/Sidebar.css'
import { Col, Row } from 'react-bootstrap';
// import LogoutModel from './LogoutModel';
import Sidebar from '../Pages/Sidebar';
// import '../CSS/Sidebar.css';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const User = () => {

   
    const location = useLocation();
    const navigate = useNavigate(); 

    useEffect(() => {
        if (location.pathname === '/user') { 
            navigate('/user/profile'); 
        }
        if (location.pathname === '/address') { 
            navigate('/user/address'); 
        }
        if (location.pathname === '/privacy') { 
            navigate('/user/privacy'); 
        }
    }, [location, navigate]); 
    return (
        <React.Fragment>
          
            <section className=''>
                <div className=''>
                    <aside className='inter'>
                        <div className='d_container'>
                            <Row className='gx-0'>
                                {/* user Side Bar */}
                                <Col xxl={3} md={4} className='pe-lg-4  pb-md-0 '>
                                    <Sidebar  />
                                </Col>
                                <Col xxl={9} md={8} className=' '>
                                    <Outlet />
                                </Col>
                            </Row>
                        </div>
                    </aside>
                </div>
            </section>



{/* 
            <LogoutModel show={modalShow}
                onHide={() => setModalShow(false)} /> */}

        </React.Fragment>
    )
}

export default User
