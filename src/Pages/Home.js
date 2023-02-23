import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../Components/Table";

export default function Home() {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const [delStatus, setDelStatus] = useState("");

  useEffect(() => {
    if (localStorage.getItem("data")) {
      setList(JSON.parse(localStorage.getItem("data")));
    }
  }, [delStatus]);

  return (
    <div>
      <h1>Home</h1>
      <div className="container">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => navigate("add")}
        >
          Add
        </button>
        <Table list={list} setDelStatus={setDelStatus} />
      </div>
    </div>
  );
}
