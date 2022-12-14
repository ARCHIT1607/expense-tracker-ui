import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

if(process.env.NODE_ENV ==="production"){
  console.log("inside production")
  window.API_URL = process.env.React_App_API_ENDPOINT
}else{
  window.API_URL = process.env.React_App_API_ENDPOINT
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
