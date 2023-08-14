import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesLeft,
  faChevronDown,
  faCompressAlt,
  faPlus
} from "@fortawesome/free-solid-svg-icons";

import "./All.css";

const All = ({ level, parentKey, childKey, index }) => {

  const [subItems, setSubItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showInput, setShowInput] = useState(false);

  const localStorageKey = `subItemsLevel${level}_${parentKey}_${childKey}_${index}`;


  useEffect(() => {
    const storedSubItems = JSON.parse(localStorage.getItem(localStorageKey));
    if (storedSubItems) {
      setSubItems(storedSubItems);
    }
  }, [localStorageKey]);

  const handleAddSubItem = () => {
    if (inputValue.trim() !== '') {
      const newSubItems = [...subItems, { text: inputValue, subItems: [] }];
      setSubItems(newSubItems);
      localStorage.setItem(localStorageKey, JSON.stringify(newSubItems));
      setInputValue('');
      setShowInput(false);
    }
  };

  // Define icon rendering based on the level
  const renderIcons = () => {
    if (level === 0) {
      return (
        <>
          <li>
            <i aria-hidden="true" onClick={() => setShowInput(true)}>
              <FontAwesomeIcon icon={faPlus} />
            </i>
          </li>
          <li>
            <i aria-hidden="true">
              <FontAwesomeIcon icon={faCompressAlt} />
            </i>
          </li>
          <li>
            <i aria-hidden="true">
              <FontAwesomeIcon icon={faAnglesLeft} />
            </i>
          </li>
        </>
      );
    } else if (level === 1) {
      return (
        <>
          <li style={{ width: "20px", display: "flex", marginTop: "-9px", marginLeft: "20px" }}>
            <i aria-hidden="true" onClick={() => setShowInput(true)}>
              <FontAwesomeIcon icon={faPlus} />
            </i>
          </li>
          <li style={{ width: "10px", display: "flex", marginTop: "-42px", marginLeft: "-140px" }}>
            <i aria-hidden="true">
              <FontAwesomeIcon icon={faChevronDown} />
            </i>
          </li>
        </>
      );
    }else if (level === 2) {
      return (
        <>
          <li style={{ width: "20px", display: "flex", marginTop: "-9px", marginLeft: "20px" }}>
            <i aria-hidden="true" onClick={() => setShowInput(true)}>
              <FontAwesomeIcon icon={faPlus} />
            </i>
          </li>
          <li style={{ width: "10px", display: "flex", marginTop: "-42px", marginLeft: "-150px" }}>
            <i aria-hidden="true">
              <FontAwesomeIcon icon={faChevronDown} />
            </i>
          </li>
        </>
      );
    }
     else
      return null;
  };


  return (
    <>
      <div>
        <div className={`sidebar-menu-item level-${level}`}>
          <ul>
            {level === 0 && <li>DFIN</li>}
            {renderIcons()}
          </ul>
          {showInput && level <= 2 && (
            <div className={`input-container level-${level}`}>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyUp={(e) => e.key === 'Enter' && handleAddSubItem()}
              />
            </div>
          )}
          {subItems.length > 0 && (
            <ul>
              {subItems.map((subItem, index) => (
                <li key={index}>
                  <span className={`submitted-item level-${level}`}>
                    {subItem.text}
                    {level < 3 &&
                      <All
                        level={level + 1}
                        parentKey={parentKey + '_' + index}
                        childKey={index}
                        index={index}
                      />
                    }
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default All;













