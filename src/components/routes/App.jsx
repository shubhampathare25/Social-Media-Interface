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
      {/* 1. App container la d-flex kela jevheun sidebar ani right content side-by-side rahtil */}
      <div className="app-container d-flex" data-bs-theme={theme} style={{ minHeight: "100vh" }}>
        
        {/* Sidebar ekdam left la ubha rahil */}
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>

        {/* 2. Right side cha aakha area (Header + Content + Footer) */}
        <div className="right-content w-100 d-flex flex-column">
          <Header theme={theme} toggleTheme={toggleTheme}></Header>
          
          <div className="content p-3 flex-grow-1">
            <Outlet />
          </div>
          
          <Footer></Footer>
        </div>

      </div>
    </PostListProvider>
  );
}

export default App;