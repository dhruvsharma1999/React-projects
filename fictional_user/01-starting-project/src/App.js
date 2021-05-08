import React, { useState } from "react";
import User from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import "./App.css";
function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <User onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
