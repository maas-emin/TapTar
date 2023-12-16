import React from 'react';
import CloseButton from '../../../../General/buttons/CloseButton/CloseButton';
import ProcessIcons from '../ProcessIcons';
import { useDispatch } from 'react-redux';
import { openDialogDeleteUserSend } from '../../../../../../redux/ducks/application';

import style from '../listStyles.module.css';

function Image(props) {
  const dispatch = useDispatch();

  const handleRemoveOpen = () => {
    dispatch(openDialogDeleteUserSend(props.item));
  };

  return (
    <div className={style.block}>
      <CloseButton
        handleClick={handleRemoveOpen}
        width="20px"
        height="20px"
        top="-4px"
        right="-4px"
        bgColor="#fff"
      />
      {!props.item.group_uid ? null : (
        <>
          <div className={style.itemBgFirst}></div>
          <div className={style.itemBgSecond}></div>
        </>
      )}
      <div className={style.item}>
        <div className={style.image}>
          <img
            src={`${process.env.REACT_APP_TEPTAR_HOST}/storage/${props.image.path}`}
            alt="404"
          />
        </div>
        <ProcessIcons file={props.item} />
      </div>
      {!props.item.group_uid ? (
        <p className={style.name}>
          {props.image.title ? props.item.title : 'Нет названия'}
        </p>
      ) : (
        <p className={style.name}>
          {props.item.title ? props.item.title : 'Нет названия'}
        </p>
      )}
    </div>
  );
}

export default Image;
