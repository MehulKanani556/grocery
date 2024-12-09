import { Link } from "react-router-dom";
import Footer from "../Component/Footer";
import { Card, Carousel, Col, Row } from "react-bootstrap";
import SubHeader from "../Component/SubHeader";
import { IoArrowForwardSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";

const BaseUrl = process.env.REACT_APP_BASEURL;

const Main = () => {
    const [data, setData] = useState([]);
    const getRandomColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const opacity = Math.random() * 0.1 + 0.1; // Random value between 0.5 and 1
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/api/dashBoard`);
                console.log("response", response.data.data);

                setData(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div>
                <Carousel fade>
                    <Carousel.Item>
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
                            <p className="xl:text-4xl sm:text-xl text-lg font-semibold">BUY FRESH VEGETABLES <br /> ONLINE</p>
                            <p className="xl:my-3 sm:my-2 xs:my-0 xl:text-lg text-sm">Fresh Offers Only For You.</p>
                            <button className="s_btn_white"> <Link >Shop Now <IoArrowForwardSharp className="inline-block	" /></Link></button>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="mb-8">
                <div className="s_container">
                    <div className="flex justify-between  mb-4">
                        <h2 className="text-2xl font-bold">Explore Fruits & Veges</h2>
                        <Link><p className="font-semibold">See All</p></Link>
                    </div>
                    <Row>
                        {data.MoreToExplore && data.MoreToExplore.map((item) => (
                            <Col key={item._id} xl={2} md={4} sm={3} className="text-center py-2">
                                <div style={{ backgroundColor: getRandomColor() }}>
                                    <img src={`${BaseUrl}/${item.moreToExploreImage.replace(/\\/g, '/')}`} alt="" className="mx-auto" />
                                    <p>{item.title}</p>
                                    <small>{item.description}</small>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>

            <div className="mb-8">
                <div className="s_container">
                    <div className="flex justify-between  mb-4">
                        <h2 className="text-2xl font-bold">Best Seller</h2>
                        <Link>See all</Link>
                    </div>
                    <Row>
                        {data.bestSeller && data.bestSeller.map((item) => (
                            <Col key={item._id} xl={2} md={4} sm={3} className="text-center py-2">
                                {/* <div>
                                    <img src={`${BaseUrl}/${item.productImage[0].replace(/\\/g, '/')}`} alt="" className="mx-auto" />
                                    <p>{item.productName}</p>
                                    <small>{item.totalQuantity}</small>
                                </div> */}
                                <Card className="s_card">
                                <Card.Img variant="top" src={`${BaseUrl}/${item.productImage[0].replace(/\\/g, '/')}`} />
                                <Card.Body>
                                    <Card.Title>{item.productName}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Main;
