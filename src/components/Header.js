import React from "react";
import ReactDOM from "react-dom";
import "../style.css";
import plai from "../images/plai.png";


export default function Header(){
  return (
    <div className = "header-react" >
      <div className="left-header">
        <img 
          src = {plai}
          alt = "logo"
          className = "logo"
        />
        <h1 className = "header-text">Platinum ai</h1>
      </div>
      <div className="right-header">
        <button className = "header-button">let's talk</button>
        <button className = "header-button">our service</button>
        <button className = "header-button">grant slam offers</button>
      </div>
    
    </div>
  )

}