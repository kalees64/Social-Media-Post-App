import React from "react";
import { useLocation } from "react-router-dom";

const CreatePost = ({
  handleProfile,
  title,
  setTitle,
  text,
  setText,
  handleCreate,
}) => {
  const location = useLocation();
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
            handleCreate(location.state);
          }}
        >
          <div className="card">
            <div className=" card-header ">
              <h1>Create Post</h1>
            </div>
            <div className=" card-body p-3 d-flex flex-column gap-3 ">
              <input
                type="text"
                placeholder="Title"
                className=" form-control "
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                rows={3}
                cols={10}
                className=" form-control "
                placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam culpa itaque, illum, et officia rerum nobis, ipsam provident unde illo laudantium quam neque necessitatibus praesentium dignissimos! Ipsum qui, quaerat cumque pariatur earum autem iusto deleniti minus facere doloribus odit magni sit quasi voluptas quam veniam?"
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
              <input
                type="submit"
                value="Create"
                className="btn btn-outline-success form-control  "
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
