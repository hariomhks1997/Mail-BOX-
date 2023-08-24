import React, { useEffect, useState } from "react";
import CartContext from "./Cart-context";
import axios from "axios";
import AuthContext from "../../../auth-context";
import { useContext } from "react";

const CartProvider = (props) => {
  const authCtx = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const ChangesEMail = authCtx.email.replace("@", "").replace(".", "");
  // console.log(ChangesEMail);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://crudcrud.com/api/c7f2a59799384fa69f7217f462ad4c61/${ChangesEMail}`
        );
        // console.log(response.data);

        setItems(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [ChangesEMail]);

  useEffect(() => {
    let updateAmount = 0;
    let updateQuantity = 0;

    items.forEach((item) => {
      // console.log("hii");
      updateAmount += Number(item.price);
      updateQuantity += Number(item.quantity);
    });
    console.log(updateQuantity, items);
    setTotalAmount(updateAmount);
    setQuantity(updateQuantity);
  }, [items]);

  // console.log(items);

  const addItemToCartHandler = async (item) => {
    try {
      const existingItem = items.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + item.quantity,
          price: existingItem.price + item.price,
        };

        const response = await axios.put(
          `https://crudcrud.com/api/c7f2a59799384fa69f7217f462ad4c61/${ChangesEMail}/${existingItem._id}`,
          { ...updatedItem, _id: undefined }
        );
        //  console.log(response);

        setItems((prevItems) =>
          prevItems.map((cartItem) =>
            cartItem.id === item.id ? updatedItem : cartItem
          )
        );
      } else {
        const postProduct = await axios.post(
          `https://crudcrud.com/api/c7f2a59799384fa69f7217f462ad4c61/${ChangesEMail}`,
          item
        );
        setItems((prevItems) => [...prevItems, postProduct.data]);
        console.log(postProduct.data);
      }

      setTotalAmount(totalAmount + item.price);
    } catch (error) {
      console.log(error);
    }
  };

  const removeItemFromCartHandler = async (cartItem) => {
    const existingItemIndex = items.findIndex(
      (item) => item.id === cartItem.id
    );

    const existingItem = items[existingItemIndex];
    // console.log(existingItem);
    try {
      let updatedItems;
      let updatedTotalAmount;
      let updatedQuantity;
      if (existingItem.quantity === 1) {
        const response = await axios.delete(
          `https://crudcrud.com/api/c7f2a59799384fa69f7217f462ad4c61/${ChangesEMail}/${existingItem._id}`
        );
        updatedItems = items.filter((item) => item.id !== cartItem.id);
      } else {
        const updatedItem = {
          ...existingItem,
          quantity: Number(existingItem.quantity) - 1,
          price:
            Number(existingItem.price) -
            Number(existingItem.price) / Number(existingItem.quantity),
        };
        const response = await axios.put(
          `https://crudcrud.com/api/c7f2a59799384fa69f7217f462ad4c61/${ChangesEMail}/${existingItem._id}`,
          { ...updatedItem, _id: undefined }
        );
        updatedItems = [...items];
        updatedItems[existingItemIndex] = updatedItem;
        updatedTotalAmount =
          totalAmount -
          Number(existingItem.price) / Number(existingItem.quantity);

        updatedQuantity = quantity - Number(existingItem.quantity);
      }

      setTotalAmount(updatedTotalAmount);
      setItems(updatedItems);
      setQuantity(updatedQuantity);
      console.log(updatedItems);
    } catch (error) {
      console.log(error);
    }
  };
  const clearCartHandler = async () => {
    try {
      // Get the list of objects associated with the ChangesEMail array
      const { data } = await axios.get(
        `https://crudcrud.com/api/d5c91e70a04b4017940e97942294c221/${ChangesEMail}`
      );
      console.log(data);
      // Delete each object individually
      const deleteRequests = data.map((item) =>
        axios.delete(
          `https://crudcrud.com/api/f1a02afb26634b35826493a8dcff52db/${ChangesEMail}/${item._id}`
        )
      );

      // Perform all delete requests in parallel
      await Promise.all(deleteRequests);

      // Clear the local state and display a success message
      setItems([]);
      setTotalAmount(0);
      alert("Thanks for Purchase");
    } catch (error) {
      console.log(error);
    }
  };

  const cartContext = {
    item: items,
    quantity: quantity,
    totalAmount: totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
<label>Tshirt name</label>
<select>
  <option>Navy Blue Shirt </option>
  <option>Spary Jeans</option>
  <option>Gucci Shirt</option>
</select>
<label>Description</label>
<select>
  <option>100%cotton</option>
  <option>70:30% Cotton:Silk</option>
</select>
<label>Price</label>
<select>
  <option>2000</option>
  <option>3000</option>
  <option>2000</option>
</select>
<label>Quantity Avaliable</label>
<lable>L</lable>
<input></input>