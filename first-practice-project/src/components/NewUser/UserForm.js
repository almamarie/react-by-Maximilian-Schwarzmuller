import React from "react";
import Card from "../UI/Card";

const UserForm = (props) => {
  return (
    <Card>
      <div>
        <label for="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label for="age">Age(Years)</label>
        <input type="number" id="age" />
      </div>
      <input type="submit" />
    </Card>
  );
};

export default UserForm;
