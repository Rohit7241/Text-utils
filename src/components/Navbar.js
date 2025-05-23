import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
 
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`} id="navbar">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className={`nav-link`} aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">{props.about}</a>
          </li>
        
        </ul> 
                <div className="form-check mx-2">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={()=>props.Change("white")}/>
          <label className="form-check-label" htmlFor="flexRadioDefault1" >
            Light Mode
          </label>
        </div>
        <div className="form-check mx-2">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={()=>props.Change("#393e47")} defaultChecked/>
          <label className="form-check-label" htmlFor="flexRadioDefault2">
          Black Dark Mode
          </label>
        </div>
        <div className="form-check mx-2">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onChange={()=>props.Change("#2C0B0E")}/>
          <label className="form-check-label" htmlFor="flexRadioDefault1">
           Red Dark Mode
          </label>
        </div>
        <div className="form-check mx-2">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" onChange={()=>props.Change("#031633")}/>
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Blue Dark Mode
          </label>
        </div>
      </div>
    </div>
  </nav>
  )
}
Navbar.propTypes = { 
  title:PropTypes.string,
  about:PropTypes.string,
};
Navbar.defaultProps={
  title:"set title",
  about:"About",
};