import React, { useState } from "react";
import "./BulkUpload.css";
function BulkUpload() {
  const [file, setFile] = useState({ selectedFile: null });
  const userName = localStorage.getItem("username");

  const BulkUpload = () => {
    console.log("file " + file);
    const formData = new FormData();
    formData.append("file", file.selectedFile, file.selectedFile.name);
    fetch("http://localhost:8080/api/excel/upload?userName=" + userName, {
      method: "post",
      body: formData,
    }).then((res) => {
      if (res.ok) {
        console.log(res.data);
        alert("File uploaded successfully.");
      }
    });
  };

  const DownloadTemplate = () => {
    fetch("http://localhost:8080/api/excel/downloadTemplate", {
      method: "get",
    });
  };

  return (
    <>
      <div>
        <br></br>
        <h2>Bulk Upload</h2>
        <p>This functionality helps to add multiple items in an excel</p>
        <p>Please click on the link to download the template</p>
        <a href="http://localhost:8080/api/excel/download">Download Template</a>
        <form>
          <br></br>
          <br></br>
          <input
            type="file"
            onChange={(e) => {
              setFile({ selectedFile: e.target.files[0] });
            }}
          />
          <button
            type="button"
            onClick={BulkUpload}
            className="btn btn-info"
            id="btn-bulkbtn"
          >
            Bulk Upload
          </button>
        </form>
      </div>
    </>
  );
}

export default BulkUpload;
