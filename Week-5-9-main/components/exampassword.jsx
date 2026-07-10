import React, { useState } from "react";

function Checker() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  function checkStrength(pwd) {
    let score = 0;

    if (pwd.length >= 8) score++;
    if (/[a-z]/.test(pwd)) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[!@#$_%^&*]/.test(pwd)) score++;

    if (score <= 2) return "Weak ❌";
    if (score <= 4) return "Medium ⚠️";
    return "Strong ✅";
  }

  function handleChange(e) {
    const pwd = e.target.value;
    setPassword(pwd);
    setStrength(checkStrength(pwd));
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Password Strength Checker</h2>

      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter password"
      />

      <p>Strength: {strength}</p>
    </div>
  );
}

export default Checker;