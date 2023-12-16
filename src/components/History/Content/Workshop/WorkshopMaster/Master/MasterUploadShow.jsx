import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import AudioPlayer from '../../../../General/Media/AudioPlayer/AudioPlayer';
import Document from '../../../../General/Media/Document';

function MasterUploadShow() {
  const file = useSelector((state) => state.workshop.file);

  let media;

  if (file?.type === 'photo') {
    media = (
      <img
        src={`${process.env.REACT_APP_TEPTAR_HOST}/storage/${file?.path}`}
        alt=""
      />
    );
  }
  if (file?.type === 'video') {
    media = (
      <ReactPlayer
        width="100%"
        height="100%"
        url={`${process.env.REACT_APP_TEPTAR_HOST}/storage/${file?.path}`}
        controls
      />
    );
  }
  if (file?.type === 'document') {
    media = <Document path={file?.path} fill="#BED1E6" />;
  }
  if (file?.type === 'audio') {
    media = <AudioPlayer path={file?.path} />;
  }

  return media;
}

export default MasterUploadShow;
