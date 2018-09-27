import React, { Component } from 'react';
import Navbar from './components/navbar';
import SplashImage from './components/splash-image';
import Description from './components/description';
import Menu from './components/menu';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SplashImage />
        <Description />
        <Menu />
        
      </div>
    );
  }
}

export default App;
