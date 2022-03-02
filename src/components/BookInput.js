import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookAPI } from '../redux/books/booksReducer';

const BookInput = () => {
  const [book, setBook] = useState(
    {
      id: uuidv4(),
      title: '',
      author: '',
      category: '',
      totalCaps: 5,
      currentCap: 1,
    },
  );

  const [msg, setMsg] = useState('');
  const [msgStyles, setMsgStyles] = useState('');
  const books = useSelector((store) => store.booksReducer);
  const dispatch = useDispatch();
  let timerId = 0;

  const validString = (str) => {
    if (str.match(/^[a-zA-Z0-9À-ÿ\u00f1\u00d1\u00E0\u00FC_:,&\- ]{1,100}$/)) return true;
    return false;
  };

  const validNumber = (num) => {
    if (num.toString().match(/^[0-9]{1,3}$/)) return true;
    return false;
  };

  const displayMessage = (type, mesg) => {
    clearTimeout(timerId);
    setMsg(mesg);
    if (type === 'error') {
      setMsgStyles(' error-message visible');
    } else setMsgStyles(' visible');
    timerId = setTimeout(() => {
      setMsgStyles('');
    }, 10000);
  };

  const existBook = () => {
    if (books.filter((ele) => ele.title === book.title).length > 0) return true;
    return false;
  };

  const validForm = () => {
    setBook({
      ...book,
      title: book.title.trim(),
      author: book.author.trim(),
    });

    if (!validString(book.title)) {
      document.getElementById('form-title').focus();
      displayMessage('error', 'Title field only allows alphanumeric, hyphens, underscores, and max 100 characters.');
      return false;
    }
    if (existBook(book.title)) {
      document.getElementById('form-title').focus();
      displayMessage('error', 'There is already a book with this title.');
      return false;
    }
    if (book.category === '') {
      document.getElementById('form-category').focus();
      displayMessage('error', 'Select a category.');
      return false;
    }
    if (!validString(book.author)) {
      document.getElementById('form-author').focus();
      displayMessage('error', 'Author field only allows alphanumeric, hyphens, underscores, and max 100 characters.');
      return false;
    }
    if (!validNumber(book.totalCaps) || book.totalCaps < 5 || book.totalCaps > 500) {
      document.getElementById('form-totalCaps').focus();
      displayMessage('error', 'Enter the total number of chapters. Allowed interval: 5 - 200');
      return false;
    }
    return true;
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (validForm()) {
      dispatch(addBookAPI(book));
      setBook(
        {
          id: uuidv4(),
          title: '',
          author: '',
          category: '',
          totalCaps: 5,
          currentCap: 1,
        },
      );
      displayMessage('success', 'Book added successfully');
    }
  };

  const randomCap = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);

  const onChangeTitle = (e) => {
    setBook({ ...book, title: e.target.value });
  };

  const onChangeAuthor = (e) => {
    setBook({ ...book, author: e.target.value });
  };

  const onChangeCategory = (e) => {
    setBook({ ...book, category: e.target.value });
  };

  const onChangeTotalCaps = (e) => {
    setBook({ ...book, totalCaps: +e.target.value, currentCap: randomCap(1, e.target.value - 2) });
  };

  return (
    <section className="form__section">
      <h2 className="section__title">ADD NEW BOOK</h2>
      <form className="book__form">
        <input type="text" className="book__form-title" id="form-title" placeholder="Book title" onChange={onChangeTitle} value={book.title} />
        <select className="book__form-category" id="form-category" onChange={onChangeCategory} value={book.category}>
          <option value="">Category</option>
          <option value="Action">Action</option>
          <option value="Fiction">Fiction</option>
          <option value="Novel">Novel</option>
          <option value="Detective Novel">Detective Novel</option>
        </select>
        <input type="text" className="book__form-author" id="form-author" placeholder="Author" onChange={onChangeAuthor} value={book.author} />
        <label htmlFor="form-totalCaps" className="form__label">
          Total chapters:
          <input type="number" className="book__form-totalCaps" id="form-totalCaps" min="5" max="200" onChange={onChangeTotalCaps} value={book.totalCaps} />
        </label>
        <button type="submit" className="btn book__form-btn" onClick={submitBookToStore}>ADD BOOK</button>
        <span className={'form__message'.concat(msgStyles)} id="form__message">{msg}</span>
      </form>
    </section>
  );
};

export default BookInput;
