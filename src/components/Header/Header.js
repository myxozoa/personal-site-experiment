import React from 'react';
import Logo from '../Logo/Logo.js';

class Header extends React.PureComponent {
  render() {
    return (
      <header>
        <Logo/>
      </header>
    );
  }
}

export default Header;