import React, { useState } from "react";
import NewUser from "./components/NewUser/NewUser";
import UserList from "./components/User/UserList";
import styles from "./App.module.css";

function App() {
  const [users, setUsers] = useState([
    { id: 1, userName: "Louis", age: 23 },
    { id: 2, userName: "Louis", age: 23 },
  ]);

  const newUserHandler = (userDetails) => {
    userDetails["id"] = users.length + 1;
    setUsers((prevData) => {
      return [userDetails, ...prevData];
    });
  };
  return (
    <div className={styles.app}>
      <NewUser onUserRegistration={newUserHandler}></NewUser>
      <UserList users={users} />
    </div>
  );
}

export default App;
