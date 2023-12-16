import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import AudioPlayer from '../../Media/AudioPlayer/AudioPlayer';
import Document from '../../Media/Document';
import SvgIcons from './SvgIcons';

import style from './style.module.css';

function AffiliationFile(props) {
  let media = null;
  let stylesMedia = '';
  let changeFileStyle = '';

  const files = useSelector((state) => state.uploadFiles.files);

  if (files.type === 'photo') {
    media = (
      <img
        src={`${process.env.REACT_APP_TEPTAR_HOST}/storage/${files.path}`}
        alt="#"
      />
    );
    changeFileStyle = style.changeFile;
  }
  if (files.type === 'video') {
    changeFileStyle = style.changeFile;
    media = (
      <ReactPlayer
        width="100%"
        height="100%"
        url={`${process.env.REACT_APP_TEPTAR_HOST}/storage/${files.path}`}
        controls
      />
    );
  }
  if (files.type === 'audio') {
    media = <AudioPlayer path={files.path} />;
    stylesMedia = style.audio;
    changeFileStyle = style.changeFileAudio;
  }
  if (files.type === 'text') {
    changeFileStyle = style.changeFile;
    stylesMedia = style.affilText;
    media = (
      <textarea
        disabled
        value={files.text}
        className={style['form__input-text']}
        type="text"
        name="text"
      />
    );
  }
  if (files.type === 'document') {
    changeFileStyle = style.changeFileGroup;
    media = <Document path={files.path} fill="#BED1E6" />;
    stylesMedia = style.document;
  }
  if (files.group) {
    stylesMedia = style.document;
    changeFileStyle = style.changeFileGroup;
  }

  return (
    <div className={changeFileStyle}>
      <div className={`${style.fileShow} ${stylesMedia}`}>
        {!files.group ? (
          <div className={`${style.oneFile} ${stylesMedia}`}>{media}</div>
        ) : (
          <div className={style.fileIcons} onClick={props.openShowGroupFiles}>
            <div className={style.fileSvg}>
              <SvgIcons />
            </div>
            <p>Группа файлов</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AffiliationFile;
