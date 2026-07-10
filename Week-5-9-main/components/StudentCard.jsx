const StudentCard = ({ name, branch, year, image }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "15px",
      width: "200px",
      textAlign: "center"
    }}>
      <img 
        src={image} 
        alt={name} 
        width="100" 
        height="100" 
        style={{ borderRadius: "50%" }}
      />
      <h3>{name}</h3>
      <p><b>Branch:</b> {branch}</p>
<p><b>Year:</b> {year}</p>
    </div>
  );
};

export default StudentCard
