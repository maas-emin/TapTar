import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import SendingFocusedSvg from '../../../../../../Svg/SideBarSvg/SendingFocusedSvg';
import SendingSvg from '../../../../../../Svg/SideBarSvg/SendingSvg';

import style from './style.module.css';

export default function AsideProcessing() {
  const location = useLocation();

  const [buttonSendHovered, setButtonSendHovered] = useState(false);

  return (
    <div className={style.aside__onprocessing}>
      <div
        className={style.nav}
        onMouseEnter={() => setButtonSendHovered(true)}
        onMouseLeave={() => setButtonSendHovered(false)}
      >
        <NavLink
          className={style.link}
          activeClassName={style.active}
          to="/history/my-materials/historian/send"
        >
          {location.pathname === '/history/my-materials/historian/send' ||
          buttonSendHovered ? (
            <SendingFocusedSvg />
          ) : (
            <SendingSvg />
          )}
          <div className={style.nav__name}>Мастер загрузки</div>
        </NavLink>
      </div>
    </div>
  );
}
