import React from "react";

import { Form } from "react-bootstrap";
import CustomCard from "../components/CustomCard";
import CustomNav from "../components/CustomNav";
function Dashboard() {
  return (
    <>
      {/* Search using date */}
      <br></br>
      <div className="container">
        <form>
          <div className="row">
            <div className="col-lg-6">
              <Form.Control
                type="date"
                name="startDate"
                placeholder="start date"
              />
              &nbsp;&nbsp;
            </div>
            <div className="col-lg-6">
              <Form.Control type="date" name="toDate" placeholder="end date" />
            </div>
            <button type="submit" className="btn btn-info">
              Search
            </button>
          </div>
        </form>
      </div>
      {/* End of Search  */}
      {/* Cards */}
      <br></br>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <CustomCard
              cardHeader={"Items Bought"}
              cardTitle={"23"}
              cardText={"Total items bought for whole month."}
            />
          </div>
          <div className="col-lg-4">
            <CustomCard
              cardHeader={"Expense"}
              cardTitle={"Pound 45.0"}
              cardText={"Total money spent for whole month."}
            />
          </div>
          <div className="col-lg-4">
            <CustomCard
              cardHeader={"Users"}
              cardTitle={"3"}
              cardText={"No of users registered till."}
            />
          </div>
        </div>
      </div>
      {/* End of cards */}

      {/* Graph */}

      {/* End of Graph */}
    </>
  );
}

export default Dashboard;
