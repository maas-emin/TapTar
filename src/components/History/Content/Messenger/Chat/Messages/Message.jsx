import PropTypes from 'prop-types';
import CloseButton from '../../../../General/buttons/CloseButton/CloseButton';
import MessageTime from './MessageTime';
import { useSelector } from 'react-redux';

import styles from '../chat.module.css';

function Message({ message, handleOpenDialogDelete, roomId }) {
  const currentUserId = useSelector((state) => state.user.currentUser.id);
  const isUserProfile = currentUserId === message.user_id;

  return (
    <div className={isUserProfile ? styles.outgoing : styles.incoming}>
      {isUserProfile ? (
        <CloseButton
          handleClick={() => handleOpenDialogDelete(roomId, message.id)}
          width="20px"
          height="20px"
          top="-4px"
          left="2px"
          bgColor="#fff"
        />
      ) : null}
      <div
        className={
          isUserProfile ? styles.messageOutgoing : styles.messageIncoming
        }
      >
        <div className={styles.message}>{message.message}</div>
      </div>
      <div
        className={
          isUserProfile
            ? styles['message-time-outgoing']
            : styles['message-time-checked']
        }
      >
        <MessageTime date={message.created_at} />
      </div>
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.object.isRequired,
  profileId: PropTypes.string,
};

Message.defaultProps = {
  profileId: '',
};

export default Message;
