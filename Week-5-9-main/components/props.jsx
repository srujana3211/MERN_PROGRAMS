import React from "react";

function Student(props) {
  return (
    <h2>
      Name: {props.name} | Marks: {props.Marks}
    </h2>
  );
}

export default Student;