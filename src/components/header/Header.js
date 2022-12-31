import react, { useState } from "react";
import "./header.css";
import { useNavigate, Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);

  function menu() {
    setOpen(!open);
  }

  const navigate = useNavigate();
  const redirect = () => {
    navigate("/");
  };

  return (
    <div className="Header">
      <div className="start">
        <h3 onClick={redirect}>ChatGPT</h3>
        <div className={`Links `}>
          <h3 href="#">About</h3>
          <h3 href="#">OpenAi</h3>
          <h3 href="#">FAQ</h3>
        </div>
      </div>
      <div className={`buttons  `}>
        <button>Share</button>
        <Link to="/auth">
          <button>Sign In</button>
        </Link>
      </div>

      <div className="hamburger_container">
        <div className="Hamburger" onClick={menu}>
          <div className="Burger"></div>
          <div className="Burger"></div>
          <div className="Burger"></div>
        </div>
      </div>

      {open ? (
        <div className="nav_container">
          {" "}
          <div className="Menu_Links">
            <h3 href="#">About</h3>
            <h3 href="#">OpenAi</h3>
            <h3 href="#">FAQ</h3>
            <button>Share</button>
            <Link to="/auth">
              <button>Sign In</button>
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;
