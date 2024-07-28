import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context";
import Item from "./Item";


const Cart = () => {

  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total: {total}</span>
      <div className="productContainer">
        {cart.map((prod) => (
          <Item prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;