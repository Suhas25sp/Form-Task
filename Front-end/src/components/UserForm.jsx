import React, { useState } from "react";
import axios from "axios";

const UserForm = () => {
  const [data, setData] = useState({
    name: "",
    skill: "",
    post: "",
    mobile: "",
    email: "",
  });

  const dataHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const saveForm = async (e) => {
    e.preventDefault();
    alert("User Registration Successfully..😊");
    console.log(data);

    await axios.post("http://localhost:3000/Student", data);
  };
  return (
    <>
      <form action="" onSubmit={(e) => saveForm(e)}>
        <div className="container border p-4 shadow-lg">
          <div className="row fw-bold">
            <div className="col-md-12">
              <label htmlFor="">Enter Your Name</label>
              <input
                type="text"
                name="name"
                id=""
                value={data.name}
                onChange={(e) => dataHandler(e)}
                className="form-control"
                placeholder="enter username"
              />
            </div>

            <div className="col-md-12 my-3">
              <label htmlFor="">Enter Your Skill</label>
              <input
                type="text"
                name="skill"
                id=""
                value={data.skill}
                onChange={(e) => dataHandler(e)}
                className="form-control"
              />
            </div>

            <div className="col-md-12 my-3">
              <label htmlFor="">Choose Your Post</label>
              <select
                name="skill"
                id=""
                value={data.post}
                onChange={(e) => dataHandler(e)}
                className="form-control"
              >
                <option value="none">select</option>
                <option value="Admin">Admin</option>
                <option value="Manegar">Manegar</option>
                <option value="Developer">Developer</option>
              </select>
            </div>

            <div className="col-md-12 my-3">
              <label htmlFor="">Enter Mobile</label>
              <input
                type="tel"
                name="mobile"
                id=""
                value={data.mobile}
                onChange={(e) => dataHandler(e)}
                className="form-control"
              />
            </div>

            <div className="col-md-12 my-3">
              <label htmlFor="">Enter Your Email-id</label>
              <input
                type="email"
                name="email"
                id=""
                value={data.email}
                onChange={(e) => dataHandler(e)}
                className="form-control"
                placeholder="eg. john@gmail.com"
              />
            </div>

            <div className="col-md-12 mt-3 text-center">
              <button className="btn btn-sm btn-dark px-4 fw-bold shadow-lg">
                Save User
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default UserForm;
