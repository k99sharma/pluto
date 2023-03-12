// importing libraries
import { signIn } from "next-auth/react";

// importing custom components
import Button from "../components/Button/Button";

// login component
export default function LoginModule() {
  return (
    <div className="login-module">
      <div className="login-module-header">Login Page</div>

      <div className="login-module-loginButton">
        <Button clickEvent={() => signIn("github")} label="Login" />
      </div>

      <div className="login-module-signup">Dont have an account? Sign Up</div>
    </div>
  );
}
