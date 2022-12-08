import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow.js";
import EditableRow from "./components/EditableRow";


const App = () => {
  
  const [issues, setIssues] = useState(data);
  const [addFormData, setAddFormData] = useState({
    Name: "",
    Issue: "",
    Resolution: "",
    completedBy: "",
    Date: "",

  });

  const [editFormData, setEditFormData] = useState({
    Name: "",
    Issue: "",
    Resolution: "",
    completedBy: "",
    Date: "",
  });

  const [editIssueId, setEditIssueId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newIssue = {
      id: nanoid(),
      Name: addFormData.Name,
      Problem: addFormData.Problem,
      Resolution: addFormData.Resolution,
      completedBy: addFormData.completedBy,
      Date: addFormData.Date,
    };

    const newIssues = [...issues, newIssue];
    setIssues(newIssues);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedIssue = {
      id: editIssueId,
      Name: editFormData.Name,
      Problem: editFormData.Problem,
      Resolution: editFormData.Resolution,
      completedBy: editFormData.completedBy,
      Date: addFormData.Date,
    };

    const newIssues = [...issues];

    const index = issues.findIndex((issue) => issue.id === editIssueId);

    newIssues[index] = editedIssue;

    setIssues(newIssues);
    setEditIssueId(null);
  };

  const handleEditClick = (event, issue) => {
    event.preventDefault();
    setEditIssueId(issue.id);

    const formValues = {
      Name: issue.Name,
      Problem: issue.Problem,
      Resolution: issue.Resolution,
      completedBy: issue.completedBy,
      Date: issue.Date,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditIssueId(null);
  };

  const handleDeleteClick = (issueId) => {
    const newIssues = [...issues];

    const index = issues.findIndex((issue) => issue.id === issueId);

    newIssues.splice(index, 1);

    setIssues(newIssues);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Issue</th>
              <th>Resolution</th>
              <th>Completed By</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {issues.map((Issue) => (
              <Fragment>
                {editIssueId === Issue.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow 
                    issue={Issue}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Record Entry</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="Name"
          required="required"
          placeholder=" Name of Person assisted"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Problem"
          required="required"
          placeholder="Explain the Issue..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Resolution"
          required="requred"
          placeholder="How was it resolved?"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="completedBy"
          required="required"
          placeholder="Who Resolved the issue ?"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Date"
          required="required"
          placeholder="Date Issue was Resolved"
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  )
 };

  export default App;
