import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Missing from "./components/Missing";
import { useEffect, useState } from "react";
import axios from "axios";
import Profile from "./components/Profile";
import CreatePost from "./components/CreatePost";
import UserPosts from "./components/UserPosts";

function App() {
  const API_URL = "http://localhost:5000";
  const [getName, setGetName] = useState("");
  const [getMail, setGetMail] = useState("");
  const [getPass, setGetPass] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [posts, setPosts] = useState([]);
  const [myPosts, setMyPosts] = useState([]);
  const navigate = useNavigate();

  // console.log(myPosts);

  const handleRegister = async (e) => {
    e.preventDefault();
    let data = {
      username: getName,
      email: getMail,
      password: getPass,
    };
    // console.log("Register");
    try {
      const res = await axios.post(`${API_URL}/auth/register`, data);
      if (res.data === "User already Found") {
        alert("User Already Found!... Please Login...");
        navigate("/login");
      } else {
        alert("Registration Successful");
        navigate("/home", { state: res.data });
      }
    } catch (error) {
      alert(error.message);
    }
    setGetName("");
    setGetMail("");
    setGetPass("");
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    let data = {
      email: getMail,
      password: getPass,
    };
    try {
      const res = await axios.post(`${API_URL}/auth/login`, data);
      // console.log(res.data);
      if (res.data === "User Not Found") {
        alert("User Not Found!... Please Register...");
        navigate("/register");
      } else {
        alert("Login Successful");
        navigate("/home", { state: res.data });
      }
    } catch (error) {
      alert(error.message);
    }
    setGetMail("");
    setGetPass("");
  };

  const handleProfile = async (id) => {
    // console.log(id);
    try {
      const res = await axios.get(`${API_URL}/auth/user/${id}`);
      // console.log(res.data);
      navigate("/home/profile", { state: res.data });
    } catch (error) {
      alert(error);
    }
  };
  const handleHome = (data) => {
    navigate("/home", { state: data });
  };

  const handleCreatePost = (data) => {
    navigate("/home/createpost", { state: data });
  };

  const handleCreate = async (data) => {
    const newPost = {
      userId: data._id,
      userName: data.username,
      postTitle: title,
      postMsg: text,
      likes: 0,
    };
    // console.log(newPost);
    try {
      const res = await axios.post(`${API_URL}/postapp/addpost`, newPost);
      const allPosts = [...posts, res.data];
      const resData = await axios.get(`${API_URL}/postapp/allpost`);
      setPosts(resData.data);
    } catch (error) {
      alert(error.message);
    }
    setTitle("");
    setText("");
    navigate("/home", { state: data });
  };

  const handlePosts = async () => {
    try {
      const res = await axios.get(`${API_URL}/postapp/allpost`);
      setPosts(res.data);
      // console.log(res.data);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleMyPosts = (data) => {
    handleMyPostData(data._id);
    navigate("/home/profile/myposts", { state: data });
  };

  const handleMyPostData = async (id) => {
    try {
      const res = await axios.get(`${API_URL}/postapp/mypost/${id}`);
      setMyPosts(res.data);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${API_URL}/postapp/mypost/${id}`);
      const remainPosts = myPosts.filter((post) => post._id !== res.data._id);
      setMyPosts(remainPosts);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    handlePosts();
  }, []);

  return (
    <div
      className=" container-fluid d-flex flex-column"
      style={{ width: "100vw", height: "100vh" }}
    >
      <header className=" bg-primary ">
        <nav className="container px-5">
          <h1 className=" navbar-brand display-1 fw-bolder text-white ">
            VK64
          </h1>
        </nav>
      </header>
      <section className=" container flex-grow-1 justify-content-center align-items-center ">
        <Routes>
          <Route
            path="/"
            element={
              <Login
                getMail={getMail}
                setGetMail={setGetMail}
                getPass={getPass}
                setGetPass={setGetPass}
                handleLogin={handleLogin}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Register
                getName={getName}
                setGetName={setGetName}
                getMail={getMail}
                setGetMail={setGetMail}
                getPass={getPass}
                setGetPass={setGetPass}
                handleRegister={handleRegister}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                getMail={getMail}
                setGetMail={setGetMail}
                getPass={getPass}
                setGetPass={setGetPass}
                handleLogin={handleLogin}
              />
            }
          />
          <Route
            path="/home"
            element={
              <Home
                handleProfile={handleProfile}
                handleCreatePost={handleCreatePost}
                posts={posts}
              />
            }
          />
          <Route
            path="/home/profile"
            element={
              <Profile handleHome={handleHome} handleMyPosts={handleMyPosts} />
            }
          />
          <Route
            path="/home/createpost"
            element={
              <CreatePost
                handleProfile={handleProfile}
                title={title}
                setTitle={setTitle}
                text={text}
                setText={setText}
                handleCreate={handleCreate}
              />
            }
          />
          <Route
            path="/home/profile/myposts"
            element={
              <UserPosts
                handleProfile={handleProfile}
                handleCreatePost={handleCreatePost}
                posts={myPosts}
                handleHome={handleHome}
                handleDelete={handleDelete}
              />
            }
          />
          <Route path="*" element={<Missing />} />
        </Routes>
      </section>
      <footer className=" text-center bg-primary fw-bolder text-white py-2 ">
        copyright &copy; 2024
      </footer>
    </div>
  );
}

export default App;
