import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Expense.css";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BulkUpload from "./BulkUpload";

function Expense() {
  const navigate = useNavigate();
  const userName = localStorage.getItem("username");
  const [itemName, setItemName] = useState("");
  const [shopName, setShopName] = useState("");
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();

  const handleSubmit = async (e) => {
    //Prevent page reload
    e.preventDefault();
    const item = { itemName, quantity, price, shopName, userName };
    console.log(item);
    if (itemName !== "" && quantity !== 0 && price !== 0 && shopName !== "") {
      await Axios.post(window.API_URL + "/addItem", item).then((response) => {
        console.log(response.data);
        console.log("added success")
        toast("Item was added to the list");
      }).catch((error) => {
      if (error.response) {
        console.log("inside error")
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        // alert(error.response.data);
        toast(error.response.data);
      } else {
        console.log("Error", error.message);
      }
    });
  }
    console.log("added");
    window.location.reload(true);
  };

  useEffect(() => {
    if(userName==null){
      navigate('/login')
    }
  }, [])
  


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
              min={0}
              id="expenseInputNumber"
              step="any"
              value={price}
              placeholder="Enter price of item"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            &nbsp;&nbsp; &nbsp;&nbsp;
            <input
              type="number"
              name="quantity"
              step="any"
              id="expenseInputNumber"
              value={quantity}
              placeholder="Enter quantity of item"
              min={0}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
          </div>
          <br></br>
          <button type="submit" className="btn btn-success" id="btn-addBtn">
            Add
          </button>
        </form>
        <BulkUpload />
      </div>
    </>
  );
}

export default Expense;
