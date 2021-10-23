import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <Form userIsRegistered={userIsRegistered} />
    </div>
  );
}

export default App;

// {
//   userIsRegistered && <button type="submit">Login</button>;
// }
