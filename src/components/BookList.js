import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const books = useSelector((store) => store.booksReducer);

  return (
    <section className="books__section">
      <ul className="book__list">
        { books && books.map((book) => <Book key={book.id} book={book} />) }
      </ul>
    </section>
  );
};

export default BookList;
