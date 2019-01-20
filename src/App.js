import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Header from './content/page/header';
import Menu from './content/page/menu';
import Home from './content/page/home';
import About from './content/page/about';
import Tiles from './content/component/tiles';

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

            <div class="container">
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/tiles" component={Tiles} />
            </div>
          </div>

          <div className={this.state.showMenu ? "overlay active" : "overlay hide"} onClick={this.toggleMenu}></div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
