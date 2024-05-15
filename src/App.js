import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Missing from "./components/Missing";
import Profile from "./components/Profile";
import CreatePost from "./components/CreatePost";
import UserPosts from "./components/UserPosts";
import EditPost from "./components/EditPost";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <DataProvider>
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
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/profile" element={<Profile />} />
            <Route path="/home/createpost" element={<CreatePost />} />
            <Route path="/home/profile/myposts" element={<UserPosts />} />
            <Route path="/home/profile/myposts/:id" element={<EditPost />} />
            <Route path="*" element={<Missing />} />
          </Routes>
        </section>
        <footer className=" text-center bg-primary fw-bolder text-white py-2 ">
          copyright &copy; 2024
        </footer>
      </div>
    </DataProvider>
  );
}

export default App;
