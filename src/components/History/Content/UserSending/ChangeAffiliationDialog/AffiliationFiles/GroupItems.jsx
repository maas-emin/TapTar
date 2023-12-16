import ReactPlayer from 'react-player';
import CloseButton from '../../../../General/buttons/CloseButton/CloseButton';
import AudioPlayer from '../../../../General/Media/AudioPlayer/AudioPlayer';
import Document from '../../../../General/Media/Document';

import style from './style.module.css';

function GroupItems({ file, type, handleRemoveOpen }) {
  let media;
  let stylesMedia = '';

  if (type === 'photo') {
    media = (
      <img
        src={`${process.env.REACT_APP_TEPTAR_HOST}/storage/${file.path}`}
        alt="#"
      />
    );
  }
  if (type === 'video') {
    media = (
      <ReactPlayer
        width="100%"
        height="100%"
        url={`${process.env.REACT_APP_TEPTAR_HOST}/storage/${file.path}`}
        controls
      />
    );
  }
  if (type === 'audio') {
    media = <AudioPlayer path={file.path} />;
    stylesMedia = style.audio;
  }
  if (type === 'document') {
    stylesMedia = style.document;
    media = <Document path={file.path} fill="#BED1E6" />;
  }

  return (
    <div className={`${style.block} ${stylesMedia}`}>
      <div className={style.card}>
        <CloseButton
          handleClick={() => handleRemoveOpen(file)}
          width="20px"
          height="20px"
          top="-4px"
          right="-4px"
          bgColor="#fff"
        />
        <div className={`${style.cardFile} ${stylesMedia}`}>{media}</div>
        <div className={style.cardButtons}>
          <div className={style.cardBtn}></div>
        </div>
      </div>
    </div>
  );
}

export default GroupItems;
