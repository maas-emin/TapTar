import { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import ProcessingFocussedIcon from '../../../../../../Svg/HistorianNavIcons/ProcessingFocussedIcon';
import ProcessingIcon from '../../../../../../Svg/HistorianNavIcons/ProcessingIcon';

import style from './style.module.css';

function NavProcessing() {
  const location = useLocation();

  const [buttonProcessingHovered, setButtonProcessingHovered] = useState(false);

  return (
    <div
      className={style.nav}
      onMouseEnter={() => setButtonProcessingHovered(true)}
      onMouseLeave={() => setButtonProcessingHovered(false)}
    >
      <NavLink
        className={style.link}
        activeClassName={style.active}
        to="/history/approver/processing"
      >
        {location.pathname === '/history/approver/processing' ||
        buttonProcessingHovered ? (
          <ProcessingFocussedIcon />
        ) : (
          <ProcessingIcon />
        )}
        <div className={style.nav__name}>На утверждение</div>
      </NavLink>
    </div>
  );
}

export default NavProcessing;
