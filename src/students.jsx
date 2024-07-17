import React from "react";
import Student from "./Student";

const Students = () => {
  // Define student data
  const students = [
    {
      name: "Rey Lawas",
      department: "Science",
      finalGrade: 85,
      status: "Pass",
    },
    { name: "Rodel Celis", department: "Arts", finalGrade: 76, status: "Pass" },
    {
      name: "Mark Ardon Lawas",
      department: "Commerce",
      finalGrade: 92,
      status: "Pass",
    },
    { name: "Japhzel Mojado", department: "Science", status: "Fail" },
    { name: "Irene Biaco", department: "Arts", finalGrade: 63, status: "Pass" },
    {
      name: "Mary Claire Paran",
      department: "Commerce",
      finalGrade: 79,
      status: "Pass",
    },
    {
      name: "Jay Defiesta",
      department: "Science",
      finalGrade: 88,
      status: "Pass",
    },
    { name: "Jei Navarro", department: "Arts", finalGrade: 71, status: "Pass" },
    { name: "Peter John Beroy", department: "Commerce", status: "Fail" },
    {
      name: "John Nicole Lawas",
      department: "Science",
      finalGrade: 79,
      status: "Pass",
    },
  ];

  return (
    <div>
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Student Names</th>
            <th>Department</th>
            <th>Final Grade</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <Student key={index} index={index + 1} student={student} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
