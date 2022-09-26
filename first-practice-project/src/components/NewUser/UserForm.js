import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(+event.target.value);
  };

  const submitUser = (event) => {
    event.preventDefault();
    // console.log(event.target.data);
    const newData = {
      userName: userName,
      age: age,
    };

    props.onSubmit(newData);
  };
  return (
    <Card>
      <form onSubmit={submitUser}>
        <div className={styles["input-wrapper"]}>
          <label>Username</label>
          <input onChange={userNameHandler} type="text" id="username" />
        </div>
        <div className={styles["input-wrapper"]}>
          <label>Age(Years)</label>
          <input type="number" id="age" onChange={ageHandler} />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default UserForm;
