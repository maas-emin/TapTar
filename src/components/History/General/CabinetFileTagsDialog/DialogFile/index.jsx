import ReactPlayer from 'react-player';
import AudioPlayer from '../../Media/AudioPlayer/AudioPlayer';
import Document from '../../Media/Document';

import style from './style.module.css';

function DialogFile(props) {
  let media = null;
  let stylesMedia = null;

  if (props.format === 'photo') {
    media = (
      <img
        src={`${process.env.REACT_APP_TEPTAR_HOST}/storage/${props.content.path_to_file}`}
        alt="#"
      />
    );
  }
  if (props.format === 'video') {
    media = (
      <ReactPlayer
        width="100%"
        height="100%"
        url={`${process.env.REACT_APP_TEPTAR_HOST}/storage/${props.content.path_to_file}`}
        controls
      />
    );
  }
  if (props.format === 'audio') {
    media = <AudioPlayer path={props.content.path_to_file} />;
    stylesMedia = style.audioPlayer;
  }
  if (props.format === 'text') {
    media = (
      <textarea
        disabled
        value={props.content.text}
        className={style['form__input-text']}
        type="text"
        name="text"
        placeholder="Введите текст..."
      />
    );
    stylesMedia = style.textarea;
  }
  if (props.format === 'document') {
    media = <Document fill="#FFFFFF" path={props.content.path_to_file} />;
    stylesMedia = style.document;
  }

  return (
    <div className={style.changeFile}>
      <div className={`${style.fileShow} ${stylesMedia}`}>
        <div className={`${style.oneFile} ${stylesMedia}`}>{media}</div>
      </div>
    </div>
  );
}

export default DialogFile;
