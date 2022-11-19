import React, { useState } from "react";
import Axios from "axios";
function SearchItem({item}) {
    
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [Item, setItem] = useState(item);
  const searchItem = async (e) => {
    e.preventDefault();
    const res = await Axios(
      "https://tenant-system-api-production.up.railway.app/filterItem?fromDate=" +
        fromDate +
        "&toDate=" +
        toDate
    );
    console.log(res.data);
    setItem(res.data);
  };
  return (
    <>
      
    </>
  );
}

export default SearchItem;
