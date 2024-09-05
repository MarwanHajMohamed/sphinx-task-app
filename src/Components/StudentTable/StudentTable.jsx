import React from "react";
import "./studentTable.css";
import students from "../../Data/students.json";

export default function StudentTable() {
  const labels = ["Pupil", "Form", "SEND"];

  const studentsList = students.map((student) => {
    return (
      <div className="students-table">
        <div className="column">
          <img src={student.profile_pic} className="profile-pic" />
          <div className="name">
            {student.forename} {student.surname}
          </div>
        </div>
        <div className="column">
          <div className="send">
            {student.send ? (
              <i class="fa-solid fa-check" style={{ color: "blue" }}></i>
            ) : (
              <i class="fa-solid fa-check" style={{ color: "lightgray" }}></i>
            )}
          </div>
        </div>
      </div>
    );
  });

  const tableLabels = labels.map((label) => {
    return (
      <div className="label">
        <div>{label}</div>
        <div>
          <i class="fa-solid fa-sort"></i>
        </div>
      </div>
    );
  });

  return (
    <div className="students-table-container">
      <div className="wrapper">
        <div className="labels">{tableLabels}</div>
        <div className="students">{studentsList}</div>
      </div>
    </div>
  );
}
