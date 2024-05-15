import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";

const Register = () => {
  const {
    getName,
    setGetName,
    getMail,
    setGetMail,
    getPass,
    setGetPass,
    handleRegister,
  } = useContext(DataContext);
  return (
    <div
      className=" d-flex flex-column justify-content-center align-items-center "
      style={{ width: "100%" }}
    >
      <div className=" border border-1 text-center m-5 px-5 shadow rounded">
        <h1 className=" display-2 fw-bold  text-primary text-decoration-underline ">
          Register
        </h1>
        <form
          className=" d-flex flex-column gap-1 justify-content-center align-items-center p-3"
          onSubmit={handleRegister}
        >
          <p>
            <label htmlFor="name" className=" form-label ">
              Name
            </label>
            <input
              type="text"
              placeholder="Virat"
              className=" form-control text-center "
              value={getName}
              onChange={(e) => setGetName(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="email" className=" form-label">
              Email
            </label>
            <input
              type="email"
              placeholder="abc@gmail.com"
              className=" form-control text-center "
              value={getMail}
              onChange={(e) => setGetMail(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="password" className=" form-label">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              className=" form-control text-center "
              value={getPass}
              onChange={(e) => setGetPass(e.target.value)}
            />
          </p>
          <p>
            <input
              type="submit"
              value="Register"
              className="btn btn-outline-dark "
            />
          </p>
          <p className=" d-flex justify-content-center align-items-center gap-4">
            <label htmlFor="login">Already have an account? </label>
            <Link
              className=" btn shadow btn-outline-secondary text-dark"
              to="/login"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
