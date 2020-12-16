import React, { useState } from "react";
import "./Blog.scss";
import PropTypes from "prop-types";

Blog.propTypes = {
  handlePost: PropTypes.func,
};

Blog.defaultProps = {
  handlePost: null,
};

function Blog(props) {
  const { handlePost } = props;
  const [post, setPost] = useState({});
  let urlImage = [
    "bootstrap4",
    "expressjs",
    "mongodb",
    "mysql",
    "nodejs",
    "reactjs",
    "socket.io",
  ];
  function handleTitle(e) {
    setPost({ ...post, title: e.target.value });
  }
  function handleAuthor(e) {
    setPost({ ...post, author: e.target.value });
  }
  function handleContent(e) {
    setPost({ ...post, content: e.target.value });
  }
  function handleImage(e) {
    setPost({ ...post, image: `${e.target.value}.png` });
  }

  function handleSubmit() {
    console.log("da submit");
    if (handlePost) {
      handlePost(post);
    }
  }
  return (
    <div id="create">
      <h1>Post Article</h1>
      <form method="post" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            className="form-control"
            name="title"
            onChange={handleTitle}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Author">Author:</label>
          <input
            type="text"
            className="form-control"
            name="author"
            onChange={handleAuthor}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Content:</label>
          <textarea
            type="text"
            className="form-control"
            name="content"
            rows="10"
            onChange={handleContent}
          />
        </div>
        <div className="form-group">
          <label htmlFor="file">Select Title Image:</label>
          <select name="image" className="form-control" onChange={handleImage}>
            {urlImage.map((image, index) => (
              <option key={index}>{image}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-success">
          POST
        </button>
      </form>
    </div>
  );
}

export default Blog;
