import React from 'react';
import { useSelector } from 'react-redux';
import AvatarSvg from '../../../../../Svg/ProfileSvg/AvatarSvg';

import style from './style.module.css';

function UserAvatar({ editUser }) {
  const currentUser = useSelector((state) => state.user.currentUser);

  return currentUser.avatar ? (
    <div
      className={`${style.userAvatar} ${editUser ? style.userAvatarAdd : ''}`}
    >
      <div className={style.userImg}>
        <img
          src={`${process.env.REACT_APP_TEPTAR_HOST}/storage/avatars/${currentUser.avatar}`}
          alt="#"
        />
      </div>
    </div>
  ) : (
    <div
      className={`${style.userAvatar} ${editUser ? style.userAvatarAdd : ''}`}
    >
      <div className={style.avatarSvg}>
        <AvatarSvg />
      </div>
    </div>
  );
}

export default UserAvatar;
