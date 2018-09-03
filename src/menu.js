import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './menu.css';

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
              <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
              <ul className="collapse list-unstyled" id="homeSubmenu">
                <li>
                  <a href="#11">Home 1</a>
                </li>
                <li>
                  <a href="#12">Home 2</a>
                </li>
                <li>
                  <a href="#13">Home 3</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
              <ul className="collapse list-unstyled" id="pageSubmenu">
                <li>
                  <a href="#21">Page 1</a>
                </li>
                <li>
                  <a href="#22">Page 2</a>
                </li>
                <li>
                  <a href="#23">Page 3</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
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