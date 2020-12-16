import React from "react";
import "./Content.scss";
import PropTypes from "prop-types";
import moment from "moment";

Content.propTypes = {
  data: PropTypes.array,
};

Content.defaultProps = {
  data: [],
};

function Content(props) {
  const { data } = props;
  return (
    <div id="content">
      <div id="wrap-full-content">
        {data.map((blog) => (
          <div className="wrap-content" key={blog._id}>
            <a href={`article/${blog._id}#detail`} className="link-content">
              <img id="image-content" src={`/images/${blog.image}`} alt="" />
              <div className="right-content">
                <h3>{blog.title}</h3>
                <h5>Date: {moment(blog.createdAt).format("LLLL")}</h5>
                <h6>Author: {blog.author}</h6>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
