import React from 'react';
import { useDispatch } from 'react-redux';
import {
  openChangeAffiliationFiles,
  openShowAffiliationFiles,
} from '../../../../../../redux/ducks/application';
import AudioSvg from './Svg/AudioSvg';
import DocumentSvg from './Svg/DocumentSvg';
import ImageSvg from './Svg/ImageSvg';
import VideoSvg from './Svg/VideoSvg';
import ChangeSvg from './Svg/ChangeSvg';

import style from '../listStyles.module.css';

function ProcessIcons({ file }) {
  const dispatch = useDispatch();

  let svg = null;

  if (file.type === 'photo') {
    svg = <ImageSvg />;
  }
  if (file.type === 'video') {
    svg = <VideoSvg />;
  }
  if (file.type === 'document') {
    svg = <DocumentSvg />;
  }
  if (file.type === 'audio') {
    svg = <AudioSvg />;
  }

  const handleChangeOpen = () => {
    dispatch(openChangeAffiliationFiles(file));
  };

  const handleShowOpen = () => {
    dispatch(openShowAffiliationFiles(file));
  };

  return (
    <div className={style.icons}>
      <div className={style.icons__inner}>
        <div className={style.icon} onClick={handleChangeOpen}>
          <ChangeSvg />
        </div>
        <div className={style.icon} onClick={handleShowOpen}>
          {svg}
        </div>
      </div>
    </div>
  );
}

export default ProcessIcons;
