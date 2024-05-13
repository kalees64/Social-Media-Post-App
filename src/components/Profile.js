import React from "react";
import { useLocation } from "react-router-dom";
import person from "../assets/person-circle.svg";

const Profile = ({ handleHome, handleMyPosts }) => {
  const location = useLocation();
  return (
    <div
      style={{ width: "100%", height: "100%" }}
      className="  d-flex justify-content-center align-items-center  "
    >
      <div className="  bg-white text-center ">
        <h1 className=" text-decoration-underline">PROFILE</h1>
        <div className=" p-3 ">
          <img
            // src="https://dummyimage.com/200x200/000/fff"
            src={person}
            alt="profile"
            width={200}
            height={200}
            className=" rounded-pill "
          />
          <div className=" p-3">
            <h2>Name : {location.state.username}</h2>
            <h2>Email : {location.state.email}</h2>
            <div>
              <button
                className="btn btn-outline-info"
                onClick={() => handleMyPosts(location.state)}
              >
                My Posts
              </button>
            </div>
          </div>
        </div>
        <span
          onClick={() => handleHome(location.state)}
          className=" text-primary text-decoration-none fw-bold"
          style={{ cursor: "pointer" }}
        >
          HOME
        </span>
      </div>
    </div>
  );
};

export default Profile;
