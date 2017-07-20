import React from 'react';
import { connect } from 'react-redux';
//when first booting up, the display will error if reducer default state is null
// cannot read .title of null
class BookDetail extends React.Component {
  render() {
    if(!this.props.book) {
      return <div>Select a book to get started.</div>
    }
    return(
      <div>
        <h3>Details for:</h3>
        <div>{this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
