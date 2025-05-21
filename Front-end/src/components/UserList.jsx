import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const UserForm = () => {
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    try {
      const result = await axios.get("http://localhost:3000/Student");
      setData(result.data);

      console.log("Successfully Fetched Data");

      setData(result.data);
    } catch (err) {
      console.log(err);
      console.log("Fail to fetch data");
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  // ******* Delete Emp Data **********
  const deleteUser = async (id) => {
    // alert("Delete Emp" + id);

    try {
      // filter
      const result = data.filter((val) => val.id !== id);
      setData(result);

      await axios.delete(`http://localhost:3000/Student/${id}`);
    } catch (err) {
      console.log(err);
      return;
    }
  };

  return (
    <>
      <h2 className="text-center bg-secondary text-white fw-bold p-4 mb-4">
        User Data
      </h2>

      <div className="container">
        <div className="row">
          {data.map((val, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold text-primary">
                    {val.name}
                  </h5>
                  <p className="card-text">
                    <span className="fw-bold text-secondary">Skill :</span>{" "}
                    {val.skill}
                  </p>
                  <p className="card-text">
                    <span className="fw-bold text-secondary">Post :</span>{" "}
                    {val.post}
                  </p>
                  <p className="card-text">
                    <span className="fw-bold text-secondary">Email : </span>{" "}
                    {val.email}
                  </p>
                  <p className="card-text">
                    <span className="fw-bold text-secondary">Mobile :</span>{" "}
                    {val.mobile}
                  </p>
                  <div className="d-flex justify-content-around mt-4 ">
                    <button
                      className="btn btn-danger fw-bold"
                      onClick={() => {
                        if (window.confirm("Are you sure ?")) {
                          deleteUser(val.id);
                        }
                      }}
                    >
                      <i className="fas fa-trash-alt"></i> Delete
                    </button>
                    <NavLink to={`/EditUser/${val.id}`}>
                      <button className="btn btn-primary px-4 fw-bold">
                        <i className="fas fa-edit "></i>
                        Edit
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserForm;
