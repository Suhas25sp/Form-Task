import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const nav = useNavigate();

  const [data, setData] = useState({
    name: "",
    skill: "",
    post: "",
    mobile: "",
    email: "",
  });

  var res = useParams();
  console.log(res.id);

  const FetchData = async () => {
    const result = await axios.get(`http://localhost:3000/Student/${res.id}`);
    console.log(result.data);

    // set data
    setData({
      name: result.data.name,
      skill: result.data.skill,
      post: result.data.post,
      mobile: result.data.mobile,
      email: result.data.email,
    });
  };

  // Access  data of that specific id from json server API
  useEffect(() => {
    FetchData();
  }, [res]);

  const dataHandler = (e) => {
    // alert()
    setData({ ...data, [e.target.name]: e.target.value });
  };
  console.log(data);

  const UpdateForm = async (e) => {
    e.preventDefault();
    console.log(data);
    alert("Congrats Sucessfully Updated Form......😉");

    await axios.put(`http://localhost:3000/Student/${res.id}`, data);

    nav("/userlist");
  };

  return (
    <>
      <form action="" onSubmit={(e) => UpdateForm(e)}>
        <div className="container border p-4 shadow-lg ">
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
                name="post"
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

export default EditUser;
