import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooksAPI } from '../redux/books/booksReducer';
import Book from './Book';

const BookList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooksAPI());
  }, []);
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
