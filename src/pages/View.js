import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Nav from "react-bootstrap/Nav";
import "./View.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import UpdateForm from "../components/UpdateForm";
function View() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const userName = localStorage.getItem("username");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [Item, setItem] = useState([]);

  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const { user } = useParams();
  const [itemDetail, setItemDetail] = useState([]);

  const getItems = async () => {
    console.log("user " + user);
    console.log("getItems getting called");
    const res = await Axios(window.API_URL + "/getAllItems/" + user);
    setItemDetail(res.data);
  };

  const getItemById = async (id) => {
    console.log("itemDetail id ", id);
    const res = await Axios(window.API_URL + "/getItemById/" + id);
    console.log(res.data);
    setItem(res.data);
    handleShow();
  };

  const SearchItem = async (e) => {
    e.preventDefault();
    if (fromDate && toDate) {
      const res = await Axios(
        window.API_URL +
          "/filterItem?fromDate=" +
          fromDate +
          "&toDate=" +
          toDate +
          "&userName="+
          userName
      );
      console.log("inside search");
      console.log(res.data);
      setItemDetail(res.data);
    } else {
      console.log("inside non search");
      getItems();
    }
  };

  const downloadReport = async (e) => {
    e.preventDefault();
    console.log("from date "+fromDate + " toDate "+toDate)
    if (fromDate && toDate) {
      await Axios(
        window.API_URL +
          "/api/excel/download?fromDate=" +
          fromDate +
          "&toDate=" +
          toDate +
          "&userName=" +
          userName
      );
    } else {
      await Axios(window.API_URL + "/api/excel/download?fromDate=null&toDate=null&userName=" + userName);
    }
  };

  const handleDelete = async (id, e) => {
    window.location.reload(false);
    console.log("inside Delete Item");
    console.log("id " + id);
    await Axios.delete(window.API_URL + "/deleteItem/" + id);
  };

  useEffect(() => {
    if(userName==null){
      navigate('/login')
    }else{
    getItems();
    }
  }, []);
  var sum = 0;

  const calculateTotal = (itemDetail) => {
    console.log("inside calculate");
    itemDetail.forEach((subData) => (sum += subData.price));
    console.log(sum);
    return sum + "£";
  };
  return (
    <>
      <Form>
        <div
          className="container viewFormContainer"
          style={{ marginTop: "20px" }}
        >
          <div className="row">
            <div className="col-lg-2">
              <Form.Group className="mb-3">
                <Form.Control
                  type="date"
                  id="datePicker"
                  name="fromDate"
                  onChange={(e) => setFromDate(e.target.value)}
                  style={{ height: "40px", width: "165px" }}
                />
              </Form.Group>
            </div>
            <div className="col-lg-2">
              <Form.Group className="mb-3">
                <Form.Control
                  type="date"
                  id="datePicker"
                  name="toDate"
                  onChange={(e) => setToDate(e.target.value)}
                  style={{
                    height: "40px",
                    width: "165px",
                    marginRight: "20px",
                  }}
                />
              </Form.Group>
            </div>
            <div className="col-lg-4">
              <Button
                variant="primary"
                type="submit"
                className="dateFormBtn"
                onClick={SearchItem}
                style={{ marginBottom: "20px" }}
              >
                search
              </Button>
              &nbsp;&nbsp;
              <a
                href={
                  window.API_URL +
                  "/api/excel/download?fromDate=" +
                  fromDate+
                  "&toDate=" +
                  toDate+
                  "&userName=" +
                  userName
                }
              >
                <Button
                  variant="success"
                  className="dateFormBtn"
                  style={{ marginBottom: "20px" }}
                >
                  Download Report
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr id="viewTr">
            <th>Item Name</th>
            <th>Shop Name</th>
            <th>Price</th>
            <th>Quanity</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {itemDetail &&
            itemDetail.map((item) => {
              return (
                <tr>
                  <td>{item.itemName}</td>
                  <td>{item.shopName}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <Nav.Link
                      className="btn btn-info actionBtn"
                      style={{ color: "white" }}
                      onClick={() => getItemById(item.id)}
                    >
                      Edit
                    </Nav.Link>
                  </td>
                  <td>
                    <Nav.Link
                      className="btn btn-danger actionBtn"
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                      style={{ color: "white" }}
                    >
                      Delete
                    </Nav.Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <b>
        <p>SubTotal : {calculateTotal(itemDetail)}</p>
      </b>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateForm user={Item} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default View;
