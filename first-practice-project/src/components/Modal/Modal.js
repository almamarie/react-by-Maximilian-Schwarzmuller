import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./Modal.module.css";

const Modal = (props) => {
  const [close, setClose] = useState(false);

  const closeModal = () => {
    setClose(true);
    props.onCloseModal();
  };
  return (
    <div>
      <div className={styles.backdrop}></div>
      <Card className={`${styles.modal} ${close && styles.close}`}>
        <p>Invalid Input</p>

        <p>{props.message}</p>
        <div className={styles.button}>
          <Button onClick={closeModal} type="text">
            Okay
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Modal;
