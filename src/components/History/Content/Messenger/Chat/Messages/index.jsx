import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from './Message';
import MessageFile from './MessageFile';
import { useParams } from 'react-router-dom';
import {
  loadMessages,
  savedIncomingMassage,
  savedMassage,
} from '../../../../../../redux/ducks/messages';
import Echo from 'laravel-echo';
import {
  getOneImage,
  openDialogDeleteMessage,
} from '../../../../../../redux/ducks/application';

import styles from '../chat.module.css';

function Messages() {
  const dispatch = useDispatch();

  const filterFromSearch = useSelector((state) => state.messages.filter);
  const currentUserId = useSelector((state) => state.user.currentUser.id);

  const token = useSelector((state) => state.user.token);

  const messages = useSelector((state) => {
    return state.messages.messages.filter(
      (message) =>
        message.message.toUpperCase().indexOf(filterFromSearch.toUpperCase()) >
        -1,
    );
  });

  const id = useParams().id;

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
    if (id !== undefined) {
      dispatch(loadMessages(id));
    }
  }, [dispatch, id]);

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

  const handleOpenDialogDelete = (roomId, messageId) => {
    dispatch(openDialogDeleteMessage(roomId, messageId));
  };

  const handleShowImage = (path) => {
    dispatch(getOneImage(path));
  };

  return (
    <div className={styles.messages} id="messages-block">
      {messages.map((message) => {
        if (message.type !== 'text') {
          return (
            <MessageFile
              handleOpenDialogDelete={handleOpenDialogDelete}
              message={message}
              key={message.id}
              roomId={id}
              handleShowImage={handleShowImage}
            />
          );
        }

        return (
          <Message
            handleOpenDialogDelete={handleOpenDialogDelete}
            message={message}
            key={message.id}
            roomId={id}
          />
        );
      })}
    </div>
  );
}

export default Messages;
