import React, { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

Delete.propTypes = {
  handleDeleteId: PropTypes.func,
};
Delete.defaultProps = {
  handleDeleteId: null,
};
function Delete(props) {
  let history = useHistory();
  const [id, setId] = useState("Deleted failed");
  const { handleDeleteId } = props;
  function getDeleteId(e) {
    console.log(e.target.value);
    setId(e.target.value);
  }

  function submitDeleteId(e) {
    if (handleDeleteId) {
      handleDeleteId(id);
      history.push("/");
      e.preventDefault();
    }
  }

  return (
    <div id="delete" style={{ margin: "20px auto", width: "60%" }}>
      <form onSubmit={submitDeleteId}>
        <label htmlFor="">ID: </label>
        <input type="text" className="form-control" onChange={getDeleteId} />
        <button
          type="submit"
          className="btn btn-danger"
          style={{ marginTop: "20px" }}
        >
          Delete
        </button>
      </form>
    </div>
  );
}

export default Delete;
