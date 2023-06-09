import "./App.css";
import AddUser from "./Component/Users/AddUser";
import UserList from "./Component/Users/UserList";
import React, { useState  } from "react";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge, uCollege) => {
    setUserList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, college: uCollege, id: Math.random().toString() },
      ];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </>
  );
}

export default App;
