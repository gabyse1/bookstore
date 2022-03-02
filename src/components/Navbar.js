import { NavLink } from 'react-router-dom';
import { ImUser } from 'react-icons/im';
import { useState } from 'react';

const Navbar = () => {
  const [modalMenuIcon, setModalMenuIcon] = useState('');
  const [modalMenuList, setModalMenuList] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const links = [
    { id: 1, path: '/', text: 'BOOKS' },
    { id: 2, path: '/categories', text: 'CATEGORIES' },
  ];

  const menuToggle = () => {
    if (!modalOpen) {
      setModalMenuIcon('navbar__menu-button-modal');
      setModalMenuList('navbar__menu-nav-modal');
    } else {
      setModalMenuIcon('');
      setModalMenuList('');
    }

    setModalOpen(!modalOpen);
  };

  const closeModalWindow = () => {
    if (modalOpen) {
      setModalMenuIcon('');
      setModalMenuList('');
      setModalOpen(!modalOpen);
    }
  };

  return (
    <nav className="navbar__box">
      <NavLink className="navbar__brand nav-link" to="/">Bookstore</NavLink>
      <div className="navbar__user">
        <ImUser className="navbar__user-icon" />
      </div>
      <button className={'navbar__menu-button '.concat(modalMenuIcon)} type="button" aria-label="Toggle navigation" onClick={menuToggle}>
        <span className="navbar__menu-bar" />
      </button>
      <ul className={'navbar__menu-list '.concat(modalMenuList)}>
        {
          links.map((link) => <li key={link.id} className="navbar__menu-item"><NavLink to={link.path} className="nav-link" onClick={closeModalWindow}>{link.text}</NavLink></li>)
        }
      </ul>
    </nav>
  );
};

export default Navbar;
