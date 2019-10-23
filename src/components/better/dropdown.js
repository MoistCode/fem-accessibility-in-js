import React, { useState, useRef, useEffect } from "react";
import uuid from "uuid";

import "./dropdown.scss";

const Dropdown = ({ activatorText = "Dropdown", items = [] }) => {
  return (
    <div className="dropdown-wrap">
      <button>{activatorText}</button>

      <ul>
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
