import React, { Component } from 'react';
import Header from './Header';
import Menu from './menu';

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
        <Menu showMenu={this.state.showMenu} toggleMenu={this.toggleMenu} />

        <div id="content">
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
