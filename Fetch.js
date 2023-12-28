import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

document.getElementById("elm");

const ApiDataFetcher = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.powerlook.in/rest/default/V1/sizechart?sku=01-591910"
        );
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from API</h1>
      <ul>
        {Object.keys(data).map((product) => (
          <ul key={product.sizechart_attribute}>
            <li>{product?.sizechart_attribute}</li>
            <li>{product.sizechart_attribute}</li>
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default ApiDataFetcher;
