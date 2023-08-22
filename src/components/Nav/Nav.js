import { useState } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUserPlus, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

import Search from "../Search/Search";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import All from "../Pages/All";

import "./Nav.css";

const Nav = () => {

  const [navCollapse, setNavCollapse] = useState(false);
  const [smallNavCollapse, setSmallNavCollapse] = useState(false);


  return (
    <>
      <div>
        <nav className="nav">
          <div
            className="container largeDeviceIcon"
            onClick={(e) => setNavCollapse(!navCollapse)}
          >
            <div
              className="container smallDeviceIcon"
              onClick={(e) => setSmallNavCollapse(!smallNavCollapse)}
            >
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </div>
          <Search />
          <div className="invite">
            <button className="invite-button">
              <i aria-hidden="true">
                <FontAwesomeIcon icon={faUserPlus} />
              </i>
              INVITE TEAM MEMBER
            </button>
          </div>
          <div>
            <button className="icon-button">
              <i aria-hidden="true">
                <FontAwesomeIcon icon={faBell} />
              </i>
            </button>
          </div>
          <div>
            <DropdownMenu />
          </div>
        </nav>
        <div className="mini-header">
          <div
            className={`${smallNavCollapse ? " smallNav" : ""
              } sidebar-container ${navCollapse ? " navCollaps" : ""}`}
          >
            <nav>
              <ul>
                <li>
                  <NavLink to="/all" activeClassName="active">
                    All
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/board" activeClassName="active">
                    Board
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/graph" activeClassName="active">
                    Graph
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/recent" activeClassName="active">
                    Recent
                  </NavLink>
                </li>
                <li>
                  <i aria-hidden="true">
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </i>
                </li>
              </ul>
            </nav>
            <All
              level={0}
              parentKey={0}
              childKey={0}
              index={0}
              
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Nav;

