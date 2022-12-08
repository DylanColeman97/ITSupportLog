import React from "react";

const ReadOnlyRow = ({ issue, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{issue.Name}</td>
      <td>{issue.Problem}</td>
      <td>{issue.Resolution}</td>
      <td>{issue.completedBy}</td>
      <td>{issue.Date}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, issue)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(issue.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;