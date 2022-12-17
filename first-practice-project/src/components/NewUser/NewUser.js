import React, { useState } from "react";
import Modal from "../Modal/Modal";
import UserForm from "./UserForm";
import styles from "./NewUser.module.css";

const NewUser = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [validationError, setValidationError] = useState("");
  const newUserHandler = (data) => {
    if (!validate(data)) {
      return;
    }
    props.onUserRegistration(data);
  };

  const validate = (data) => {
    if (!data.userName) {
      setShowModal(true);
      setValidationError("You must input a name");
      return false;
    }

    if (!data.age) {
      setShowModal(true);
      setValidationError("You must input an age");
      return false;
    }

    if (data.age < 1) {
      setShowModal(true);
      setValidationError("Age must be greater than 1");
      return false;
    }
    return true;
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className={styles["new-user"]}>
      <UserForm onSubmit={newUserHandler}></UserForm>{" "}
      {showModal && (
        <div className={styles.modal}>
          <Modal message={validationError} onCloseModal={closeModal} />
        </div>
      )}
    </div>
  );
};

export default NewUser;
