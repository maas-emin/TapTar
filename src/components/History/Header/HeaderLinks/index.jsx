import { useState } from 'react';
import HeaderLink from './HeaderLink';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserHeader from './UserHeader';
import ChatFocusSvg from '../../../../Svg/HeaderSvg/ChatFocusSvg';
import ChatSvg from '../../../../Svg/HeaderSvg/ChatSvg';
import ProfileFocusSvg from '../../../../Svg/HeaderSvg/ProfileFocusSvg';
import ProfileSvg from '../../../../Svg/HeaderSvg/ProfileSvg';
import HistorianHeader from './HistorianHeader';

import style from './style.module.css';

function HeaderLinks({ size }) {
  const count = useSelector((state) => state.contacts.countNewChat);
  const currentUser = useSelector((state) => state.user.currentUser);

  const [buttonChatHovered, setButtonChatHovered] = useState(false);
  const [buttonProfileHovered, setButtonProfileHovered] = useState(false);

  const location = useLocation();

  const role = currentUser.role;

  return (
    <div className={style.links}>
      {role === 'historian' ? <HistorianHeader /> : <UserHeader size={size} />}
      {size.clientWidth >= 600 ? (
        <HeaderLink path="/history/chat">
          <div
            onMouseEnter={() => setButtonChatHovered(true)}
            onMouseLeave={() => setButtonChatHovered(false)}
            className={style.link__block}
          >
            <div className={style.link__img}>
              {location.pathname.indexOf('/history/chat') !== -1 ||
              buttonChatHovered ? (
                <ChatFocusSvg />
              ) : (
                <ChatSvg />
              )}
            </div>
            <div className={style.link__title}>
              Чат {count > 0 ? `+ ${count}` : null}
            </div>
          </div>
        </HeaderLink>
      ) : null}
      <NavLink
        exact
        className={style.link}
        activeClassName={style.active}
        to="/history"
      >
        <div
          onMouseEnter={() => setButtonProfileHovered(true)}
          onMouseLeave={() => setButtonProfileHovered(false)}
          className={style.link__block}
        >
          <div className={style.link__img}>
            {location.pathname === '/history' || buttonProfileHovered ? (
              <ProfileFocusSvg />
            ) : (
              <ProfileSvg />
            )}
          </div>
          <div className={style.link__title}>Имя</div>
        </div>
      </NavLink>
    </div>
  );
}

export default HeaderLinks;
