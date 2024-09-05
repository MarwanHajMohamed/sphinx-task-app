import React from "react";
import "./studentTable.css";
import students from "../../Data/students.json";

export default function StudentTable() {
  const labels = ["Pupil", "Form", "SEND"];

  return (
    <div className="students-table-container">
      <table>
        <thead>
          <tr>
            {labels.map((label) => {
              return (
                <th>
                  <div className="label-container">
                    <span>{label}</span>
                    <div className="sort">
                      <i class="fa-solid fa-sort-up"></i>
                      <i class="fa-solid fa-sort-down"></i>
                    </div>
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            return (
              <tr>
                <td className="row one">
                  <img src={student.profile_pic} alt="profile_pic" />
                  {student.forename} {student.surname}
                </td>
                <td>{student.form}</td>
                <td>
                  {student.send ? (
                    <i class="fa-solid fa-check" style={{ color: "blue" }}></i>
                  ) : (
                    <i
                      class="fa-solid fa-check"
                      style={{ color: "lightgray" }}
                    ></i>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
