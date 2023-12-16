import React from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import PhotoSvg from '../../../../../../Svg/MaterialCardIcons/PhotoSvg';
import VideoSvg from '../../../../../../Svg/MaterialCardIcons/VideoSvg';
import AudioSvg from '../../../../../../Svg/MaterialCardIcons/AudioSvg';
import DocumentSvg from '../../../../../../Svg/MaterialCardIcons/DocumentSvg';
import MaterialCardLogo from '../../../../../../Svg/MaterialCardIcons/MaterialCardLogo';

import style from './style.module.css';

function Material(props) {
  const history = useHistory();
  const types = props.material?.info?.types;

  const titleSub = props.material.title.substr(0, 33);
  const title = props.material.title;

  return (
    <div
      className={style.material}
      onClick={() =>
        history.push(`/history/my-materials/show/${props.material.process_id}`)
      }
    >
      <div className={style.materialBlock}>
        <div className={style.material__name}>
          {title.length >= 33 ? `${titleSub}...` : title}
        </div>
        <div className={style.material__date}>
          <div className={style.date__time}>
            {moment(props.material.created_at)
              .locale('ru')
              .format('DD.MM.YYYY')}
          </div>
        </div>
        <div className={style.infoBlock}>
          <div className={style.files}>
            <div className={style.file}>
              <div className={style.fileIcon}>
                <PhotoSvg />
              </div>
              <div className={style.fileCount}>Фото - {types?.photo}</div>
            </div>
            <div className={style.file}>
              <div className={style.fileIcon}>
                <VideoSvg />
              </div>
              <div className={style.fileCount}>Видео - {types?.video}</div>
            </div>
            <div className={style.file}>
              <div className={style.fileIcon}>
                <AudioSvg />
              </div>
              <div className={style.fileCount}>Аудио - {types?.audio}</div>
            </div>
            <div className={style.file}>
              <div className={style.fileIcon}>
                <DocumentSvg />
              </div>
              <div className={style.fileCount}>
                Документы - {types?.document}
              </div>
            </div>
          </div>
          <MaterialCardLogo styleCard={style} />
        </div>
      </div>
    </div>
  );
}

export default Material;
