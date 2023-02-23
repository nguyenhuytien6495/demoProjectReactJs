import React from "react";
import { useNavigate } from "react-router-dom";
import Demo from "../Pages/Demo";

export default function Table({ list, setDelStatus }) {
  const navigate = useNavigate();

  console.log(list);
  const handleDelete = (id) => {
    const data = JSON.parse(localStorage.getItem("data"));
    let index = data.findIndex((item) => item.id === id);
    data.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(data));
    setDelStatus(index);
  };
  return (
    <div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => {
            return (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                  <span> </span>
                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={() => navigate(`add/${item.id}`)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Demo />
    </div>
  );
}
