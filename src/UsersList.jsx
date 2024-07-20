import React from "react";
import HOC from "./HOC.jsx";

const UsersList = ({ data }) => {
  let renderUsers = data.map((item, index) => <li key={index}>{item.name}</li>);

  return (
    <div>
      <ul className="list">{renderUsers}</ul>
    </div>
  );
};
export default HOC(UsersList, "users");
