import { useState } from "react";
import Header from "../components/header/Header";
import "./signin.css";
import { supabase } from "../utils/SupabaseClient";

function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function signInWithEmail(event) {
    event.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
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
          <h1>Sign In</h1>
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
          <p className="noAccount">Don't Have An Account Yet?</p>
          <button onClick={() => signInWithEmail()}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
