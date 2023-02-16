import React, { useEffect, useState } from "react";
import Table from "../Components/Table";

export default function Home() {
  const [list, setList] = useState([]);
  useEffect(() => {
    if (!localStorage.getItem("data")) {
      setList(JSON.parse(localStorage.getItem("data")));
    }
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <div className="container">
        <Table list={list} />
      </div>
    </div>
  );
}
