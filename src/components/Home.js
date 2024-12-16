import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  // test
  const [tests, setTests] = useState([]);

  useEffect(() => {
    axios.get("http://54.180.226.95:8080/api/test/list").then((res) => {
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
