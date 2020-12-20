import React, { useState } from "react";
import PropTypes from "prop-types";

Delete.propTypes = {
  handleDeleteId: PropTypes.func,
};
Delete.defaultProps = {
  handleDeleteId: null,
};
function Delete(props) {
  const [id, setId] = useState({});
  const { handleDeleteId } = props;

  function getDeleteId(e) {
    console.log(e.target.value);
    setId({ id: e.target.value });
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
          // type="button"
          className="btn btn-primary"
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
              <h5 className="modal-title" id="exampleModalLabel"></h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Đã xóa nhưng không biết có lỗi hay không
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <a href="/#content" className="btn btn-primary">
                Quay về trang chủ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delete;
