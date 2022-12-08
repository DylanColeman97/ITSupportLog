///import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="Name"
          required="required"
          placeholder="Enter a name..."
          name="Name"
          value={editFormData.Name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="What was the Issue?"
          name="Problem"
          value={editFormData.Issue}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="How was the Issue Resolved?"
          name="Resolution"
          value={editFormData.Resolution}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Who Resolved the Issue?"
          name="Completed By"
          value={editFormData.completedBy}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <input
          type="text"
          required="required"
          placeholder="Date issue was resolved"
          name="Date"
          value={editFormData.Date}
          onChange={handleEditFormChange}
        ></input>
      <td>
        <td>
       
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
        
        </td>
      </td>
    </tr>
  );
};

export default EditableRow