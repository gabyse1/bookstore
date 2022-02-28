import { PropTypes } from 'prop-types';
import Book from './Book';

const BookList = ({ booksArray }) => (
  <section className="books__section">
    <ul className="book__list">
      { booksArray && booksArray.map((book) => <Book key={book.id} book={book} />) }
    </ul>
  </section>
);

BookList.propTypes = {
  booksArray: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default BookList;
