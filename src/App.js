import React, { Component } from 'react';
import './App.css';
import About from './components/About';
import Application from './components/Application';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Main from './components/Main';
import Puppies from './components/Puppies';

class App extends Component {
  constructor(props) {
    super(props); 
    this.showComponent = this.showComponent.bind(this);
  }
  state = { whichComponent: <Main /> };

  // this is my workaround to display components listed in navbar without use of react router,
  // because react router is not friendly with gh-pages! sadface.
  handleClick(event) {
    let id = event.target.id;
    this.setState({
      whichComponent: this.showComponent(id)
    });
  }
  showComponent(id) {
    switch (id) {
    case 'home':
      return <Main />;
    case 'about':
      return <About />;
    case 'puppies':
      return <Puppies />;
    case 'gallery':
      return <Gallery />;
    case 'contact':
      return <Contact />;
    case 'application':
      return <Application />;
    default:
      return null;
    }
  }
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          {/* <a className="navbar-brand" id="home">
            <h4>Enchanting PONs</h4>
            <h6>Polish Lowland Sheepdogs</h6>
          </a> */}
          <button className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mr-auto" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <p className="nav-item nav-link"
                id="home"
                onClick={this.handleClick.bind(this)}>Home</p>
              <p className="nav-item nav-link"
                id="about"
                onClick={this.handleClick.bind(this)}>About</p>
              {/* <p className="nav-item nav-link"
                id="puppies"
                onClick={this.handleClick.bind(this)}>Puppies</p> */}
              <p className="nav-item nav-link"
                id="gallery"
                onClick={this.handleClick.bind(this)}>Gallery</p>
              <p className="nav-item nav-link"
                id="contact"
                onClick={this.handleClick.bind(this)}>Contact</p>
              <p className="nav-item nav-link"
                id="application"
                onClick={this.handleClick.bind(this)}>Application</p>
            </div>
          </div>
        </nav>

        <div className="display">
          {this.state.whichComponent}
        </div>
        <footer>&#9400; 2018-{new Date().getFullYear()} Enchanting PON | All rights reserved.</footer>
      </div>
    );
  }
}

export default App;
