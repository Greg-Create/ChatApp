import Header from "../Components/Header/Header"
import "./signin.css"

function SignIn(){

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
            <p className="noAccount">Don't Have An Account Yet?</p>
            <button>Submit</button>
            </div>
            </div>
        </div>
    )
}

export default SignIn