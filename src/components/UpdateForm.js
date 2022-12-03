import React, { useState } from "react";
import "../pages/Expense.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Axios from "axios";

function UpdateForm({ user }) {
  console.log(user.itemName);
  const [Item, setItem] = useState([]);
  const [show, setShow] = useState(false);
  const [User, setUser] = useState(user);

  const handleClose = () => setShow(false);


  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log("inside update");
    console.log(Item);
    const response = await Axios.post(window.API_URL + "/updateItem", User);
    setItem(response.data);
    handleClose();
    window.location.reload(false);
  };

  const handleChange = (e) => {
    console.log(user);
    console.log(e.target.name);
    setUser({ ...User, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleUpdate}>
          <div className="container">
            <input
              type="text"
              name="itemName"
              value={User.itemName}
              placeholder="Enter name of item"
              id="inputText"
              onChange={e => handleChange(e)}
            />
            &nbsp;&nbsp; &nbsp;&nbsp;
            <input
              type="text"
              name="shopName"
              value={User.shopName}
              placeholder="Enter name of shop"
              id="inputText"
              onChange={e => handleChange(e)}
            />
            <br></br>
            <br></br>
            <input
              type="number"
              name="price"
              step="any"
              value={User.price}
              placeholder="Enter price of item"
              min={0}
              onChange={e => handleChange(e)}
            />
            &nbsp;&nbsp; &nbsp;&nbsp;
            <input
              type="number"
              name="quantity"
              step="any"
              value={User.quantity}
              placeholder="Enter quantity of item"
              min={0}
              onChange={e => handleChange(e)}
            />
          </div>
          <br></br>
          <button type="submit" className="btn btn-success">
            Update
          </button>
        </form>
    </>
  );
}

export default UpdateForm;
