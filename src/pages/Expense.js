import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Expense.css";

function Expense() {
  const navigate = useNavigate();

  const [itemName, setItemName] = useState("");
  const [shopName, setShopName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
  };
  return (
    <>
      <div>
        <br></br>
        <br></br>
        <form onSubmit={handleSubmit}>
          <div className="container">
            <input
              type="text"
              name="itemName"
              value={itemName}
              placeholder="Enter name of item"
              id="inputText"
              onChange={(e) => {
                setItemName(e.target.value);
              }}
            />
            &nbsp;&nbsp; &nbsp;&nbsp;
            <input
              type="text"
              name="shopName"
              value={shopName}
              placeholder="Enter name of shop"
              id="inputText"
              onChange={(e) => {
                setShopName(e.target.value);
              }}
            />
            <br></br>
            <br></br>
            <input
              type="number"
              name="price"
              value={price}
              placeholder="Enter price of item"
              min={0}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            &nbsp;&nbsp; &nbsp;&nbsp;
            <input
              type="number"
              name="quantity"
              value={quantity}
              placeholder="Enter quantity of item"
              min={0}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
          </div>
          <br></br>
          <button type="button" className="btn btn-success">
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default Expense;
