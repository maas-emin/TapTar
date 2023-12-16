import ReactPlayer from 'react-player';
import AudioPlayer from '../../../General/Media/AudioPlayer/AudioPlayer';

import style from './style.module.css';

function AffiliationFile(props) {
  let media = null;
  let stylesMedia = '';

  if (props.type === 'photo') {
    media = (
      <img
        src={`${process.env.REACT_APP_TEPTAR_HOST}/storage/${
          props.content.path || props.content.files[0].path
        }`}
        alt="#"
      />
    );
    stylesMedia = style.imageShow;
  }
  if (props.type === 'video') {
    media = (
      <ReactPlayer
        width="100%"
        height="100%"
        url={`${process.env.REACT_APP_TEPTAR_HOST}/storage/${
          props.content.path || props.content.files[0].path
        }`}
        controls
      />
    );
  }
  if (props.type === 'audio') {
    media = (
      <AudioPlayer path={props.content.path || props.content.files[0].path} />
    );
    stylesMedia = style.audio;
  }

  return (
    <div className={`${style.fileShow} ${stylesMedia}`}>
      <div className={`${style.oneFile} ${stylesMedia}`}>{media}</div>
    </div>
  );
}

export default AffiliationFile;
