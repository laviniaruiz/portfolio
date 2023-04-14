import { Link } from "react-router-dom"

export default function Nav(props) {
    return (
      <div className="nav">
        <div>
          <h4 to="/">Lavinia Ruiz</h4>
        </div>

        <div>
          <Link to="/about">About</Link>
        </div>

        <div>
          <Link to="/contact">Contact</Link>
        </div>
        
      </div>
    );
  }