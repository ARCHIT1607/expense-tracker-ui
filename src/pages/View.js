import React from "react";
import Table from "react-bootstrap/Table";
import Nav from "react-bootstrap/Nav";

function View() {
  const items = [
    { itemName: "Milk", shopName: "Tesco", price: "2.0", quantity: "2" },
    { itemName: "Cookie", shopName: "Lidl", price: "2.0", quantity: "2" },
  ];

  const handleEdit = () => {};

  const handleDelete = () => {};
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Shop Name</th>
            <th>Price</th>
            <th>Quanity</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {items &&
            items.map((item) => {
              return (
                <tr>
                  <td>{item.itemName}</td>
                  <td>{item.shopName}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <Nav.Link
                      className="btn btn-info"
                      onClick={handleEdit()}
                    >
                      Edit
                    </Nav.Link>
                  </td>
                  <td>
                    <Nav.Link
                      className="btn btn-danger"
                      onClick={handleDelete()}
                    >
                      Delete
                    </Nav.Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
}

export default View;
