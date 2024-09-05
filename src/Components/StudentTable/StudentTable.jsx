import React, { useState } from "react";
import "./studentTable.css";
import studentsData from "../../Data/students.json";
import SearchBar from "../SearchBar/SearchBar";

export default function StudentTable() {
  const labels = ["Pupil", "Form", "SEND"];
  const [students, setStudents] = useState(studentsData);
  const [sort, setSort] = useState({ key: null, direction: null });

  const sortData = (key) => {
    let direction = "ascending";

    // Checks if direction is already ascending
    if (sort.direction === "ascending") {
      direction = "descending";
    }

    const sortedStudents = students.sort((a, b) => {
      let nameA = (a.forename + " " + a.surname).toLowerCase();
      let nameB = (b.forename + " " + b.surname).toLowerCase();

      if (key === "Pupil") {
        if (nameA < nameB) {
          return direction === "ascending" ? -1 : 1;
        }

        if (nameA > nameB) {
          return direction === "ascending" ? 1 : -1;
        }

        return 0;
      }

      if (key === "Form") {
        return direction === "ascending"
          ? a.form.localeCompare(b.form)
          : b.form.localeCompare(a.form);
      }
      if (key === "SEND") {
        return direction === "ascending" ? a.send - b.send : b.send - a.send;
      }
      return 0;
    });

    setSort({ key, direction });
    setStudents(sortedStudents);
  };

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();

    // Filter students based on name or form
    const filteredStudents = studentsData.filter((student) => {
      const fullName = (student.forename + " " + student.surname).toLowerCase();
      const form = student.form.toLowerCase();

      // Match the search term with the student's full name or form
      return fullName.startsWith(value) || form.includes(value);
    });

    setStudents(filteredStudents);
  };

  return (
    <div className="students-table-container">
      <SearchBar handleSearch={handleSearch} />
      <table>
        <thead>
          <tr>
            {labels.map((label) => {
              return (
                <th key={label} onClick={() => sortData(label)}>
                  <div className="label-container">
                    <span>{label}</span>
                    <div className="sort">
                      <i
                        class={`fa-solid fa-sort-up ${
                          sort.key === label && sort.direction === "ascending"
                            ? "active-icon"
                            : ""
                        }`}
                        style={{
                          color:
                            sort.key === label && sort.direction === "ascending"
                              ? "blue"
                              : "rgb(199, 199, 199)",
                        }}
                      ></i>
                      <i
                        class={`fa-solid fa-sort-down ${
                          sort.key === label && sort.direction === "descending"
                            ? "active-icon"
                            : ""
                        }`}
                        style={{
                          color:
                            sort.key === label &&
                            sort.direction === "descending"
                              ? "blue"
                              : "rgb(199, 199, 199)",
                        }}
                      ></i>
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
                      style={{ color: "rgb(232, 232, 232)" }}
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
