import React, { useEffect, useState } from "react";
import { getTest } from "../api/testApi";

const Home = () => {
  // test
  const [tests, setTests] = useState([]);

  useEffect(() => {
    getTest().then((res) => {
      console.log(res);
      setTests(res.data);
    });
  }, []);

  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {tests.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
