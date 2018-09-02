import React, { Component } from 'react';
import Header from './Header';
import Menu from './menu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }));
  }

  render() {
    return (
      <div className="App">
        <Menu showMenu={this.state.showMenu} />

        <div id="content">
          <nav className="bt-menu">
            <div>

              <button type="button" id="sidebarCollapse" className="btn btn-info" onClick={this.toggleMenu}>
                <FontAwesomeIcon icon={this.state.showMenu ? "times" : "bars"} size='lg' />
              </button>

            </div>
          </nav>

          <Header />

          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>

        <div className={this.state.showMenu ? "overlay active" : "overlay hide"} onClick={this.toggleMenu}></div>
      </div>
    );
  }
}

export default App;
