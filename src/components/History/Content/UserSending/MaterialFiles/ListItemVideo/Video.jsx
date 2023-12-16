import React from 'react';
import ReactPlayer from 'react-player';
import CloseButton from '../../../../General/buttons/CloseButton/CloseButton';
import ProcessIcons from '../ProcessIcons';
import { openDialogDeleteUserSend } from '../../../../../../redux/ducks/application';
import { useDispatch } from 'react-redux';

import style from '../listStyles.module.css';

function Video(props) {
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
        <div className={style.video}>
          <ReactPlayer
            width="100%"
            height="100%"
            url={`${process.env.REACT_APP_TEPTAR_HOST}/storage/${props.video.path}`}
          />
        </div>
        <ProcessIcons file={props.item} />
      </div>
      {!props.item.group_uid ? (
        <p className={style.name}>
          {props.item.title ? props.item.title : 'Нет названия'}
        </p>
      ) : (
        <p className={style.name}>
          {props.item.title ? props.item.title : 'Нет названия'}
        </p>
      )}
    </div>
  );
}

export default Video;
