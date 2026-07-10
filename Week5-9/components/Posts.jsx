import React, { useEffect, useState } from "react";

const Getdata = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const [show, setShow] = useState([]);

  const showData = async (apiCall) => {
    const response = await fetch(apiCall);
    const data = await response.json();
    setShow(data);
  };

  useEffect(() => {
    showData(URL);
  }, []);

  return (
    <div className="container">
      {show.map((list) => (
        <div key={list.id}>
          <h3>{list.title}</h3>
          <p>{list.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Getdata;