import BookInput from './BookInput';
import BookList from './BookList';

const booksArray = [
  {
    id: '1',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    category: 'Action',
  },
  {
    id: '2',
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Science Fiction',
  },
  {
    id: '3',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    category: 'Economy',
  },
];

const Home = () => (
  <main className="main">
    <BookList booksArray={booksArray} />
    <BookInput />
  </main>
);

export default Home;
