import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    
    <div>

      <div className='c3'>
        <h1> Contact </h1>
      </div>

      <p className="c1">
        <h3> Get in Touch. Click on the social icons</h3>
        <Link to="https://github.com/laviniaruiz/mod2project">
          <img style={{ width: "90px" }} src={require("../github.jpg")} alt="logo"></img>
       
        <Link to="https://www.linkedin.com/in/lavinia-ruiz-721726265/"></Link>
        <img style={{ width: "90px"}} src={require("../in.jpg")} alt="logo"></img>
        </Link>
      </p>

      {/* <p className="c2">
        <Link to="https://www.linkedin.com/in/lavinia-ruiz-721726265/"></Link>
        <img style={{ width: "90px"}} src={require("../in.jpg")} alt="logo"></img>
      </p> */}

    </div>
  );
}