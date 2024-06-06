import React, { useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { app } from "../../firebase";
import { getAuth } from "firebase/auth";
import "./cart.css";

const firestore = getFirestore(app);
const auth = getAuth();

const Cart = ({ cart, removeFromCart }) => {
  const userId = auth.currentUser ? auth.currentUser.uid : null;

  useEffect(() => {
    if (userId) {
      const fetchCartData = async () => {
        try {
          const cartRef = doc(firestore, "carts", userId);
          const cartDoc = await getDoc(cartRef);

          if (cartDoc.exists()) {
            const userData = cartDoc.data();
            if (userData) {
              const storedCart = userData.items || [];
              // set cart data from firestore
              setCart(storedCart);
            }
          }
        } catch (error) {
          console.error("Error fetching cart data:", error);
        }
      };

      fetchCartData();
    }
  }, [userId]);

  const setCart = async (updatedCart) => {
    try {
      const cartRef = doc(firestore, "carts", userId);
      await setDoc(cartRef, { items: updatedCart });
      console.log("Cart data stored in Firestore");
    } catch (error) {
      console.error("Error storing cart data:", error);
    }
  };

  return (
    <div className="max-w-screen-md mx-auto">
      <h2 className="text-center">Cart</h2>
      <ul className="list-none flex flex-wrap justify-center">
        {cart.map((item, index) => (
          <li
            key={index}
            className="w-full sm:w-1/2 md:w-1/4 p-2 box-border text-center"
          >
            Item: {item.itemName}
            <span
              onClick={() => {
                removeFromCart(index);
                setCart(cart.filter((_, i) => i !== index));
              }}
              className="cursor-pointer"
            >
              <AiOutlineCloseCircle />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
