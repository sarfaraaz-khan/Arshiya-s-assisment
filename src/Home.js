import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = await response.data;
    setData(data);
  };

  return (
    <div>
      {data.map((user) => {
        return <h1>{user.name}</h1>;
      })}
    </div>
  );
}

export default Home;
