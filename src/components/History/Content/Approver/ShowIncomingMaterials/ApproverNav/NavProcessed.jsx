import { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import ProcessedFocusedIcon from '../../../../../../Svg/HistorianNavIcons/ProcessedFocusedIcon';
import ProcessedIcon from '../../../../../../Svg/HistorianNavIcons/ProcessedIcon';

import style from './style.module.css';

function NavProcessed() {
  const location = useLocation();

  const [buttonProcessedHovered, setButtonProcessedHovered] = useState(false);

  return (
    <div
      className={style.nav}
      onMouseEnter={() => setButtonProcessedHovered(true)}
      onMouseLeave={() => setButtonProcessedHovered(false)}
    >
      <NavLink
        className={style.link}
        activeClassName={style.active}
        to="/history/approver/processed"
      >
        {location.pathname === '/history/approver/processed' ||
        buttonProcessedHovered ? (
          <ProcessedFocusedIcon />
        ) : (
          <ProcessedIcon />
        )}
        <div className={style.nav__name}>Утвержденные</div>
      </NavLink>
    </div>
  );
}

export default NavProcessed;
