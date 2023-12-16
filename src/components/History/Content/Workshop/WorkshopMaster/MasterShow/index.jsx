import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import AudioPlayer from '../../../../General/Media/AudioPlayer/AudioPlayer';
import Document from '../../../../General/Media/Document';
import OriginalFile from './OriginFile';
import ProcessedFile from './ProcessedFile';

import style from './style.module.css';

function MasterShow() {
  const show = useSelector((state) => state.workshop.show);

  let media = null;
  let mediaStyles = null;

  if (show?.file?.type === 'photo') {
    media = (
      <img
        src={`${process.env.REACT_APP_TEPTAR_HOST}/storage/${show.oldFile?.old_path}`}
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
        url={`${process.env.REACT_APP_TEPTAR_HOST}/storage/${show.oldFile?.old_path}`}
        controls
      />
    );
    mediaStyles = '';
  }
  if (show?.file?.type === 'document') {
    media = <Document path={show.oldFile?.old_path} />;
    mediaStyles = style.origin__document;
  }
  if (show?.file?.type === 'text') {
    media = show?.oldFile?.old_text;
    mediaStyles = style.origin__text;
  }
  if (show?.file?.type === 'audio') {
    media = <AudioPlayer path={show?.oldFile?.old_path} />;
    mediaStyles = style.origin__audio;
  }

  return (
    <div className={style.master__main}>
      <div className={style.master__title}>{show.file?.title}</div>
      <div className={`${style.master} ${mediaStyles}`}>
        <OriginalFile mediaStyles={mediaStyles} media={media} />

        <div className={`${style.processed} ${mediaStyles}`}>
          <div className={style.original__title}>Обработанный файл</div>
          <div className={`${style.processed__file} ${mediaStyles}`}>
            <ProcessedFile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MasterShow;
