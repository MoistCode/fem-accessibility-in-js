import React, { useState, useRef, useEffect } from "react";
import uuid from "uuid";

import "./dropdown.scss";

const Dropdown = ({ activatorText = "Dropdown", items = [] }) => {
  const activatorRef = useRef(null);
  const dropdownListRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = e => {};

  return (
    <div className="dropdown-wrap">
      <button
        className=""
        aria-haspopup="true"
        aria-controls="dropdown1"
        onClick={clickHandler}
        ref={activatorRef}
      >
        {activatorText}
      </button>

      <ul id="dropdown1" ref={dropdownListRef}>
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
