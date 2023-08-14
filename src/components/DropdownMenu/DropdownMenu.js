import React, { useState, useRef, useEffect } from "react";

import "./DropdownMenu.css";


const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div onClick={handleOutsideClick}>
      <div className="dropdown-container" ref={dropdownRef}>
        <button className="dropdown-button" onClick={toggleMenu}>
          SR
        </button>
        {isOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-section">
              <ul>
                <span>
                  <li>Dark mode</li>
                  <li>Profile</li>
                </span>
              </ul>
              <ul>
                <span>
                  <li>What's new</li>
                  <li>Help</li>
                  <li>Send feedback</li>
                  <li>Hints and shortcuts</li>
                </span>
              </ul>
              <ul>
                <span className="span1">
                  <li>Log out</li>
                </span>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownMenu;
