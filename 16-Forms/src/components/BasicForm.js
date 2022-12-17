import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const normalTextValidation = (value) => {
    return value.trim() !== "";
  };

  const emailValidation = (value) => {
    return value.includes("@");
  };

  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasErrors,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameResetHandler,
  } = useInput(normalTextValidation);

  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasErrors,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameResetHandler,
  } = useInput(normalTextValidation);

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailResetHandler,
  } = useInput(emailValidation);

  let formIsValid = firstNameIsValid && emailIsValid && lastNameIsValid;

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);

    firstNameResetHandler();
    lastNameResetHandler();
    emailResetHandler();
  };

  const firstNameClass = firstNameHasErrors
    ? "form-control invalid"
    : "form-control";

  const lastNameClass = lastNameHasErrors
    ? "form-control invalid"
    : "form-control";
  const emailClass = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameClass}>
          <label htmlFor="first-name">First first-Name</label>
          <input
            value={enteredFirstName}
            onBlur={firstNameBlurHandler}
            onChange={firstNameChangeHandler}
            type="text"
            id="name"
          />
        </div>
        <div className={lastNameClass}>
          <label htmlFor="last-name">Last Name</label>
          <input
            value={enteredLastName}
            onBlur={lastNameBlurHandler}
            onChange={lastNameChangeHandler}
            type="text"
            id="lastname"
          />
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          value={enteredEmail}
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
          type="text"
          id="email"
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
