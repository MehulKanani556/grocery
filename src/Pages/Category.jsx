import axios from "axios";
import { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowRight, MdOutlineShoppingCart } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import SubHeader from "../Component/SubHeader";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";
import { BiSortAlt2 } from "react-icons/bi";
import Login from "../Component/Login";


const BaseUrl = process.env.REACT_APP_BASEURL;
const token = localStorage.getItem('token');
const userId = localStorage.getItem('userId');
// console.log("token",token);

const Category = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const id = location.state?.id;   // Get the category ID from location state

    // console.log("id>>>>>>>", id);

    const [categoryData, setCategoryData] = useState([]);  // State to store category data
    const [category, setCategory] = useState([]);
    const [productData, setProductData] = useState([]);    // State to store product data
    const [selectedId, setSelectedId] = useState(null);
    const [activeSubCategory, setActiveSubCategory] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedSort, setSelectedSort] = useState('relevance');
    const [loginmodalShow, setLoginModalShow] = useState(false);
    const [otpmodalShow, setOtpModalShow] = useState(false);

    const [wishlist, setWishlist] = useState(() => {
        // Load wishlist from localStorage when the component mounts
        const savedWishlist = localStorage.getItem("wishlist");
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    // Save wishlist to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    // Function to toggle sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    const handleSubCategory = (id) => {
        // console.log("id", id);
        setSelectedId(id);
        setActiveSubCategory(id);

        if (window.innerWidth < 768) {
            setIsSidebarOpen(false);
        }

    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoryResponse = await axios.get(`${BaseUrl}/api/getUserCategory`);
                setCategory(categoryResponse.data.data);

                // Fetch subcategories for the current category
                const response = await axios.get(`${BaseUrl}/api/getUserSubCategory`);
                const matchingCategory = response.data.data.filter(item => item.categoryId === id);

                if (matchingCategory.length > 0) {
                    setCategoryData(matchingCategory);

                    const firstSubCategory = matchingCategory[0]._id;
                    if (!selectedId) {
                        setSelectedId(firstSubCategory);
                        setActiveSubCategory(firstSubCategory);
                    }
                }

                // Fetch all products
                const productResponse = await axios.get(`${BaseUrl}/api/getUserProduct`);

                // Filter products based on category and subcategory
                const matchingProducts = productResponse.data.data.filter(
                    product =>
                        product.categoryId === id &&
                        (selectedId ? product.subCategoryId === selectedId : true)
                );

                // console.log("matchingProducts", matchingProducts);
                setProductData(matchingProducts);

            } catch (error) {
                console.error("Data Fetching error:", error);
            }
        };

        fetchData();
    }, [id, selectedId]);

    const getCategoryName = (categoryId) => {
        const catName = category.find((cat) => cat._id === categoryId);
        return catName ? catName.categoryName : "";
    }
    const handleSortChange = (sortOption) => {
        setSelectedSort(sortOption);
        let sortedData = [...productData];

        switch (sortOption) {
            case 'price-low-to-high':
                sortedData.sort((a, b) => a.price - b.price);
                break;
            case 'price-high-to-low':
                sortedData.sort((a, b) => b.price - a.price);
                break;
            case 'discount-high-to-low':
                sortedData.sort((a, b) => b.discount - a.discount);
                break;
            default:
                // console.warn(`Unknown sort option: ${sortOption}`);
                break;
        }

        setProductData(sortedData);
    };
    const handleAddWishList = async (productId) => {
        // console.log("token", token);
        setWishlist([...wishlist, productId]);

        if (!token) {
            setLoginModalShow(true);
            return;
        }

        try {
            await axios.post(`${BaseUrl}/api/createWishList`, {
                productId,
                userId
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        } catch (error) {
            console.error('Data fetching error:', error);
        }
    };

    const handleAddToCart = async (id, quantity) => {

        if (!token) {
            setLoginModalShow(true);
            return;
        }
        try {
            await axios.post(`${BaseUrl}/api/addToCart`, {
                productId: id,
                userId: userId,
                quantity: quantity
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        } catch (error) {
            console.error('Data Fetching Error');
        }
    }

    const handleProduct= (id) => {
        navigate(`/detail/${id}`);
    }
    return (
        <>
            <div className="my-3 border-b s_sub_header">
                <SubHeader />
            </div>
            <div className="flex relative">
                <div className="w-10 shadow-md md:hidden block">
                    <button
                        className="s_sidebar_btn"
                        onClick={toggleSidebar}
                    >
                        <MdKeyboardDoubleArrowRight className="text-white text-3xl" />
                    </button>
                </div>
                <div className={`
                    md:w-80 w-64 shadow-md h-lvh 
                    md:block 
                    ${isSidebarOpen ? 'block absolute top-0 left-10 ' : 'hidden'}
                    bg-white
                `} >
                    <ul className="ps-4 s_subCat_ul">
                        {categoryData.map((item, index) => (
                            <li
                                key={index}
                                className={`py-2 cursor-pointer ${activeSubCategory === item._id ? 'active' : ''}`}
                                onClick={() => handleSubCategory(item._id)}
                            >
                                <div className="flex items-center">
                                    <img
                                        src={`${BaseUrl}/${item.subCategoryImage.replace(/\\/g, '/')}`}
                                        alt={item.productName}
                                        className="w-14 h-14 object-cover mx-3"
                                    />
                                    <h4 className="font-semibold text-2xl">{item.subCategoryName}</h4>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full">
                    {/* "Explore All" Header and Sort Dropdown */}
                    <div className="px-4 flex justify-between">
                        <div className="fw-semibold text-2xl p-2">
                            Explore All {productData.length > 0 && getCategoryName(productData[0].categoryId)}
                        </div>
                        <div>
                            <Dropdown className="s_dropdwon_sort">
                                <Dropdown.Toggle id="dropdown-basic">
                                    <BiSortAlt2 className="inline-block" />Sort
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <div className="font-semibold px-3 py-2" style={{ borderBottom: '1px solid #D2D2D2' }}>
                                        Sort by
                                    </div>
                                    <div className="px-3">
                                        <div className="form-check custom-radio my-2">
                                            <input
                                                type="radio"
                                                id="sort-relevance"
                                                name="sort-options"
                                                className="form-check-input"
                                                checked={selectedSort === 'relevance'}
                                                onChange={() => handleSortChange('relevance')}
                                            />
                                            <label htmlFor="sort-relevance" className="form-check-label">
                                                Relevance (default)
                                            </label>
                                        </div>
                                        <div className="form-check custom-radio my-2">
                                            <input
                                                type="radio"
                                                id="sort-price-low-to-high"
                                                name="sort-options"
                                                className="form-check-input"
                                                checked={selectedSort === 'price-low-to-high'}
                                                onChange={() => handleSortChange('price-low-to-high')}
                                            />
                                            <label htmlFor="sort-price-low-to-high" className="form-check-label">
                                                Price (low to high)
                                            </label>
                                        </div>
                                        <div className="form-check custom-radio my-2">
                                            <input
                                                type="radio"
                                                id="sort-price-high-to-low"
                                                name="sort-options"
                                                className="form-check-input"
                                                checked={selectedSort === 'price-high-to-low'}
                                                onChange={() => handleSortChange('price-high-to-low')}
                                            />
                                            <label htmlFor="sort-price-high-to-low" className="form-check-label">
                                                Price (high to low)
                                            </label>
                                        </div>
                                        <div className="form-check custom-radio my-2">
                                            <input
                                                type="radio"
                                                id="sort-discount-high-to-low"
                                                name="sort-options"
                                                className="form-check-input"
                                                checked={selectedSort === 'discount-high-to-low'}
                                                onChange={() => handleSortChange('discount-high-to-low')}
                                            />
                                            <label htmlFor="sort-discount-high-to-low" className="form-check-label">
                                                Discount (high to low)
                                            </label>
                                        </div>
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>

                    {/* Product List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 p-4">
                        {productData.map((item, index) => {
                            const discountedPrice = item.price * (1 - item.discount / 100);
                            return (
                                <div key={item._id || index} className="bg-white rounded-lg border">
                                    <div className="d-flex justify-between">
                                        <div>
                                            <small className="bg-[#AB92F3] rounded-tl-md px-[15px] py-[4px]">
                                                Save {item.discount}%
                                            </small>
                                        </div>
                                        <div className="px-4 pt-3 text-[#FD7171] cursor-pointer">
                                            {/* <FaRegHeart onClick={() => handleAddWishList(item._id)} /> */}
                                            {wishlist.includes(item._id) ? (
                                                <FaHeart onClick={() => handleAddWishList(item._id)} />
                                            ) : (
                                                <FaRegHeart onClick={() => handleAddWishList(item._id)} />
                                            )}
                                        </div>
                                    </div>
                                    <div className="px-4 pb-4">
                                        <img
                                            src={`${BaseUrl}/${item.productImage[0].replace(/\\/g, '/')}`}
                                            alt={item.productName}
                                            className="h-40 w-40 object-contain mb-4 mx-auto"
                                            onClick={() => handleProduct(item._id)}
                                        />
                                        <small className="text-gray-500">{getCategoryName(item.categoryId)}</small>
                                        <h4 className="font-semibold text-lg">{item.productName}</h4>
                                        <p className="font-semibold text-[#AB92F3]">
                                            ${discountedPrice.toFixed(2)}{' '}
                                            <span className="text-gray-400 line-through">${item.price}</span>
                                        </p>
                                        <small>Qty : {item.totalQuantity ? item.totalQuantity : item.quantity}</small>
                                        <button className="mt-3 s_btn_puprle text-white w-full cursor-pointer" onClick={() => handleAddToCart(item._id, 1)}  >
                                            {/* <Link> */}
                                            <MdOutlineShoppingCart className="inline-block mr-2" />
                                            Add to cart
                                            {/* </Link> */}
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>

            <Login
                loginmodalShow={loginmodalShow}
                setLoginModalShow={setLoginModalShow}
                otpmodalShow={otpmodalShow}
                setOtpModalShow={setOtpModalShow}
            />
        </>
    );
};

export default Category;
