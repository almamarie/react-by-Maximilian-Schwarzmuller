import React from "react";
import Card from "../UI/Card";
import User from "./User";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card>
      <ul className={styles["user-list"]}>
        {props.users.map((user) => {
          return <User key={user.id} userName={user.userName} age={user.age} />;
        })}
      </ul>
    </Card>
  );
};

export default UserList;
