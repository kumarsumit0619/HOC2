import React, { useState, useEffect } from "react";

const HOC = (OriginalComponent, entity) => {
  const NewComponent = () => {
    const [data, setData] = useState([]);
    const [term, setTerm] = useState("");

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}`
        );
        const da = await response.json();
        setData(da);
      };
      fetchData();
    }, []);

    const changeHandler = (e) => {
      let searchTerm = e.target.value.toLowerCase();
      setTerm(searchTerm);
    };

    let filteredData = data?.slice(0, 10)?.filter((d) => {
      if (entity === "users") {
        return d.name.toLowerCase().includes(term);
      }
      if (entity === "todos") {
        return d.title.toLowerCase().includes(term);
      }
    });

    return (
      <div>
        <h3>{entity.toUpperCase()}</h3>
        <input type="text" onChange={changeHandler} />
        <OriginalComponent data={filteredData} />
      </div>
    );
  };
  return NewComponent;
};

export default HOC;
