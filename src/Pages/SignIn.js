import Header from "../Components/Header/Header"
import "./signin.css"
import { Link } from "react-router-dom"



    return(
        <div>

            <Header />
            <div className="signIn_container">
            <div className="signIn">
            <h1>Sign In</h1>
            <div className="email">
            <p>Please Enter Your Email</p>
            <input type="email"></input>
            </div>
            <div className="Passwprd">
            <p>Please Enter Your Password</p>
            <input type="password"></input>
            </div>
            <Link to="/signup" >
            <p className="noAccount">Don't Have An Account Yet?</p>
            </Link>
            <button>Submit</button>
            </div>
            </div>
        </div>
    )
}

export default SignIn