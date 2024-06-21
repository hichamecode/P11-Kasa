import "./Collapse.scss";
import collapseIconUp from "../assets/collapse-icon-up.png";
import React, { useState } from "react";
import data from "../datas/data.json"

function CollapseElement ({title, text}) {

  const [textVisible, setTextVisible] = useState(false)

  const handleClick = () => 
   {
    setTextVisible(!textVisible);
  }

  return(
    <li key={data.id}  className={`collapse-element`}>
    <header className="collapse-header">
      <h3 className="collapse-header-title">{title}</h3>
      <img
        className={`collapse-header-icon ${textVisible ? 'rotate' : ''}`}
        src={collapseIconUp}
        alt={title}
        onClick={handleClick}
      />
    </header>
    <ul className={`collapse-text ${textVisible ? 'show' : ''}`}>{text}</ul>
  </li>
  )
}

export default CollapseElement;

