import react from "react"
import "./header.css"
import { Link } from "react-router-dom"


function Header() {



    return(
        <div className="Header">
            <div className="start">
                <Link to="/">
            <h3>ChatGPT</h3>
            </Link>
            <div className="Links">
                <h3 href="#">About</h3>
                <h3 href="#">OpenAi</h3>
                <h3 href="#">FAQ</h3>
            </div>
            </div>
            <div className="buttons">
            <button>Share</button>
            <Link to="/auth" >
            <button >Sign In</button>
            </Link>
            
            </div>
        </div>
    )
}

export default Header