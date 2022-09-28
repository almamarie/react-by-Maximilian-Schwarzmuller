import React from "react";
import classes from "./MainHeader.module.css";
import mealsImage from "../../images/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const MainHeader = (props) => {
  return (
    <React.Fragment>
      <div className={classes.header}>
        <h2>ReactMeals</h2>
        <HeaderCartButton />
      </div>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="of a table with food" />
      </div>
    </React.Fragment>
  );
};

export default MainHeader;
