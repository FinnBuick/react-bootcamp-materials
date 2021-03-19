import React from "react";
import useInputState from "./hooks/useInputState";

export default function SimpleFormHooks() {
  const [email, updateEmail, resetEmail] = useInputState("");
  const [password, updatePassword, resetpassword] = useInputState("");
  return (
    <div>
      <h1>
        Email is: {email} & Password is: {password}{" "}
      </h1>
      <input type="text" value={email} onChange={updateEmail} />
      <br />
      <input type="text" value={password} onChange={updatePassword} />
      <br />
      <button onClick={resetEmail}>Reset Email</button>
      <br />
      <button onClick={resetpassword}>Reset Password</button>
      <br />
    </div>
  );
}
