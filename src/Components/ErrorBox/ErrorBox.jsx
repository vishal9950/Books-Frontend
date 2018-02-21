import React from 'react';
import { PropTypes } from 'prop-types';
import './ErrorBox.css';

class ErrorBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    ErrorBox.propTypes = {
      onChange: PropTypes.func.isRequired,
    };
  }

  onClickHandler = () => {
    this.props.onChange();
  }

  render() {
    return (
      <div className="ErrorBox-out">
        <div className="ErrorBox-outer">
          <div className="ErrorBox-box">
            <div className="ErrorBox-error">
            Oops ! No books found!
            </div>
            <div className="ErrorBox-msg">
            Import them now ?
            </div>
            <div className="ErrorBox-load">
              <button className="ErrorBox-btn" onClick={() => this.onClickHandler()}><i id="ErrorBox-icon" className="material-icons">refresh</i></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorBox;
