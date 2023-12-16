import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import AudioPlayer from '../../../../../General/Media/AudioPlayer/AudioPlayer';
import Document from '../../../../../General/Media/Document';
import MasterEffects from '../MasterEffects';

import style from './style.module.css';

function AffiliationFile() {
  const files = useSelector((state) => state.uploadFiles.files);

  let media = null;
  let stylesMedia = null;

  if (files.type === 'photo') {
    media = (
      <img
        src={`${process.env.REACT_APP_TEPTAR_HOST}/storage/${files.path}`}
        alt="#"
      />
    );
  }
  if (files.type === 'video') {
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
    stylesMedia = style.audioPlayer;
  }
  if (files.type === 'text') {
    media = (
      <textarea
        disabled
        value={files.text}
        className={style['form__input-text']}
        type="text"
        name="text"
        placeholder="Введите текст..."
      />
    );
    stylesMedia = style.textarea;
  }
  if (files.type === 'document') {
    media = <Document fill="#fff" path={files.path} />;
    stylesMedia = style.document;
  }

  return (
    <div className={style.changeFile}>
      <div className={`${style.fileShow} ${stylesMedia}`}>
        <div className={`${style.oneFile} ${stylesMedia}`}>{media}</div>
      </div>
      <MasterEffects />
    </div>
  );
}

export default AffiliationFile;
