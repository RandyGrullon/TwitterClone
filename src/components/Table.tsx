import React from "react";

const Table = (props) => {
  const { task, handleEditChange, handleDeleteChange } = props;

  return (
    <div className="col s12">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {task.map((task) => (
            <tr key={task._id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>
                <button className="btn orange" onClick={
                  () => handleEditChange(task._id)
                }>
                  <i className="material-icons">edit</i>
                </button>

                <button
                  className="btn deep-orange accent-3"
                  onClick={
                    () => handleDeleteChange(task._id)
                  }
                  style={{
                    margin: "6px",
                  }}
                >
                  <i className="material-icons">delete</i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
