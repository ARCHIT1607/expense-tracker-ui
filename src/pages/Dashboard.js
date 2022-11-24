import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Form } from "react-bootstrap";
import CustomCard from "../components/CustomCard";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [data, setData] = useState([]);
  const userName = localStorage.getItem("username");

  const SearchItem = async (e) => {
    e.preventDefault();
    if (fromDate && toDate) {
      const res = await Axios(
        window.API_URL +
          "/filterDashboard?fromDate=" +
          fromDate +
          "&toDate=" +
          toDate +
          "&userName=" +
          userName
      );
      console.log("inside search from dashboard");
      console.log(res.data);
      setData(res.data);
    } else {
      console.log("inside non search");
      const res = await Axios(
        window.API_URL + "/dashboard?userName=" + userName
      );
      setData(res.data);
    }
  };

  const loadDashboard = async () => {
    console.log("inside non search");
    const res = await Axios(window.API_URL + "/dashboard?userName=" + userName);
    setData(res.data);
  };

  useEffect(() => {
    if(userName==null){
      navigate('/login')
    }
    loadDashboard();
  }, []);

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
                id="dateDashboard"
                onChange={(e) => {
                  setFromDate(e.target.value);
                }}
              />
              &nbsp;&nbsp;
            </div>
            <div className="col-lg-6">
              <Form.Control
                type="date"
                name="toDate"
                id="dateDashboard"
                placeholder="end date"
                onChange={(e) => {
                  setToDate(e.target.value);
                }}
              />
            </div>
            &nbsp;&nbsp;
            <button type="submit" className="btn btn-info" onClick={SearchItem}>
              Search
            </button>
          </div>
        </form>
      </div>
      {/* End of Search  */}
      {/* Cards */}
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <CustomCard
              cardHeader={"Items Bought"}
              cardTitle={data["itemcount"]}
              cardText={"Total items bought."}
            />
            &nbsp;&nbsp;
          </div>
          <div className="col-lg-6">
            <CustomCard
              cardHeader={"Expense"}
              cardTitle={data["expense"] == null ? "0" : "£" + data["expense"]}
              cardText={"Total money spent."}
            />
            &nbsp;&nbsp;
          </div>
          {/* <div className="col-lg-4">
            <CustomCard
              cardHeader={"Users"}
              cardTitle={"3"}
              cardText={"No of users registered till."}
            />
            &nbsp;&nbsp;
          </div> */}
        </div>
      </div>
      {/* End of cards */}

      {/* Graph */}

      {/* End of Graph */}
    </>
  );
}

export default Dashboard;
