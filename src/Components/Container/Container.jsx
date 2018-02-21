import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './Container.css';
import ErrorBox from '../ErrorBox/ErrorBox';

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      load: false,
    };
  }

  componentWillMount() {
    axios.get('/books').then((books) => {
      console.log(books);
    });
  }

  onChangeHandler = () => {
    this.setState({
      load: true,
    });
  }

  setPage = () => {
    if (!this.state.load) {
      return (
        <div className="Container-load">
          <ErrorBox onChange={() => this.onChangeHandler()} />
        </div>
      );
    }
    return <div>hello</div>;
  }

  render() {
    const view = this.setPage();
    return view;
  }
}

export default Container;
