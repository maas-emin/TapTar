import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAvatar } from '../../../../../redux/ducks/user';
import AvatarAddSvg from '../../../../../Svg/ProfileSvg/AvatarAddSvg';

import style from './style.module.css';

function AddAvatar({ editUser }) {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.user.currentUser);

  function avatarUploadHandler(event) {
    const file = event.target.files[0];

    if (!event.target.files.length) {
      return;
    }
    if (!file.type.match('image')) {
      return;
    }

    dispatch(addAvatar(file));
  }

  return (
    <div
      className={`${style.userAvatar} ${editUser ? style.userAvatarAdd : ''}`}
    >
      <div className={style.editAvatarBlock}>
        {currentUser.avatar ? (
          <img
            className={style.editImage}
            src={`${process.env.REACT_APP_TEPTAR_HOST}/storage/avatars/${currentUser.avatar}`}
            alt="#"
          />
        ) : null}
        <label htmlFor="avatar" className={style.avatarIcon}>
          <div className={style.avatarSvgAdd}>
            <AvatarAddSvg />
          </div>
        </label>
        <input
          className={style.avatarInput}
          accept="image/*"
          onChange={(event) => avatarUploadHandler(event)}
          type="file"
          id="avatar"
          name="avatar"
        />
      </div>
    </div>
  );
}

export default AddAvatar;
