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
    // this.state = {
    //   load: false,
    // };
    this.getBooks();
    Container.propTypes = {
      getBooks: PropTypes.func.isRequired,
      getLikes: PropTypes.func.isRequired,
      savedBooks: PropTypes.array.isRequired,
      savedLikes: PropTypes.array.isRequired,
    };
  }

  // componentWillMount() {
  //   // axios.get('/books').then((books) => {
  //   //   if (books.data.length === 0) {
  //   //     if (this.state.load === true) {
  //   //       this.setState({
  //   //         load: false,
  //   //       });
  //   //     }
  //   //     console.log('dsv');
  //   //     this.setState({
  //   //       load: true,
  //   //     });
  //   //   }
  //   // });
  //   axios.get('/books').then(() => {
  //     if (this.state === false) {
  //       this.setState({
  //         load: true,
  //       });
  //     }
  //   });
  // }

  // componentDidMount() {
  //   axios.get('/books').then((books) => {
  //     if (books.data.length === 0) {
  //       if (this.state.load === true) {
  //         this.setState({
  //           load: false,
  //         });
  //       }
  //     } else {
  //       console.log('beforedsv');
  //       this.props.getBooks(books.data);
  //       console.log('dsv');
  //       if (this.state.load === false) {
  //         this.setState({
  //           load: true,
  //         });
  //       }
  //     }
  //   });
  //   // axios.get('/books').then((books) => {
  //   //   this.props.getBooks(books.data);
  //   // }).then(() => {
  //   //   console.log('here');
  //   // });
  // }

  onChangeHandler = () => {
    // const options = {
    //   url: '/store',
    //   method: 'POST',
    // };
    axios.post('/store').then(() => {
      this.getBooks();
      console.log('mess');
    });
  }

  onClickHandler = (likeStatus, bookID) => {
    const like = likeStatus > 0 ? 0 : 1;
    axios.post(`/like/${bookID}/${like}`).then(() => {
      this.getBooks();
    });
  }

  getBooks = () => {
    axios.get('/books').then((books) => {
      this.props.getBooks(books.data);
      axios.get('/likes').then((allLikes) => {
        const justLikes = [];
        for (let i = 0; i < allLikes.data.length; i += 1) {
          if (allLikes.data[i].likeStatus === 1) {
            justLikes.push(allLikes.data[i].bookID);
          }
        }
        this.props.getLikes(justLikes);
      });
    });
  }

  setPage = () => {
    if (this.props.savedBooks.length === 0) {
      return (
        <div className="Container-load">
          <ErrorBox onChange={() => this.onChangeHandler()} />
        </div>
      );
    }

    // return axios.get('/books').then((books) => {
    //   this.props.getBooks(books.data);
    // }).then(() => {
    //   if (this.props.savedBooks.length !== 0 && this.state.load !== true) {
    //     this.setState({
    //       load: true,
    //     });
    //   }
    // }).then(() => {

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
      let flag = 0;
      if (this.props.savedLikes.length > 0) {
        for (let j = 0; j < this.props.savedLikes.length; j += 1) {
          if (this.props.savedLikes[j] === auth1[i].bookID) {
            flag = 1;
            break;
          }
        }
      }
      rows1.push((
        <div className="Container-books-outer">
          <div className="Container-books-row">
            <div className="Container-books-image">
              <img className="Container-books-image" alt="book_img" src="https://images-na.ssl-images-amazon.com/images/I/51VNlzbfpXL._SX331_BO1,204,203,200_.jpg" />
              <div className="Container-books-like">
                <button
                  className={flag > 0 ? 'Container-btn-like' : 'Container-btn-dislike'}
                  onClick={() => this.onClickHandler(flag, auth1[i].bookID)}
                ><i className="material-icons" >favorite</i>
                </button>
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
      let flag = 0;
      if (this.props.savedLikes.length > 0) {
        for (let j = 0; j < this.props.savedLikes.length; j += 1) {
          if (this.props.savedLikes[j] === auth2[i].bookID) {
            flag = 1;
            break;
          }
        }
      }
      rows2.push((
        <div className="Container-books-outer">
          <div className="Container-books-row">
            <div className="Container-books-image">
              <img className="Container-books-image" alt="book_img" src="https://images-na.ssl-images-amazon.com/images/I/51VNlzbfpXL._SX331_BO1,204,203,200_.jpg" />
              <div className="Container-books-like">
                <button
                  className={flag > 0 ? 'Container-btn-like' : 'Container-btn-dislike'}
                  onClick={() => this.onClickHandler(flag, auth2[i].bookID)}
                ><i className="material-icons">favorite</i>
                </button>
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

    // });


    //   const rows = [];
    //   for (let i = 0; i < savedBooks.length; i += 1) {
    //     rows.push(<)
    //   }
    //   const tempStore = savedBooks[0];
    //   console.log(tempStore.author);
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
