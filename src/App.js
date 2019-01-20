import React, { Component } from 'react';
import Header from './content/component/header/Header';
import Menu from './content/component/menu/Menu';
import Home from './content/component/home/Home';
import About from './content/component/about/About';

import { BrowserRouter, Route } from "react-router-dom";

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
      <BrowserRouter>
        <div className="App">
          <Menu showMenu={this.state.showMenu} toggleMenu={this.toggleMenu} />

          <div id="content">
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </div>

          <div className={this.state.showMenu ? "overlay active" : "overlay hide"} onClick={this.toggleMenu}></div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
