import ReactPlayer from 'react-player';
import AudioPlayer from '../../../../General/Media/AudioPlayer/AudioPlayer';

import style from './style.module.css';

function ShowFile({ file }) {
  let media = null;
  let stylesMedia = '';

  if (file.type === 'photo') {
    media = (
      <img
        src={`${process.env.REACT_APP_TEPTAR_HOST}/storage/${
          file.path || file.files[0].path
        }`}
        alt="#"
      />
    );
    stylesMedia = style.imageShow;
  }
  if (file.type === 'video') {
    media = (
      <ReactPlayer
        width="100%"
        height="100%"
        url={`${process.env.REACT_APP_TEPTAR_HOST}/storage/${
          file.path || file.files[0].path
        }`}
        controls
      />
    );
  }
  if (file.type === 'audio') {
    media = <AudioPlayer path={file.path || file.files[0].path} />;
    stylesMedia = style.audio;
  }

  return (
    <div className={`${style.fileShow} ${stylesMedia}`}>
      <div className={`${style.oneFile} ${stylesMedia}`}>{media}</div>
    </div>
  );
}

export default ShowFile;
