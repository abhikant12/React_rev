import { faker } from '@faker-js/faker';
import { createContext, useState } from "react";

faker.seed(100);

const CartContext = createContext();

const ContextProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const productsArray = [...Array(20)].map((p) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.imageUrl(),
  }));
  const [products] = useState(productsArray);

  return (
    <CartContext.Provider value={{ cart, setCart, products }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, ContextProvider };
