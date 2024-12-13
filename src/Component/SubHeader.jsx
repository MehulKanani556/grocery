import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";
import homeIcon from '../Image/icon2 (2).svg'
const BaseUrl = process.env.REACT_APP_BASEURL;

const SubHeader = () => {
    const navigate = useNavigate();

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/api/getUserCategory`);
                const CategoryData = response.data.data;
                setData(CategoryData);

            } catch (error) {
                console.log('Data Fetching Error:', error);
            }
        }
        fetchdata();
    }, []);

    const handleNavigate = (id) => {
        console.log("id", id);

        navigate(`/category` ,{state:{id:id}});
    }
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <ul className="my-3 flex justify-evenly ">
                            <li>
                                <Link to={'/'} className="flex ">
                                    <img src={homeIcon} alt="" className="mx-2" />
                                    <p>Home</p>
                                </Link>
                            </li>
                            {data.map((item, index) => (
                                <li key={index} onClick={() => handleNavigate(item._id)} className="cursor-pointer">
                                    <div className="flex ">
                                        <img src={`${BaseUrl}/${item?.vectorImage?.replace(/\\/g, '/')}`} alt="" className="mx-2" />
                                        <p>{item.categoryName}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SubHeader;