import React, { useState, useRef, useEffect } from "react";
import uuid from "uuid";

import "./dropdown.scss";

const Dropdown = ({ activatorText = "Dropdown", items = [] }) => {
  const activatorRef = useRef(null);
  const dropdownListRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = e => {
    setIsOpen(!isOpen);
  };

  const keyHandler = e => {
    if (e.key === "Escape" && isOpen) {
      setIsOpen(false);
    }
  };

  const clickOutsideHandler = e => {
    const isInDropdownList = dropdownListRef.current.contains(e.target);
    const isInActivator = activatorRef.current.contains(e.target);

    if (isInDropdownList || isInActivator) {
        return;
    }

    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      dropdownListRef.current.querySelector("a").focus();
      document.addEventListener("mousedown", clickOutsideHandler);
    } else {
      document.removeEventListener("mousedown", clickOutsideHandler);
    }
  }, [isOpen]);

  return (
    <div className="dropdown-wrap" onKeyUp={keyHandler}>
      <button
        className="dropdown-activator"
        aria-haspopup="true"
        aria-controls="dropdown1"
        onClick={clickHandler}
        ref={activatorRef}
      >
        {activatorText}
      </button>

      <ul
        id="dropdown1"
        className={`dropdown-itemList ${isOpen ? "active" : ""}`}
        ref={dropdownListRef}
      >
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
