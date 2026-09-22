import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
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
      
      <div className="app-container d-flex" data-bs-theme={theme} style={{ minHeight: "100vh" }}>
        
        
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>

        
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