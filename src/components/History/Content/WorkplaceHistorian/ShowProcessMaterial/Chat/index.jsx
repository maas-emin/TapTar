import { useEffect } from 'react';
import Messages from './Messages';
import ChatHeader from './Header';
import InputForMessage from './InputForMessage';
import CloseButton from '../../../../General/buttons/CloseButton/CloseButton';
import { useDispatch, useSelector } from 'react-redux';
import {
  savedIncomingMassage,
  savedMassage,
} from '../../../../../../redux/ducks/messages';
import Echo from 'laravel-echo';
import { closeHistorianChat } from '../../../../../../redux/ducks/application';

import styles from './chat.module.css';

function Chat() {
  const dispatch = useDispatch();

  const currentUserId = useSelector((state) => state.user.currentUser.id);

  const token = useSelector((state) => state.user.token);
  const id = useSelector((state) => state.incomingMaterials.material.room_id);

  window.io = require('socket.io-client');
  const echo = new Echo({
    broadcaster: 'socket.io',
    host: process.env.REACT_APP_TEPTAR_HOST,
    auth: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  useEffect(() => {
    echo.private(`room.${id}`).listen('.message.send', function (e) {
      // Функция которая сработает, когда другой пользователь отправить нам чат, все данные в аргументе "e" будут
      if (e.data.user_id !== currentUserId)
        return dispatch(savedIncomingMassage(e));
      return dispatch(savedMassage(e));
    });

    return () => {
      echo.leave(`room.${id}`);
    };
  }, [dispatch, id, currentUserId]);

  const handleCloseChat = () => {
    echo.leave(`room.${id}`);
    dispatch(closeHistorianChat());
  };

  return (
    <div className={styles.chat}>
      <CloseButton
        bgColor="#fff"
        handleClick={handleCloseChat}
        width="25px"
        height="25px"
        top="10px"
        right="10px"
      />
      <ChatHeader />
      <div className={styles.container}>
        <Messages />
        <InputForMessage />
      </div>
      <div className={styles.triangle}>
        <svg viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13 23L0.00961679 0.500002L25.9904 0.5L13 23Z"
            fill="#BED1E6"
          />
        </svg>
      </div>
    </div>
  );
}

export default Chat;
