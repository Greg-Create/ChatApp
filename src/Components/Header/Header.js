import react from "react"
import "./header.css"
import { useNavigate, Link } from "react-router-dom"


function Header() {

    const navigate = useNavigate();
;
        const redirect = () => {
            navigate('/')
        }
    return(
        <div className="Header">
            <div className="start">
                <h3 onClick={redirect}>ChatGPT</h3>
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