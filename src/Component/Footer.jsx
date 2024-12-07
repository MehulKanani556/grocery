import { Col, Row } from "react-bootstrap";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare, FaGooglePlusSquare } from "react-icons/fa";
import {  FaSquareXTwitter } from "react-icons/fa6";
import { TbBrandYoutubeFilled } from "react-icons/tb";


const Footer = () => {
    return (
        <>
            <footer className="s_footer">
                    <Row>
                        <Col lg={3} md={6} sm={12}>
                            <div>
                                <img src={require('../Image/logo.png')} alt="" />
                            </div>
                            <div className="my-5">
                                <p className="text-[#7171F1] font-semibold	mb-1">Follow Us</p>
                                <div className="flex">
                                    <AiFillInstagram className="text-3xl text-[#54A595] mr-2" />
                                    <FaFacebookSquare  className="text-3xl text-[#54A595] mr-2" />
                                    <TbBrandYoutubeFilled className="text-3xl text-[#54A595] mr-2" />
                                    <FaGooglePlusSquare className="text-3xl text-[#54A595] mr-2" />
                                    <FaSquareXTwitter  className="text-3xl text-[#54A595] mr-2" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                        <p className="text-[#7171F1] font-semibold	mb-1">Useful Links</p>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                        <p className="text-[#7171F1] font-semibold	mb-1">Categories</p></Col>
                        <Col lg={3} md={6} sm={12}>
                        <p className="text-[#7171F1] font-semibold	mb-1">Help</p></Col>
                    </Row>
            </footer>
        </>
    )
}

export default Footer;