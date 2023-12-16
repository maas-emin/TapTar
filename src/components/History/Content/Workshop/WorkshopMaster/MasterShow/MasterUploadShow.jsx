import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import AudioPlayer from '../../../../General/Media/AudioPlayer/AudioPlayer';
import Document from '../../../../General/Media/Document';

function MasterUploadShow() {
  const file = useSelector((state) => state.workshop.show.file);

  let media;

  if (file?.type === 'photo') {
    media = (
      <img
        src={`${process.env.REACT_APP_TEPTAR_HOST}/storage/${file?.path_to_file}`}
        alt=""
      />
    );
  }
  if (file?.type === 'text') {
    media = file?.text;
  }
  if (file?.type === 'video') {
    media = (
      <ReactPlayer
        width="100%"
        height="100%"
        url={`${process.env.REACT_APP_TEPTAR_HOST}/storage/${file?.path_to_file}`}
        controls
      />
    );
  }
  if (file?.type === 'document') {
    media = <Document path={file?.path_to_file} />;
  }
  if (file?.type === 'audio') {
    media = <AudioPlayer path={file?.path_to_file} />;
  }

  return media;
}

export default MasterUploadShow;
