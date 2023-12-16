import { useState } from 'react';
import HeaderLink from './HeaderLink';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMaterialSvg from '../../../../Svg/HeaderSvg/UserMaterialSvg';
import UserMaterialFocusSvg from '../../../../Svg/HeaderSvg/UserMaterialFocusSvg';
import WorkshopSvg from '../../../../Svg/HeaderSvg/WorkshopSvg';
import WorkshopFocusSvg from '../../../../Svg/HeaderSvg/WorkshopFocusSvg';
import UserCabinetFocusSvg from '../../../../Svg/HeaderSvg/UserCabinetFocusSvg';
import UserCabinetSvg from '../../../../Svg/HeaderSvg/UserCabinetSvg';

import style from './style.module.css';

function UserHeader({ size }) {
  const master = useSelector((state) => state.user.master);

  const location = useLocation();

  const [buttonSendHovered, setButtonSendHovered] = useState(false);
  const [buttonWorkshopHovered, setButtonWorkshopHovered] = useState(false);
  const [buttonContributionHovered, setButtonContributionHovered] =
    useState(false);

  return (
    <>
      <HeaderLink path="/history/send">
        <div
          onMouseEnter={() => setButtonSendHovered(true)}
          onMouseLeave={() => setButtonSendHovered(false)}
          className={style.link__block}
        >
          <div className={style.link__img}>
            {location.pathname.indexOf('/history/send') !== -1 ||
            buttonSendHovered ? (
              <UserMaterialSvg />
            ) : (
              <UserMaterialFocusSvg />
            )}
          </div>
          <div className={style.link__title}>Отправить</div>
        </div>
      </HeaderLink>
      {master && size.clientWidth >= 1000 ? (
        <HeaderLink path="/history/workshop">
          <div
            onMouseEnter={() => setButtonWorkshopHovered(true)}
            onMouseLeave={() => setButtonWorkshopHovered(false)}
            className={style.link__block}
          >
            <div className={style.link__img}>
              {location.pathname.indexOf('/history/workshop') !== -1 ||
              buttonWorkshopHovered ? (
                <WorkshopFocusSvg />
              ) : (
                <WorkshopSvg />
              )}
            </div>
            <div className={style.link__title}>Мастерская</div>
          </div>
        </HeaderLink>
      ) : null}
      <HeaderLink path="/history/contribution">
        <div
          onMouseEnter={() => setButtonContributionHovered(true)}
          onMouseLeave={() => setButtonContributionHovered(false)}
          className={style.link__block}
        >
          <div className={style.link__img}>
            {location.pathname.indexOf('/history/contribution') !== -1 ||
            buttonContributionHovered ? (
              <UserCabinetFocusSvg />
            ) : (
              <UserCabinetSvg />
            )}
          </div>
          <div className={style.link__title}>Мой вклад</div>
        </div>
      </HeaderLink>
    </>
  );
}

export default UserHeader;
