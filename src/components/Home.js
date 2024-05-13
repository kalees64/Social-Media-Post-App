import React from "react";
import { useLocation } from "react-router-dom";

const Home = ({ handleProfile, handleCreatePost, posts }) => {
  const location = useLocation();

  return (
    <div style={{ width: "100%", height: "100%" }} className="  ">
      <div className=" bg-white d-flex p-3 justify-content-between align-items-center position-sticky   ">
        <h1 className=" text-uppercase ">
          Welcome{" "}
          <span className=" text-primary fst-italic ">
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
          <button
            type="button"
            className=" btn btn-outline-success "
            onClick={() => handleCreatePost(location.state)}
          >
            Create Post <i className="bi bi-plus-square"></i>
          </button>
        </div>
      </div>
      <div>
        {/* <div className="card m-2">
          <div className=" card-header d-flex justify-content-between ">
            <p className=" card-title fw-bold ">Name</p>
            <h5>Title</h5>
            <p>Date</p>
          </div>
          <div className=" card-body ">
            <p>Message</p>
            <div>
              <button className=" btn">
                <i className="bi bi-heart"></i>
              </button>
              <button className=" btn">
                <i className="bi bi-chat-text"></i>
              </button>
              <button className=" btn">
                <i className="bi bi-share"></i>
              </button>
            </div>
          </div>
        </div> */}
        {posts.length > 0 ? (
          posts.map((post) => {
            return (
              <div className="card m-2" key={post._id}>
                <div className=" card-header d-flex justify-content-between flex-wrap  ">
                  <p className=" card-title fw-bold col-3">{post.userName}</p>
                  <div className="col-7">
                    <h5>{post.postTitle}</h5>
                    <p>{post.createdAt.slice(0, 10)}</p>
                  </div>
                </div>
                <div className=" card-body ">
                  <p>{post.postMsg}</p>
                  <div>
                    <button className=" btn">
                      <i className="bi bi-heart"></i>
                    </button>
                    <button className=" btn">
                      <i className="bi bi-chat-text"></i>
                    </button>
                    <button className=" btn">
                      <i className="bi bi-share"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className=" text-center ">
            <h1>No Posts</h1>
            <p>Create a Post....</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
