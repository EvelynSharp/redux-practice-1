import React from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
//below take value from selectBook and make sure it flow through all reducers
import { bindActionCreators } from 'redux';


class BookList extends React.Component {

  renderList = () => {
    return this.props.books.map( book => {
      return (
        <li
          key={book.title}
          onClick={() =>this.props.selectBook(book) }
          className='list-group-item'
        >
          {book.title}
        </li>
      )
    })
  }
  render() {
    return(
      <ul className='list-group col-sm-4'>
        { this.renderList() }
      </ul>
    )
  }

}


const mapStateToProps = (state) => {
    return {
      books: state.books
    }
  }


//anything returned from this func will be props of booklist container
// the first selectBook is the prop's name
//when do this.props.selectBook, it will call the action creator selectBook
const mapDispatchToProps = ( dispatch ) => {
  //bAC make sure result of selectBook action creator flow through dispatch
  //dispatch receive all actions and spits out to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//promote to container, need to know this
// new dispatch method - selectBook - to make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
