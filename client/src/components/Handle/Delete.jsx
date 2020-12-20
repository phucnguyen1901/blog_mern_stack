import React, { useState } from "react";
import PropTypes from "prop-types";

Delete.propTypes = {
  handleDeleteId: PropTypes.func,
  check: PropTypes.bool,
};
Delete.defaultProps = {
  handleDeleteId: null,
  check: false,
};
function Delete(props) {
  const [id, setId] = useState("");
  const { handleDeleteId, check } = props;

  function getDeleteId(e) {
    console.log(e.target.value);
    setId(e.target.value);
  }

  function submitDeleteId(e) {
    if (handleDeleteId) {
      handleDeleteId(id);
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
          data-toggle="modal"
          data-target="#exampleModal"
          style={{ marginTop: "20px" }}
        >
          Delete Now
        </button>
      </form>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Delete
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            {check ? (
              <div className="modal-body">
                <h3 className="text-success">Deleted successfully</h3>
              </div>
            ) : (
              <div className="modal-body">
                <h3 className="text-danger">Deleted Unsuccessfully</h3>
              </div>
            )}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Delete More
              </button>
              <a href="/#content" className="btn btn-primary">
                Back to home page
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delete;
