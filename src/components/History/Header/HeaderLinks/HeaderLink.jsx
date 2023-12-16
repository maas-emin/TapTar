import { React } from 'react';
import { NavLink } from 'react-router-dom';

import style from './style.module.css';

function HeaderLinks(props) {
  return (
    <NavLink
      className={style.link}
      activeClassName={style.active}
      to={props.path}
    >
      {props.children}
    </NavLink>
  );
}

export default HeaderLinks;
