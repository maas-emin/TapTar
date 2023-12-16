import MessageTime from './MessageTime';
import MessageDropdown from './MessageDropdown';
import { useSelector } from 'react-redux';
import AudioPlayer from '../../../../../General/Media/AudioPlayer/AudioPlayer';
import ReactPlayer from 'react-player';
import Document from '../../../../../General/Media/Document';
import CloseButton from '../../../../../General/buttons/CloseButton/CloseButton';

import styles from '../chat.module.css';

function MessageFile({
  message,
  handleOpenDialogDelete,
  roomId,
  handleShowImage,
}) {
  const currentUserId = useSelector((state) => state.user.currentUser.id);
  const isUserProfile = currentUserId === message.user_id;

  // Вывод сообщения с типом инфо
  let media = null;
  let stylesMedia = '';
  let changeFileStyle = '';

  if (message.type === 'photo') {
    media = (
      <img
        onClick={() => handleShowImage(message.message)}
        src={`${process.env.REACT_APP_TEPTAR_HOST}/storage/${message.message}`}
        alt="#"
      />
    );
    changeFileStyle = styles.changeFile;
    stylesMedia = styles.image;
  }
  if (message.type === 'video') {
    changeFileStyle = styles.changeFile;
    media = (
      <ReactPlayer
        width="100%"
        height="100%"
        url={`${process.env.REACT_APP_TEPTAR_HOST}/storage/${message.message}`}
        controls
      />
    );
  }
  if (message.type === 'audio') {
    media = <AudioPlayer path={message.message} />;
    stylesMedia = styles.audio;
    changeFileStyle = styles.changeFileAudio;
  }
  if (message.type === 'document') {
    changeFileStyle = styles.changeFileGroup;
    media = <Document path={message.message} fill="#BED1E6" />;
    stylesMedia = styles.document;
  }

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
        className={`${
          styles.isUserProfile ? styles.fileOutgoing : styles.fileIncoming
        } ${stylesMedia}`}
      >
        <div className={changeFileStyle}>
          <div className={`${styles.fileShow} ${stylesMedia}`}>
            <div className={`${styles.oneFile} ${stylesMedia}`}>{media}</div>
          </div>
        </div>
        <MessageDropdown id={message.id} />
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

export default MessageFile;
