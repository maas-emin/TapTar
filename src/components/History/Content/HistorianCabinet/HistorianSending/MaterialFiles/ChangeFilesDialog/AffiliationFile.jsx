import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import AudioPlayer from '../../../../../General/Media/AudioPlayer/AudioPlayer';
import MasterEffects from './MasterEffects';
import Document from '../../../../../General/Media/Document';

import style from './style.module.css';

function AffiliationFile(props) {
  let media;
  let stylesMedia;

  const handleChange = (e) => {
    props.setLocalEffects({
      ...props.content,
      text: e.target.value,
    });
  };

  if (props.format === 'photo') {
    media = (
      <img
        src={`${process.env.REACT_APP_TEPTAR_HOST}/storage/${props.content.path}`}
        alt="#"
      />
    );
  }
  if (props.format === 'video') {
    media = (
      <ReactPlayer
        width="100%"
        height="100%"
        url={`${process.env.REACT_APP_TEPTAR_HOST}/storage/${props.content.path}`}
        controls
      />
    );
  }
  if (props.format === 'audio') {
    media = <AudioPlayer path={props.content.path} />;
    stylesMedia = style.audioPlayer;
  }
  if (props.format === 'text') {
    media = (
      <textarea
        value={props.content.text}
        onChange={handleChange}
        className={style['form__input-text']}
        type="text"
        name="text"
        placeholder="Введите текст..."
      />
    );
    stylesMedia = style.textarea;
  }
  if (props.format === 'document') {
    media = <Document fill="#FFFFFF" path={props.content.path} />;
    stylesMedia = style.document;
  }

  return (
    <div className={style.changeFile}>
      <div className={`${style.fileShow} ${stylesMedia}`}>
        <div className={`${style.oneFile} ${stylesMedia}`}>{media}</div>
      </div>
      <MasterEffects
        setLocalEffects={props.setLocalEffects}
        localEffects={props.localEffects}
      />
    </div>
  );
}

export default AffiliationFile;
