import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAPI } from '../redux/books/booksReducer';
import ProgressCircle from './ProgressCircle';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const removeBookFromStore = (e) => {
    dispatch(removeBookAPI(e.target.getAttribute('data-id')));
  };

  const getCurrentCapPercentage = (cc, tc) => (Math.floor((cc / tc) * 100).toString());

  return (
    <li className="book__list-item">
      <div className="list__item-details">
        <h4 className="book-category">
          { book.category }
        </h4>
        <h2 className="book-title">
          { book.title }
        </h2>
        <span className="book-author">
          { book.author }
        </span>
        <span className="book-chapters">
          { book.totalCaps.toString().concat(' caps.') }
        </span>
        <ul className="book-tags">
          <li className="item__tag"><button type="button" className="btn__link" data-id={book.id}>Comments</button></li>
          <li className="item__tag"><button type="button" className="btn__link" data-id={book.id} onClick={removeBookFromStore}>Remove</button></li>
          <li className="item__tag"><button type="button" className="btn__link" data-id={book.id}>Edit</button></li>
        </ul>
      </div>
      <div className="list__item-progress-graphic">
        <div className="progress__perc">
          <svg>
            <circle cx="25" cy="25" r="25" />
            <ProgressCircle capsData={[book.currentCap, book.totalCaps]} />
          </svg>
        </div>
        <div className="progress__desc">
          <span className="progress__number">{getCurrentCapPercentage(book.currentCap, book.totalCaps).concat('%')}</span>
          <span>Completed</span>
        </div>
      </div>
      <div className="list__item-progress-manage">
        <span className="progress__title">CURRENT CHAPTER</span>
        <span className="progress__chapter">{'CHAPTER '.concat(book.currentCap)}</span>
        <button type="button" className="btn">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    totalCaps: PropTypes.number.isRequired,
    currentCap: PropTypes.number.isRequired,
  }).isRequired,
};

export default Book;
