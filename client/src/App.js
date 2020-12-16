import Header from "./components/Header/Nav";
import Footer from "./components/Footer/Footer";
import Me from "./components/Content/Me";
import Content from "./components/Content/Content";
import Blog from "./components/Create/Blog";
import Delete from "./components/Create/Delete";
import Detail from "./components/Content/Detail";
import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
function App() {
  const pre = useRef(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchDataHome() {
      try {
        const response = await axios.get(
          "https://blogphuc.herokuapp.com/api/get"
        );
        setData(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchDataHome();
  }, []);

  const [post, setPost] = useState({});
  useEffect(() => {
    async function createArticles() {
      if (Object.entries(post).length !== 0) {
        try {
          await axios.post("https://blogphuc.herokuapp.com/api/create", post);
          console.log("Created successfully");
          setPost({});
        } catch (e) {
          console.log(e);
        }
      }
    }
    createArticles();
  }, [post]);

  function handlePost(post) {
    setPost(post);
  }

  const [navbar, setNavbar] = useState(false);
  function changeNavbar() {
    let current = window.pageYOffset;
    if (pre.current > current) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
    pre.current = current;
  }
  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);
    return () => {
      window.removeEventListener("scroll", changeNavbar);
    };
  }, []);

  const [id, setId] = useState("");
  useEffect(() => {
    async function deleteArticle() {
      if (id !== "") {
        console.log("Da co id");
        try {
          await axios.delete(`https://blogphuc.herokuapp.com/api/${id}`);
          console.log("Deleted successfully");
        } catch (e) {
          console.log(e);
        }
      }
    }
    deleteArticle();
  }, [id]);

  function handleDeleteId(id) {
    setId(id);
  }

  return (
    <Router>
      <div>
        <Header checkNavbar={navbar} />
        <Switch>
          <Route path="/" exact>
            <Content data={data} />
          </Route>
          <Route path="/me">
            <Me />
          </Route>
          <Route path="/create">
            <Blog handlePost={handlePost} />
          </Route>
          <Route path="/article/:id">
            <Detail />
          </Route>
          <Route path="/delete">
            <Delete handleDeleteId={handleDeleteId} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
