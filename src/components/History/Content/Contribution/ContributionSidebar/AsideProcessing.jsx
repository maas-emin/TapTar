import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import MaterialFocusedSvg from '../../../../../Svg/SideBarSvg/MaterialFocusedSvg';
import MaterialSvg from '../../../../../Svg/SideBarSvg/MaterialSvg';

import style from './style.module.css';

export default function AsideProcessing() {
  const location = useLocation();

  const [buttonMaterialAllHovered, setButtonMaterialAllHovered] =
    useState(false);

  return (
    <div className={style.aside__onprocessing}>
      <div className={style.aside__title}>На обработке</div>
      <div
        className={style.nav}
        onMouseEnter={() => setButtonMaterialAllHovered(true)}
        onMouseLeave={() => setButtonMaterialAllHovered(false)}
      >
        <NavLink
          exact
          className={style.link}
          activeClassName={style.active}
          to="/history/contribution"
        >
          {location.pathname === '/history/contribution' ||
          buttonMaterialAllHovered ? (
            <MaterialFocusedSvg />
          ) : (
            <MaterialSvg />
          )}
          <div className={style.nav__name}>Материалы</div>
        </NavLink>
      </div>
    </div>
  );
}
