import { NavLink } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

const Navbar = () => {
  const links = [
    { id: 1, path: '/', text: 'BOOKS' },
    { id: 2, path: '/categories', text: 'CATEGORIES' },
  ];

  return (
    <nav className="navbar__box">
      <NavLink className="navbar__brand nav-link" to="/">Bookstore</NavLink>
      <ul className="navbar__menu-list">
        {
          links.map((link) => <li key={link.id} className="navbar__menu-item"><NavLink to={link.path} className="nav-link">{link.text}</NavLink></li>)
        }
      </ul>
      <div className="navbar__user">
        <ImUser className="navbar__user-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
