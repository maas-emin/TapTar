import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import AudioPlayer from '../../../../General/Media/AudioPlayer/AudioPlayer';
import Document from '../../../../General/Media/Document';
import OriginalFile from './OriginFile';
import ProcessedFile from './ProcessedFile';
import TextMaster from './TextMaster';
import MasterButtons from './MasterButtons';

import style from './style.module.css';

function Master(props) {
  const show = useSelector((state) => state.workshop.show);

  let media;
  let mediaStyles;

  if (show?.file?.type === 'photo') {
    media = (
      <img
        src={`${process.env.REACT_APP_TEPTAR_HOST}/storage/${show.file?.path_to_file}`}
        alt=""
      />
    );
    mediaStyles = '';
  }
  if (show?.file?.type === 'video') {
    media = (
      <ReactPlayer
        width="100%"
        height="100%"
        url={`${process.env.REACT_APP_TEPTAR_HOST}/storage/${show.file?.path_to_file}`}
        controls
      />
    );
    mediaStyles = '';
  }
  if (show?.file?.type === 'document') {
    media = <Document path={show.file?.path_to_file} fill="#BED1E6" />;
    mediaStyles = style.origin__document;
  }
  if (show?.file?.type === 'text') {
    media = show?.file?.text;
    mediaStyles = style.origin__text;
  }
  if (show?.file?.type === 'audio') {
    media = <AudioPlayer path={show?.file?.path_to_file} />;
    mediaStyles = style.origin__audio;
  }

  return (
    <div className={style.master__main}>
      <div className={style.master__title}>{show.file?.title}</div>
      <div className={`${style.master} ${mediaStyles}`}>
        <OriginalFile
          mediaStyles={mediaStyles}
          media={media}
          type={show?.file?.type}
        />

        <div className={`${style.processed} ${mediaStyles}`}>
          <div className={style.original__title}>Обработанный файл</div>
          {show?.file?.type === 'text' ? (
            <TextMaster
              text={props.text}
              handleChangeText={props.handleChangeText}
            />
          ) : (
            <div className={`${style.processed__file} ${mediaStyles}`}>
              <ProcessedFile fileUploadHandler={props.fileUploadHandler} />
            </div>
          )}

          <MasterButtons
            mediaStyles={mediaStyles}
            handleAddClick={props.handleAddClick}
            handleDeleteClick={props.handleDeleteClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Master;
