import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import CreatePost from "../CreatePost";
import PostList from "../PostList";
import PostListProvider from "../../store/post-list-store";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currTheme) => (currTheme === "light" ? "dark" : "light"));
  };

  return (
    <PostListProvider>
      {/* 1. Ithe data-bs-theme={theme} add kela */}
      <div className="app-container" data-bs-theme={theme}>
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          {/* 2. Ithe Header la props pass kele */}
          <Header theme={theme} toggleTheme={toggleTheme}></Header>
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;