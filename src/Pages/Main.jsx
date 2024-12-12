import { Link } from "react-router-dom";
import Footer from "../Component/Footer";
import { Carousel, Col, Row } from "react-bootstrap";
import SubHeader from "../Component/SubHeader";
import { IoArrowForwardSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "../Component/SliderSection";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const BaseUrl = process.env.REACT_APP_BASEURL;

const Main = () => {
    const [dashboardData, setDashboardData] = useState({});
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/api/dashBoard`);
                setDashboardData(response.data.data);

                const preResponse = await axios.get(`${BaseUrl}/api/getUserProduct`);
                // console.log("preresponse",preResponse.data.data);
                setProduct(preResponse.data.data);

            } catch (error) {
                console.error('Error fetching dashboard data:', error);
            }
        };
        fetchDashboardData();
    }, []);

    const getRandomColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const opacity = Math.random() * 0.1 + 0.1; // Random value between 0.5 and 1
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    };

    const getProductImage = (productId) => {
        const productName = product.find((pro) => pro._id === productId);
        // console.log("productName", productName);

        const imagePath = productName?.productImage[0].replace(/\\/g, "/");
        return `${BaseUrl}/${imagePath}`;
    }
    return (
        <>
            <div>
                <Carousel fade style={{ zIndex: "-1" }}>
                    <Carousel.Item  >
                        <img src={require('../Image/img3.avif')} alt="" width="100%" className="s_carousel_img" />
                        <Carousel.Caption>
                            <h3 className="md:text-5xl text-2xl font-bold">Eat Fresh Fruits</h3>
                            <p className="md:text-lg text-sm my-2">Save Up to 60% off on your first Order</p>
                            <button className="s_btn_puprle"><Link to={'/'} className="text-white">Order Now</Link></button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={require('../Image/img1.avif')} alt="" width="100%" className="s_carousel_img" />
                        <Carousel.Caption>
                            <h3 className="md:text-5xl text-2xl font-bold">Eat Fresh Fruits</h3>
                            <p className="md:text-lg text-sm my-2">Save Up to 60% off on your first Order</p>
                            <button className="s_btn_puprle"><Link to={'/'} className="text-white">Order Now</Link></button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={require('../Image/img.jpg')} alt="" width="100%" className="s_carousel_img" />
                        <Carousel.Caption>
                            <h3 className="md:text-5xl text-2xl font-bold">Eat Fresh Fruits</h3>
                            <p className="md:text-lg text-sm my-2">Save Up to 60% off on your first Order</p>
                            <button className="s_btn_puprle"><Link to={'/'} className="text-white">Order Now</Link></button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="border-b s_sub_header">
                <SubHeader />
            </div>
            <div>
                <Row className="m-0">
                    <Col className="xl:p-[3rem] p-[1rem] relative" sm={6} xs={12}>
                        <img src={require('../Image/fruits1.png')} alt="" width="100%" className="" />
                        <div className="s_img_contant">
                            <p className="xl:text-4xl sm:text-xl text-lg font-semibold">BUY FRESH VEGETABLES <br /> ONLINE</p>
                            <p className="xl:my-3 sm:my-2 xs:my-0 xl:text-lg text-sm">Fresh Offers Only For You.</p>
                            <button className="s_btn_white"> <Link >Shop Now <IoArrowForwardSharp className="inline-block	" /></Link></button>
                        </div>
                    </Col>
                    <Col className="xl:p-[3rem] p-[1rem] relative" sm={6} xs={12}>
                        <img src={require('../Image/fruits2.png')} alt="" width="100%" className="" />
                        <div className="s_img_contant">
                            <p className="xl:text-4xl sm:text-xl text-lg font-semibold">BUY All GROCERIES <br /> ONLINE</p>
                            <p className="xl:my-3 sm:my-2 xs:my-0 xl:text-lg text-sm">60% Off on your First Order</p>
                            <button className="s_btn_white"> <Link >Shop Now <IoArrowForwardSharp className="inline-block	" /></Link></button>
                        </div>
                    </Col>
                </Row>
            </div>

            <div>
                {dashboardData.MoreToExplore && (
                    <Slider
                        title="Explore Fruits & Veges"
                        data={dashboardData.MoreToExplore}
                        type="explore"
                        BaseUrl={BaseUrl}
                    />
                )}
                {dashboardData.bestSeller && (
                    <Slider
                        title="Best Sellers"
                        data={dashboardData.bestSeller}
                        type="products"
                        BaseUrl={BaseUrl}
                    />
                )}
                {dashboardData.groceries && (
                    <Slider
                        title="Groceries"
                        data={dashboardData.groceries}
                        type="products"
                        BaseUrl={BaseUrl}
                    />
                )}

                <div className="my-10 s_container">
                    <div className="s_bg_deals">
                        <Row className="mx-0 items-center py-4 ">
                            <Col className="ps-5" lg={6}>
                                <h3 className="font-semibold text-xl">GRAB DEALS ON BREAKFAST SPECIALS</h3>
                                <p className="text-sm my-2">Oats <span>|</span> Honey <span>|</span> Dairy </p>
                                <button className="s_btn_white">Shop Now<HiOutlineArrowNarrowRight className="inline-block mx-2" /></button>
                            </Col>
                            <Col className=" lg:text-7xl font-semibold lg:block hidden">50% <br /> OFF</Col>
                        </Row>
                    </div>
                </div>

                {dashboardData.freshFruits && (
                    <Slider
                        title="Fruits"
                        data={dashboardData.freshFruits}
                        type="products"
                        BaseUrl={BaseUrl}
                    />
                )}

                <div className="s_container my-5">
                    <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                        {dashboardData.SpecialDeals && Array.isArray(dashboardData.SpecialDeals) &&
                            dashboardData.SpecialDeals.map((item, index) => (
                                <div key={index} style={{ backgroundColor: getRandomColor() }} className="flex items-center justify-between rounded-2xl p-4">
                                    <div>
                                        <h4 className="text-2xl md:text-3xl font-semibold">{item.title}</h4>
                                        <p className="my-2">{item.subTitle}</p>
                                        <button className="s_btn_white">Buy Now <HiOutlineArrowNarrowRight className="inline-block mx-1" /></button>
                                    </div>
                                    <div>
                                        <img src={getProductImage(item.productId)} alt="" className="md:h-32 md:w-32 w-20 h-20 rounded-full" />
                                        <p className="text-center font-semibold">{item.discount}% off</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>


                {dashboardData.freshVegetables && (
                    <Slider
                        title="Vegetables"
                        data={dashboardData.freshVegetables}
                        type="products"
                        BaseUrl={BaseUrl}
                    />
                )}
            </div>
            <Footer />
        </>
    );
};

export default Main;
