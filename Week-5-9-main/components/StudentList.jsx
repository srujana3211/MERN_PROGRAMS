import StudentCard from "./StudentCard";

import img2 from "../src/assets/image3.png";
import img3 from "../src/assets/image1.png";
import img4 from "../src/assets/image2.jpg";

const StudentList = () => {
  const students = [
    {
      name: "Shiva",
      branch: "CSE",
      year: "3rd Year",
      image: img4
    },
    {
      name: "Anjali",
      branch: "ECE",
      year: "2nd Year",
      image: img2
    },
    {
      name: "Rahul",
      branch: "MECH",
      year: "4th Year",
      image: img3
    }
  ];

  return (
    <div>
      <h2>Student Profiles</h2>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {students.map((student, index) => (
          <StudentCard key={index} {...student} />
        ))}
    </div>
    </div>
  );
};

export default StudentList;

