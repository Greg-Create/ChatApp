import Header from "../Components/Header/Header"
import "./signin.css"
import { Link } from "react-router-dom"

function SignUp(){

    return(
        <div>

            <Header />
            <div className="signIn_container">
            <div className="signIn">
            <h1>Sign Up</h1>
            <div className="email">
            <p>Please Enter Your Email</p>
            <input type="email"></input>
            </div>
            <div className="Passwprd">
            <p>Please Enter Your Password</p>
            <input type="password"></input>
            </div>
            <Link to="/auth">
            <p className="noAccount">Already Have An Account?</p>
            </Link>
            <button>Submit</button>
            </div>
            </div>
        </div>
    )
}

export default SignUp