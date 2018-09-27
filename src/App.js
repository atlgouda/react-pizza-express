import React, { Component } from 'react';
import Navbar from './components/navbar';
import SplashImage from './components/splash-image';
import Description from './components/description';
import Menu from './components/menu';
import Contact from './components/contact';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SplashImage />
        <Description />
        <Menu />
        <Contact />
        
      </div>
    );
  }
}

export default App;
