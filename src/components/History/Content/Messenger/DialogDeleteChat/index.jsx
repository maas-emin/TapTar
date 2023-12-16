import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { closeDialogDeleteChat } from '../../../../../redux/ducks/application';
import { removingContact } from '../../../../../redux/ducks/contacts';
import DeleteError from './DeleteError';

import style from './style.module.css';

function DialogDeleteChat() {
  const dispatch = useDispatch();

  const history = useHistory();
  const roomId = useSelector((state) => state.application.deleteChat.roomId);
  const errorStatus = useSelector((state) => state.contacts.error.status);

  const onPush = () => {
    history.push('/history/chat');
  };

  const handleDeleteMassage = () => {
    dispatch(removingContact(roomId, onPush));
  };

  const handleClose = () => {
    dispatch(closeDialogDeleteChat());
  };

  if (errorStatus) {
    return <DeleteError handleClose={handleClose} />;
  }

  return (
    <div className={style['dialog-remove']}>
      <div className={style.title}>Удалить чат</div>
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

export default DialogDeleteChat;
