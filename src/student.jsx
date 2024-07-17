import React from "react";

const Student = ({ index, student }) => {
  const { name, department, finalGrade, status } = student;

  return (
    <tr>
      <td>{index}</td>
      <td>{name}</td>
      <td>{department}</td>
      <td>{status === "Pass" ? (finalGrade ? finalGrade : "-") : "-"}</td>
      <td>{status}</td>
    </tr>
  );
};

export default Student;
