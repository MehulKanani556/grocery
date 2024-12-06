import { Link } from "react-router-dom";
import Footer from "../Component/Footer";

const Main = () => { //demo
    const products = [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
    ];

    return (
      <>
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link to={`product/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
        <Footer/>
      </>
    );
};

export default Main;
