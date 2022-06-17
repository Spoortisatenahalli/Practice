import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    
<i class="fa-brands fa-kickstarter"></i>
       
    <div class="navbar navbar-expand-lg bg-dark" id='navBar'>
      <div><Link to="/home"><button className='btn btn-outline-success'>Home </button></Link></div>
          <div><Link to={'/student'}><button className='btn btn-outline-primary'>Click to contact </button></Link></div>

    </div>
    </>
  );
};

export default Header;