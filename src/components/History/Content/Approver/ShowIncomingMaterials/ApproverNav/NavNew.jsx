import { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import NewFocusedIcon from '../../../../../../Svg/HistorianNavIcons/NewFocusedIcon';
import NewIcon from '../../../../../../Svg/HistorianNavIcons/NewIcon';

import style from './style.module.css';

function NavNew() {
  const location = useLocation();

  const [buttonNewHovered, setButtonNewHovered] = useState(false);

  return (
    <div
      className={style.nav}
      onMouseEnter={() => setButtonNewHovered(true)}
      onMouseLeave={() => setButtonNewHovered(false)}
    >
      <NavLink
        exact
        className={style.link}
        activeClassName={style.active}
        to="/history/approver"
      >
        {location.pathname === '/history/approver' || buttonNewHovered ? (
          <NewFocusedIcon />
        ) : (
          <NewIcon />
        )}
        <div className={style.nav__name}>Новые материалы</div>
      </NavLink>
    </div>
  );
}

export default NavNew;
