import React from 'react';
import Contacts from './Contacts';
import Chat from './Chat';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dialog from '../../General/Dialog';
import DialogChatMaterials from './DialogChatMaterials';
import DialogDeleteMessage from './DialogDeleteMessage';
import DialogDeleteChat from './DialogDeleteChat';
import DialogShowImage from './DialogShowImage';

import styles from './style.module.css';

function MessengerMain() {
  const dialogMaterials = useSelector(
    (state) => state.application.dialogMaterials,
  );
  const deleteMessage = useSelector(
    (state) => state.application.deleteMessage.open,
  );
  const deleteChat = useSelector((state) => state.application.deleteChat.open);
  const showImage = useSelector((state) => state.application.showImage.open);

  return (
    <div className={styles.messenger}>
      <div
        className={false ? styles['container-dark'] : styles['container']}
        name={false ? styles['dark'] : null}
      >
        <Switch>
          <Route path={'/history/chat/:id?'}>
            <Contacts />
            <div className={styles['chat_profile_block']}>
              <Chat />
            </div>
          </Route>
          <Redirect to="/history" />
        </Switch>
      </div>
      <Dialog open={dialogMaterials}>
        <DialogChatMaterials open={dialogMaterials} />
      </Dialog>
      <Dialog open={deleteMessage}>
        <DialogDeleteMessage open={deleteMessage} />
      </Dialog>
      <Dialog open={deleteChat}>
        <DialogDeleteChat open={deleteChat} />
      </Dialog>
      <Dialog open={showImage}>
        <DialogShowImage open={showImage} />
      </Dialog>
    </div>
  );
}

export default MessengerMain;
