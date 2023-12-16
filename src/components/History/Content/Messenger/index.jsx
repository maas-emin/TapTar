import { useEffect } from 'react';
import Contacts from './Contacts';
import Chat from './Chat';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dialog from '../../General/Dialog';
import DialogSelectedTags from '../../General/DialogSelectedTags';
import DialogChatMaterials from './DialogChatMaterials';
import DialogDeleteMessage from './DialogDeleteMessage';
import DialogDeleteChat from './DialogDeleteChat';
import DialogShowImage from './DialogShowImage';
import { loadContacts } from '../../../../redux/ducks/contacts';

import styles from './style.module.css';

function Messenger() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadContacts());
  }, [dispatch]);

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
          <Redirect to="/history/chat" />
        </Switch>
      </div>
      <Dialog open={dialogMaterials}>
        <DialogChatMaterials open={dialogMaterials} />
      </Dialog>
      <DialogSelectedTags open={deleteMessage}>
        <DialogDeleteMessage open={deleteMessage} />
      </DialogSelectedTags>
      <DialogSelectedTags open={deleteChat}>
        <DialogDeleteChat open={deleteChat} />
      </DialogSelectedTags>
      <DialogSelectedTags open={showImage}>
        <DialogShowImage open={showImage} />
      </DialogSelectedTags>
    </div>
  );
}

export default Messenger;
