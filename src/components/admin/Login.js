import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function Login() {
  const [state, setState] = useState(0);

  return (
    <div>
      Login Page
      <p>
        Username: <input type="text" />
      </p>
      <p>
        Password: <input type="text" />
      </p>
      <p> {state}</p>
      <button onClick={(e) => setState(state + 1)}> + </button>
      <button onClick={(e) => setState(state - 1)}> - </button>
      <Button variant="danger" onClick={() => setState(0)}>
        Reset
      </Button>
      <Button>Show Toast</Button>
    </div>
  );
}

export default Login;
