import React, { useState } from "react";
import PropTypes from "prop-types";

Delete.propTypes = {
  handleDeleteId: PropTypes.func,
};
Delete.defaultProps = {
  handleDeleteId: null,
};
function Delete(props) {
  const [id, setId] = useState("Deleted failed");
  const { handleDeleteId } = props;
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
          type="button"
          className="btn btn-danger"
          data-toggle="modal"
          data-target="#myModal"
          style={{ marginTop: "20px" }}
        >
          Delete Now
        </button>
        {/* The Modal */}
        <div className="modal fade" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">Delete?</h4>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              {/* Modal body */}
              <div className="modal-body">Confirm Deletion?</div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button type="submit" className="btn btn-danger">
                  Delete
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Delete;
