import React from 'react';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headerTextMain: 'Book ',
      headerTextLeft: 'The ',
      headerTextRight: 'Shelf',
    };
  }

  render() {
    return (
      <div className="Header-head">
        <div className="Header-underline">
          <span className="Header-standard">
            {this.state.headerTextLeft}
          </span>
          <span className="Header-main">
            {this.state.headerTextMain}
          </span>
          <span className="Header-standard">
            {this.state.headerTextRight}
          </span>
        </div>
      </div>
    );
  }
}

export default Header;
