import React from "react";
import Nav from "react-bootstrap/Nav";
import "./AdminDashboard.css"
function AdminDashboard() {
  return (
    <>
      <div>Admin Dashboard</div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2">
            <div style={{ border: "1px solid black" }}>
              <div className="row">
                <div
                  className="container"
                  style={{
                    height: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h2>Menu</h2>
                  
                </div>
                <div style={{border:"1px solid black",width:"80%",marginLeft:"30px"}}></div>
                <div className="container" style={{height:"70vh"}}>
                <ul>
                  <Nav.Link href="/expense">Items</Nav.Link>
                  <Nav.Link href="/expense">Users Items</Nav.Link>
                </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">contents</div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
