import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import CreatePost from "../CreatePost";
import PostList from "../PostList";
import PostListProvider from "../../store/post-list-store";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
