import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import Document from '../../../../General/Media/Document';
import SvgIcons from './SvgIcons';
import AudioPlayer from '../../../../General/Media/AudioPlayer/AudioPlayer';
import { useContext } from 'react';
import { AffiliationContext } from '../context';

import style from './style.module.css';

function AffiliationFile() {
  const { openShowGroupFiles } = useContext(AffiliationContext);

  const files = useSelector((state) => state.application.changeFiles.files);

  let media = null;
  let stylesMedia = '';
  let changeFileStyle = '';

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
  if (files.group_uid) {
    stylesMedia = style.document;
    changeFileStyle = style.changeFileGroup;
  }

  return (
    <div className={changeFileStyle}>
      <div className={`${style.fileShow} ${stylesMedia}`}>
        {!files.group_uid ? (
          <div className={`${style.oneFile} ${stylesMedia}`}>{media}</div>
        ) : (
          <div className={style.fileIcons} onClick={openShowGroupFiles}>
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
