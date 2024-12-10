import { Col, Row } from "react-bootstrap";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare, FaGooglePlusSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TbBrandYoutubeFilled } from "react-icons/tb";


const Footer = () => {
    return (
        <>
            <footer className="s_footer">
                <Row>
                    <Col lg={3} sm={6} xs={12}>
                        <div>
                            <img src={require('../Image/logo.png')} alt="" />
                        </div>
                        <div className="my-5">
                            <p className="text-[#7171F1] font-semibold	mb-1">Follow Us</p>
                            <div className="flex">
                                <AiFillInstagram className="text-3xl text-[#54A595] mr-2 " />
                                <FaFacebookSquare className="text-3xl text-[#54A595] mr-2" />
                                <TbBrandYoutubeFilled className="text-3xl text-[#54A595] mr-2" />
                                <FaGooglePlusSquare className="text-3xl text-[#54A595] mr-2" />
                                <FaSquareXTwitter className="text-3xl text-[#54A595] mr-2" />
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6} xs={12} className="mb-md-0 mb-3">
                        <p className="text-[#7171F1] text-lg font-semibold	mb-1">Useful Links</p>
                        <div className="flex">
                            <ul className="mr-4">
                                <li>About</li>
                                <li>Careers</li>
                                <li>Blog</li>
                                <li>Press</li>
                                <li>Lead</li>
                                <li>Value</li>
                            </ul>
                            <ul className="mr-4">
                                <li>Privacy</li>
                                <li>Terms</li>
                                <li>FAQs</li>
                                <li>Security</li>
                                <li>Contact</li>
                                <li>Partner</li>
                            </ul>
                            <ul>
                                <li>Express</li>
                                <li>Terms</li>
                                <li>Seller</li>
                                <li>Warehouse</li>
                                <li>Deliver</li>
                                <li>Resources</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3} sm={6} xs={12} className="mb-md-0 mb-3">
                        <p className="text-[#7171F1] text-lg font-semibold	mb-1">Categories</p>
                        <div className="flex">
                        <ul className="mr-4">
                                <li>Vegetable</li>
                                <li>Fruits</li>
                                <li>Bakery</li>
                                <li>Buscuits</li>
                                <li>Dry Fruits</li>
                                <li>Masala</li>
                            </ul>
                            <ul>
                                <li>Oil</li>
                                <li>Dairy</li>
                                <li>Breakfast</li>
                                <li>Organic</li>
                                <li>Premium</li>
                                <li>Atta, Dal & Rice</li>
                            </ul>
                        </div>
                        </Col>
                      
                    <Col lg={3} sm={6} xs={12} className="mb-md-0 mb-3">
                        <p className="text-[#7171F1] text-lg font-semibold	mb-1">Help</p>
                        <ul>
                            <li>Payments</li>
                            <li>Shipping</li>
                            <li>Cancellation & Returns</li>
                            <li>Report</li>
                        </ul>
                        </Col>
                </Row>
            </footer>
        </>
    )
}

export default Footer;