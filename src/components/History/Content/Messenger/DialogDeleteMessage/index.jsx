import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { closeDialogDeleteMessage } from '../../../../../redux/ducks/application';
import { removingMessage } from '../../../../../redux/ducks/messages';

import style from './style.module.css';

function DialogDeleteMessage() {
  const dispatch = useDispatch();

  const roomId = useSelector((state) => state.application.deleteMessage.roomId);
  const messageId = useSelector(
    (state) => state.application.deleteMessage.messageId,
  );

  const handleDeleteMassage = () => {
    dispatch(removingMessage(roomId, messageId));
    dispatch(closeDialogDeleteMessage());
  };

  const handleClose = () => {
    dispatch(closeDialogDeleteMessage());
  };

  return (
    <div className={style['dialog-remove']}>
      <div className={style.title}>Удалить сообщение</div>
      <div className={style.buttons}>
        <div onClick={handleDeleteMassage} className={style.button}>
          Да
        </div>
        <div onClick={handleClose} className={style.button}>
          Нет
        </div>
      </div>
    </div>
  );
}

export default DialogDeleteMessage;
