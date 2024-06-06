import React, { useState } from "react";
import { data } from "../restApi.json";
import Cart from "./cart/AddCart";

const Menu = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (itemName, category) => {
    setCart([...cart, { itemName, category }]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <>
      <section className="menu" id="menu">
        <div className="container">
          <div className="heading_section">
            <h1 className="heading">POPULAR DISHES</h1>
            {/* <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
              iusto dolorem! Voluptatibus ipsum nam mollitia architecto. Soluta
              pariatur eius et recusandae veritatis. Quasi, et molestias!
            </p> */}
          </div>
          <div className="dishes_container">
            {data[0].dishes.map((element) => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
                <button
                  onClick={() => addToCart(element.title, element.category)}
                >
                  {element.category}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </>
  );
};

export default Menu;
