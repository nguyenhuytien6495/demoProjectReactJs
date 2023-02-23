import { cleanup } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Alert from "./Alert";

export default function FormAdd() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({ name: "" });
  const [statusAlert, setStatusAlert] = useState(false);
  const [message, setMessage] = useState();

  // const location = useLocation();
  // const { id } = location.state;

  const { id } = useParams();
  const setValueEdit = () => {
    const data = JSON.parse(localStorage.getItem("data"));
    const item = data.find((item) => item.id === Number(id));
    setInputValue({ ...item, name: item.name });
    console.log(item);
    return;
  };

  useEffect(() => {
    if (id) {
      setValueEdit();
    }
  }, []);

  const handleChange = (e) => {
    setInputValue({ ...inputValue, name: e.target.value });
    console.log(inputValue.name);
  };
  const hanldeSubmit = (e) => {
    e.preventDefault();
    const arr = [];
    if (id) {
      const data = JSON.parse(localStorage.getItem("data"));
      const item = data.find((item) => item.id === Number(id));
      item.name = inputValue.name;
      localStorage.setItem("data", JSON.stringify(data));
    } else {
      if (localStorage.getItem("data")) {
        let dataLocal = JSON.parse(localStorage.getItem("data"));
        let data = {
          id: dataLocal.length + 1,
          ...inputValue,
        };
        dataLocal.push(data);
        localStorage.setItem("data", JSON.stringify(dataLocal));
      } else {
        let data = {
          id: 1,
          ...inputValue,
        };
        arr.push(data);
        localStorage.setItem("data", JSON.stringify(arr));
      }
    }
    // navigate("/");
    e.target.reset();
    setStatusAlert(true);
    setMessage("Done");
    const timeId = setTimeout(() => {
      setStatusAlert(false);
      setMessage("Done");
      navigate("/");
    }, 3000);
    return () => {
      cleanup(timeId);
    };
  };

  return (
    <div className="container">
      <form onSubmit={hanldeSubmit}>
        <div className="form-group">
          <label for="formGroupExampleInput2">Name</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Another input placeholder"
            onChange={handleChange}
            value={inputValue.name}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {id ? "Edit" : "Add"}
        </button>
      </form>
      <div>{statusAlert && <Alert message={message} />}</div>
    </div>
  );
}
