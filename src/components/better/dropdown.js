import React, { useState, useRef, useEffect } from "react";
import uuid from "uuid";

import "./dropdown.scss";

const Dropdown = ({ activatorText = "Dropdown", items = [] }) => {
  const clickHandler = e => {};

  return (
    <div className="dropdown-wrap">
      <button aria-haspopup="true" aria-controls="dropdown1" onClick={clickHandler}>
        {activatorText}
      </button>

      <ul id="dropdown1">
        {items.map(item => (
          <li key={item}>
            <a href={item.url}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Dropdown;
