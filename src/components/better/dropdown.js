import React, { useState, useRef, useEffect } from "react";
import uuid from "uuid";

import "./dropdown.scss";

const Dropdown = ({ activatorText = "Dropdown", items = []}) => {
  return (
    <div className="dropdown-wrap">
        <button>
            {activatorText}
        </button>
    </div>
  );
};
export default Dropdown;
