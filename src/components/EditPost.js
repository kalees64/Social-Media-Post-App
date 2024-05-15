import React, { useContext, useEffect, useLayoutEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import DataContext from "../context/DataContext";

const EditPost = () => {
  const {
    handleProfile,
    editTitle,
    setEditTitle,
    editText,
    setEditText,
    handleEdit,
    handleEditPage,
  } = useContext(DataContext);
  const { id } = useParams();
  const location = useLocation();
  //   console.log(location.state);
  useEffect(() => {
    handleEditPage(id);
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className=" bg-white d-flex p-3 justify-content-between align-items-center position-sticky   ">
        <h1 className=" text-uppercase ">
          Welcome{" "}
          <span className=" text-info fst-italic ">
            {location.state.username.toUpperCase()}
          </span>
        </h1>
        <div className=" d-flex justify-content-center align-items-center gap-2 ">
          <button
            type="button"
            className=" btn btn-outline-primary rounded-circle "
            onClick={() => handleProfile(location.state._id)}
          >
            <i className="bi bi-person-circle"></i>
          </button>
        </div>
      </div>
      <div className=" text-center ">
        <form
          className=" p-3 "
          onSubmit={(e) => {
            e.preventDefault();
            handleEdit(id, location.state);
          }}
        >
          <div className="card">
            <div className=" card-header ">
              <h1>Edit Post</h1>
            </div>
            <div className=" card-body p-3 d-flex flex-column gap-3 ">
              <input
                type="text"
                placeholder="Title"
                className=" form-control "
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <textarea
                rows={3}
                cols={10}
                className=" form-control "
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              ></textarea>
              <input
                type="submit"
                value="Update"
                className="btn btn-outline-success form-control  "
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
