import React from 'react';
import './SideNav.css';

class SideNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      logoText: 'Bs',
    };
  }

  render() {
    return (
      <div className="SideNav-bar">
        <ul className="SideNav-list">
          <li id="SideNav-logo">{this.state.logoText}</li>
          <li id="SideNav-blank" />
          <li><i id="SideNav-material-icons" className="material-icons">refresh</i></li>
          <li id="SideNav-blank2" />
          <li><i id="SideNav-material-icons" className="material-icons">settings</i></li>
        </ul>
      </div>
    );
  }
}

export default SideNav;

