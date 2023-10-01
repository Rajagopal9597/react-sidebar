import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
        {isExpanded ? 'Collapse' : 'Expand'}
      </div>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/page1" activeClassName="active-link">
            Page 1
          </NavLink>
        </li>
        <li>
          <NavLink to="/page2" activeClassName="active-link">
            Page 2
          </NavLink>
        </li>
        <li>
          <NavLink to="/page3" activeClassName="active-link">
            Page 3
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
