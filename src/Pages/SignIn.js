import Header from "../Components/Header/Header";
import "./signin.css";
import { Link } from "react-router-dom";
import { supabase } from "../utils/SupabaseClient";
import { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function signInWithEmail() {
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
              onChange={(event) => setEmail(event.target.value)}
              type="email"
            ></input>
          </div>
          <div className="Passwprd">
            <p>Please Enter Your Password</p>
            <input
              onChange={(event) => setPassword(event.target.value)}
              type="password"
            ></input>
          </div>
          <Link to="/signup">
            <p className="noAccount">Don't Have An Account Yet?</p>
          </Link>
          <button onClick={() => signInWithEmail()}>Submit</button>
        </div>
      </div>
    </div>
  );
}
export default SignIn;
