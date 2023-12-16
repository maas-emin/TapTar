import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from './Message';
import MessageFile from './MessageFile';
import { loadMessages } from '../../../../../../../redux/ducks/messages';
import {
  getOneImage,
  openDialogDeleteMessage,
} from '../../../../../../../redux/ducks/application';

import styles from '../chat.module.css';

function Messages() {
  const dispatch = useDispatch();

  const filterFromSearch = useSelector((state) => state.messages.filter);

  const messages = useSelector((state) => {
    return state.messages.messages.filter(
      (message) =>
        message.message.toUpperCase().indexOf(filterFromSearch.toUpperCase()) >
        -1,
    );
  });

  // const id = useParams().id;

  const id = useSelector((state) => state.incomingMaterials.material.room_id);

  useEffect(() => {
    if (id !== undefined) {
      dispatch(loadMessages(id));
    }
  }, [dispatch, id]);

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
