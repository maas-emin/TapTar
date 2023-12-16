import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import style from './style.module.css';

function SideBarItem({
  buttonHovered,
  setButtonHovered,
  path,
  name,
  SvgIcon,
  SvgFocusedIcon,
}) {
  const location = useLocation();

  return (
    <div
      className={style.nav}
      onMouseEnter={() => setButtonHovered(true)}
      onMouseLeave={() => setButtonHovered(false)}
    >
      <NavLink
        exact
        className={style.link}
        activeClassName={style.active}
        to={path}
      >
        {location.pathname.indexOf(path) !== -1 || buttonHovered ? (
          <SvgFocusedIcon color="#7D7D7D" styleName={'asideSvg'} />
        ) : (
          <SvgIcon color="#7D7D7D" styleName={'asideSvg'} />
        )}
        <div className={style.nav__name}>{name}</div>
      </NavLink>
    </div>
  );
}

export default React.memo(SideBarItem);
