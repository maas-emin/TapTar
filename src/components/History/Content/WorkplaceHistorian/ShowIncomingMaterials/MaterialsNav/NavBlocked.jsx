import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import BlockedFocusedIcon from '../../../../../../Svg/HistorianNavIcons/BlockedFocusedIcon';
import BlockedIcon from '../../../../../../Svg/HistorianNavIcons/BlockedIcon';

import style from './style.module.css';

function NavBlocked() {
  const location = useLocation();

  const [buttonBlockedHovered, setButtonBlockedHovered] = useState(false);

  return (
    <div
      className={style.nav}
      onMouseEnter={() => setButtonBlockedHovered(true)}
      onMouseLeave={() => setButtonBlockedHovered(false)}
    >
      <NavLink
        className={style.link}
        activeClassName={style.active}
        to="/history/incoming-materials/blocked"
      >
        {location.pathname === '/history/incoming-materials/blocked' ||
        buttonBlockedHovered ? (
          <BlockedFocusedIcon />
        ) : (
          <BlockedIcon />
        )}
        <div className={style.nav__name}>Отклоненные</div>
      </NavLink>
    </div>
  );
}

export default NavBlocked;
