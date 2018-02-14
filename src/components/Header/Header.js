import React, {Component} from 'react';
import logo from '../../assets/logo.svg';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Frontend Challenge</h1>
        </header>
      </div>
    );
  }
}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
