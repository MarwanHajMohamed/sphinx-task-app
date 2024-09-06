import React from "react";
import { useParams } from "react-router-dom";
import studentsList from "../../Data/students.json";
import "./profilePage.css";

export default function ProfilePage() {
  const { studentId } = useParams();

  console.log(studentId);

  const student = studentsList.find(
    (student) => student.id === parseInt(studentId)
  );

  return (
    <div className="profile-container">
      <div className="profile">
        <div className="left">
          <img src={student.profile_pic} alt="profile-pic" />
          <div className="name">
            {student.forename} {student.surname}
          </div>
        </div>
        <div className="right">
          <div className="form">
            Form: <span>{student.form}</span>
          </div>
        </div>
      </div>
      <div className="description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem,
        commodi temporibus earum animi voluptates, dicta aliquid est inventore
        iure vel dolorem quod quibusdam repudiandae sunt. Itaque,
        exercitationem! Possimus, eos architecto.
      </div>
      <div className="report-card">
        <div className="heading">Report Card</div>
        {student.grades.map((grade) => {
          return (
            <div className="grades">
              <div>
                English: <span>{grade.english}</span>
              </div>
              <div>
                Maths: <span>{grade.maths}</span>
              </div>
              <div>
                Science:
                <span>{grade.science}</span>
              </div>
              <div>
                Computer Science: <span>{grade.computer_science}</span>
              </div>
              <div>
                History: <span>{grade.history}</span>
              </div>
              <div>
                Religious Studies: <span>{grade.religious_studies}</span>
              </div>
              <div>
                Spanish: <span>{grade.spanish}</span>
              </div>
              <div>
                Physical Education: <span>{grade.physical_education}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
