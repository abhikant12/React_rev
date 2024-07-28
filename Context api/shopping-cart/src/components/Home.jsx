import { useContext } from "react";
import { CartContext } from "../context";
import Item from "./Item";

const Home = () => {
  
  const { products } = useContext(CartContext);
  

  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ fontSize: 30 }}>Products Page</span>
      <div className="productContainer">
        {products.map((prod) => (
          <Item prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;