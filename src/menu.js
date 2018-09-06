import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Menu extends Component {
  render() {
    const { showMenu, toggleMenu } = this.props;

    return (
      <div>
        <nav id="sidebar" className={showMenu ? 'show' : 'hide'}>

          <div className="sidebar-header">
            <h3>Bootstrap Sidebar</h3>
          </div>

          <ul className="list-unstyled components">
            <p>Dummy Heading</p>
            <li className="active">
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Pages</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </nav>
        <div className={`bt-menu ${showMenu ? 'active' : ''}`}>
          <a id="sidebarCollapse" className="btn" onClick={toggleMenu}>
            <FontAwesomeIcon icon={showMenu ? "times" : "bars"} size='lg' />
          </a>
        </div>
      </div>
    )
  }
};

export default Menu;