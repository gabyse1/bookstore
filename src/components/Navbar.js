import { NavLink } from 'react-router-dom';

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
    </nav>
  );
};

export default Navbar;
