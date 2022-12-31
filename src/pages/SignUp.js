import { useState } from "react";
import Header from "../components/header/Header";
import "./signin.css";
import { supabase } from "../utils/SupabaseClient";
import { Link } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function signUpWithEmail() {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    console.log(data);
    console.log(error);
  }

  return (
    <div>
      <Header />
      <div className="signIn_container">
        <div className="signIn">
          <h1>Sign Up</h1>
          <div className="email">
            <p>Please Enter Your Email</p>
            <input
              type="email"
              onChange={(event) => setEmail(event.target.value)}
            ></input>
          </div>
          <div className="Passwprd">
            <p>Please Enter Your Password</p>
            <input
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            ></input>
          </div>
          <Link to="/auth">
            <p className="noAccount">Already Have An Account?</p>
          </Link>
          <button onClick={() => signUpWithEmail()}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
