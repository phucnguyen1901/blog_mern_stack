import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Detail.scss";
function Detail() {
  const [content, setContent] = useState({});
  let { id } = useParams();
  useEffect(() => {
    async function getContent() {
      try {
        const response = await axios.get(
          `https://blogphuc.herokuapp.com/api/${id}`
        );
        setContent(response.data[0]);
      } catch (e) {
        console.log("ERROR" + e);
      }
    }
    getContent();
  }, [id]);

  return (
    <div id="detail">
      <h1>{content.title}</h1>
      {/* {Object.entries(content).length > 0
        ? content.content.split(".").map((para) => <li>{para}</li>)
        : null} */}
      <p>{content.content}</p>
    </div>
  );
}

export default Detail;
