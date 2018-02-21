import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import './Container.css';
import ErrorBox from '../ErrorBox/ErrorBox';
import action from '../../redux/actions';

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      load: 0,
    };

    Container.propTypes = {
      getBooks: PropTypes.func.isRequired,
      getLikes: PropTypes.func.isRequired,
      savedBooks: PropTypes.array.isRequired,
    };
  }

  componentWillMount() {
    axios.get('/likes').then((likes) => {
      this.props.getLikes(likes.data);
    });
  }

  componentDidMount() {
    axios.get('/books').then((books) => {
      if (Object.keys(books).length === 0 && books.constructor === Object) {
        this.setState({
          load: 2,
        });
      } else {
        this.props.getBooks(books.data);
        this.setState({
          load: 1,
        });
      }
    });
  }

  onChangeHandler = () => {
    this.setState({
      load: true,
    });
  }

  setPage = () => {
    if (this.state.load === 1) {
      const { savedBooks } = this.props;
      const auth1 = [];
      const auth2 = [];
      for (let i = 0; i < savedBooks.length; i += 1) {
        if (savedBooks[i].author === 'J K Rowling') {
          auth1.push(savedBooks[i]);
        } else {
          auth2.push(savedBooks[i]);
        }
      }

      const rows1 = [];
      for (let i = 0; i < auth1.length; i += 1) {
        rows1.push((
          <div className="Container-books-outer">
            <div className="Container-books-row">
              <div className="Container-books-image">
                <img className="Container-books-image" alt="book_img" src="https://images-na.ssl-images-amazon.com/images/I/51VNlzbfpXL._SX331_BO1,204,203,200_.jpg" />
                <div className="Container-books-like">
                  <button className="Container-btn"><i className="material-icons">favorite</i></button>
                </div>
              </div>

              <div className="Container-books-desc">
                <div className="Container-books-name">
                  {auth1[i].name}
                </div>
                <div className="Container-books-rating">
                  {auth1[i].rating}
                </div>
                <div className="Container-books-author">
                  {(auth1[i].author).toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        ));
      }

      const rows2 = [];
      for (let i = 0; i < auth2.length; i += 1) {
        rows2.push((
          <div className="Container-books-outer">
            <div className="Container-books-row">
              <div className="Container-books-image">
                <img className="Container-books-image" alt="book_img" src="https://images-na.ssl-images-amazon.com/images/I/51VNlzbfpXL._SX331_BO1,204,203,200_.jpg" />
                <div className="Container-books-like">
                  <button className="Container-btn"><i className="material-icons">favorite</i></button>
                </div>
              </div>

              <div className="Container-books-desc">
                <div className="Container-books-name">
                  {auth2[i].name}
                </div>
                <div className="Container-books-rating">
                  {auth2[i].rating}
                </div>
                <div className="Container-books-author">
                  {(auth2[i].author).toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        ));
      }

      console.log(auth1, auth2);
      return (
        <div>
          <div className="Container-auth1">
            <div className="Container-title">
              {auth1[0].author}
            </div>
            <div className="Container-books1">
              <div className="Container-books-bg">
                {rows1}
              </div>
            </div>
          </div>
          <div className="Container-auth1">
            <div className="Container-title">
              {auth2[0].author}
            </div>
            <div className="Container-books1">
              <div className="Container-books-bg">
                {rows2}
              </div>
            </div>
          </div>
        </div>
      );
    //   const rows = [];
    //   for (let i = 0; i < savedBooks.length; i += 1) {
    //     rows.push(<)
    //   }
    //   const tempStore = savedBooks[0];
    //   console.log(tempStore.author);
    }
    if (this.state.load === 2) {
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

const mapStateToProps = state => ({
  savedBooks: state.bookReducer.books,
  savedLikes: state.bookReducer.likes,
});

const mapDispatchToProps = dispatch => ({
  getBooks: (books) => { dispatch(action.getBooks(books)); },
  getLikes: (likes) => { dispatch(action.getLikes(likes)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
