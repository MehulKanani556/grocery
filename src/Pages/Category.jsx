import axios from "axios";
import { useEffect, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import SubHeader from "../Component/SubHeader";

const BaseUrl = process.env.REACT_APP_BASEURL;

const Category = () => {
    const location = useLocation();

    // Get the category ID from location state
    const id = location.state.id;
    console.log("id", id);

    // State to store category data
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data from the API
                const response = await axios.get(`${BaseUrl}/api/getUserSubCategory`);
                console.log("response", response.data.data);

                // Match data based on the category ID
                const matchingCategory = response.data.data.filter(item => item.categoryId === id);
                console.log("matchingCategory", matchingCategory);

                if (matchingCategory.length > 0) {
                    setCategoryData(matchingCategory);
                } else {
                    console.warn(`No data found for category ID: ${id}`);
                }
            } catch (error) {
                console.error("Data Fetching error:", error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <>
        <div className="my-3 border-b">
            <SubHeader/>
        </div>
        <div className="flex">
            <div className="w-80 shadow-md h-lvh">
                <ul className="ps-5 s_subCat_ul">
                {categoryData.map((item, index) => (
                    <li key={index} className="py-2">
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
            <div className="">
                <p>djjflkdm</p>
            </div>
        </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryData.map((item, index) => (
                    <div key={index} className="p-4 bg-white rounded-lg border">
                        <img
                            src={`${BaseUrl}/${item.subCategoryImage.replace(/\\/g, '/')}`}
                            alt={item.productName}
                            className="w-full h-40 object-contain mb-4"
                        />
                        <small className="text-gray-500">Category {item.categoryId}</small>
                        <h4 className="font-semibold text-lg">{item.subCategoryName}</h4>
                        <button className="mt-3 s_btn_puprle text-white w-full">
                            <Link to="/cart">
                                <MdOutlineShoppingCart className="inline-block mr-2" />
                                Add to cart
                            </Link>
                        </button>
                    </div>
                ))}
            </div> */}
        </>
    );
};

export default Category;
