import React from "react";

function A() {
  const students = [
    { id: 1, name: "Sree", marks: 90 },
    { id: 2, name: "Ravi", marks: 85 }
  ];

  return (
    <table border="1" style={{ borderCollapse: "collapse", width: "50%" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Marks</th>
        </tr>
      </thead>

      <tbody>
        {students.map((s) => (
          <tr key={s.id}>
            <td>{s.id}</td>
            <td>{s.name}</td>
            <td>{s.marks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default A;