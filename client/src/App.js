import Header from "./components/Header/Nav";
import Footer from "./components/Footer/Footer";
import Me from "./components/Content/Me";
import Content from "./components/Content/Content";
import Create from "./components/Handle/Create";
import Delete from "./components/Handle/Delete";
import Detail from "./components/Content/Detail";
import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
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
    async function HandleArticles() {
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
    HandleArticles();
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

  const [id, setId] = useState({});
  // const [home, setHome] = useState(false);
  useEffect(() => {
    async function deleteArticle() {
      try {
        axios
          .delete(`https://blogphuc.herokuapp.com/api/create`, id)
          .then(() => console.log("O11K"));
        console.log("Da co id");
        console.log("OK");
      } catch (e) {
        console.log("Loi :" + e);
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
          {/* {home ? <Redirect exact from="/delete" to="/" /> : null} */}
          <Route path="/" exact>
            <Content data={data} />
          </Route>
          <Route path="/me">
            <Me />
          </Route>
          <Route path="/create">
            <Create handlePost={handlePost} />
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
