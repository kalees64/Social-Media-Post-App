import { createContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const API_URL = "https://social-media-post-app.onrender.com";
  const [getName, setGetName] = useState("");
  const [getMail, setGetMail] = useState("");
  const [getPass, setGetPass] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [posts, setPosts] = useState([]);
  const [myPosts, setMyPosts] = useState([]);
  const [editText, setEditText] = useState("");
  const [editTitle, setEditTitle] = useState("");
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
      alert("Post Created Successfully..!");
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

  const handleEdit = async (id, data) => {
    const editPost = {
      getTitle: editTitle,
      getMsg: editText,
    };
    try {
      const res = await axios.patch(
        `${API_URL}/postapp/mypost/${id}`,
        editPost
      );
      const updatedMyPost = await axios.get(
        `${API_URL}/postapp/mypost/${data._id}`
      );
      setMyPosts(updatedMyPost.data);
      alert("Post Updated Success");
    } catch (error) {
      alert(error.message);
    }
    navigate("/home/profile/myposts", { state: data });
  };

  const handleEditPage = async (id) => {
    try {
      const res = await axios.get(`${API_URL}/postapp/mypost/editpost/${id}`);
      setEditTitle(res.data.postTitle);
      setEditText(res.data.postMsg);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    handlePosts();
    handleMyPostData();
  }, []);
  return (
    <DataContext.Provider
      value={{
        title,
        setTitle,
        text,
        setText,
        handleCreate,
        editTitle,
        setEditTitle,
        editText,
        setEditText,
        handleEdit,
        handleEditPage,
        handleCreatePost,
        posts,
        getMail,
        setGetMail,
        getPass,
        setGetPass,
        handleLogin,
        handleHome,
        handleMyPosts,
        getName,
        setGetName,
        handleRegister,
        handleProfile,
        myPosts,
        handleDelete,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
