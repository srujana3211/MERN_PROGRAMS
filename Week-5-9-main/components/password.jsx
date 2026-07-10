import React, { useState } from "react";

function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const checkStrength = (pass) => {
    let score = 0;

    if (pass.length >= 8) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[!@#$%^&*]/.test(pass)) score++;

    if (score <= 1) {
      return "Weak";
    } else if (score === 2 || score === 3) {
      return "Medium";
    } else {
      return "Strong";
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setStrength(checkStrength(value));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Password Strength Checker</h2>

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={handleChange}
        style={{ padding: "10px", width: "250px" }}
      />

      <p>Password Strength: <b>{strength}</b></p>
    </div>
  );
}

export default PasswordChecker;