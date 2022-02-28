const BookInput = () => (
  <section className="form__section">
    <h2 className="section__title">ADD NEW BOOK</h2>
    <form className="book__form">
      <input type="text" className="book__form-title" id="form-title" placeholder="Book title" />
      <select className="book__form-category" id="form-category">
        <option value="">Category</option>
        <option value="Action">Action</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Economy">Economy</option>
      </select>
      <input type="text" className="book__form-author" id="form-author" placeholder="Author" />
      <button type="submit" className="btn book__form-btn">ADD BOOK</button>
      <span className="form__message" id="form__message" />
    </form>
  </section>
);

export default BookInput;
