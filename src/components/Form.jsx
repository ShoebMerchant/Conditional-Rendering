import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!props.userIsRegistered && (
        <input placeholder="Confirm Password" type="password" />
      )}
      <button type="submit">
        {props.userIsRegistered ? "Login" : "Register"}
      </button>
    </form>
  );
}

export default Form;
