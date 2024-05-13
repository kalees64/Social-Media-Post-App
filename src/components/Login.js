import React from "react";
import { Link } from "react-router-dom";

const Login = ({ getMail, setGetMail, getPass, setGetPass, handleLogin }) => {
  return (
    <div
      className=" d-flex flex-column justify-content-center align-items-center "
      style={{ width: "100%" }}
    >
      <div className=" border border-1 text-center m-5 px-5 shadow rounded ">
        <h1 className=" display-2 fw-bold  text-primary text-decoration-underline ">
          Login
        </h1>
        <form
          className=" d-flex flex-column gap-1 justify-content-center align-items-center p-3"
          onSubmit={handleLogin}
        >
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
              value="Login"
              className="btn btn-outline-dark "
            />
          </p>
          <p className=" d-flex justify-content-center align-items-center gap-4">
            <label htmlFor="login">Create an account? </label>
            <Link
              className=" btn shadow btn-outline-secondary text-dark"
              to="/register"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
