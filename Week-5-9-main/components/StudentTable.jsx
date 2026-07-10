import React, { useState } from "react";

const StudentTable = () => {
  // Sample data
  const students = [
    { id: 1, name: "Sreeja", age: 20 },
    { id: 2, name: "Rahul", age: 21 },
    { id: 3, name: "Suresh", age: 19 },
    { id: 4, name: "Rama", age: 22 },
    { id: 5, name: "Sony", age: 20 },
    { id: 6, name: "Harshini", age: 21 },
    { id: 7, name: "Harinie", age: 23 },
    { id: 8, name: "Amrutha", age: 20 },
    { id: 9, name: "Sowmya", age: 22 },
    { id: 10, name: "Radhika", age: 19 }
  ];

  // State
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 5;

  // 🔍 Filter data
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  // 📄 Pagination logic
  const indexOfLast = currentPage * recordsPerPage;
  const indexOfFirst = indexOfLast - recordsPerPage;
  const currentStudents = filteredStudents.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredStudents.length / recordsPerPage);

  return (
    <div>
      <h2>Student Table</h2>

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1); // reset page
        }}
      />

      {/* 📊 Table */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {currentStudents.length > 0 ? (
            currentStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No results found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* ⏮️ Pagination */}
      <div style={{ marginTop: "10px" }}>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StudentTable;