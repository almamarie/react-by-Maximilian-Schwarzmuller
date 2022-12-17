import React from "react";
import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={`${classes.button} ${classes.bump}`}>
      <div className={classes.icon}>
        <CartIcon />
      </div>
      <p>Your Cart</p>
      <span className={classes.badge}>0</span>
    </button>
  );
};

export default HeaderCartButton;
