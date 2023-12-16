import AudioSvg from '../../../../Svg/MaterialCardIcons/AudioSvg';
import DocumentSvg from '../../../../Svg/MaterialCardIcons/DocumentSvg';
import MaterialCardLogo from '../../../../Svg/MaterialCardIcons/MaterialCardLogo';
import PhotoSvg from '../../../../Svg/MaterialCardIcons/PhotoSvg';
import VideoSvg from '../../../../Svg/MaterialCardIcons/VideoSvg';

import style from './materials.module.css';

function MaterialCardComponent({ types, currentTitle, onPush, data }) {
  return (
    <div className={style.material} onClick={onPush}>
      <div className={style.materialBlock}>
        <div className={style.material__name}>{currentTitle}</div>
        <div className={style.material__date}>
          <div className={style.date__time}>{data}</div>
        </div>
        <div className={style.infoBlock}>
          <div className={style.files}>
            <div className={style.file}>
              <div className={style.fileIcon}>
                <PhotoSvg />
              </div>
              <div className={style.fileCount}>Фото - {types.photo}</div>
            </div>
            <div className={style.file}>
              <div className={style.fileIcon}>
                <VideoSvg />
              </div>
              <div className={style.fileCount}>Видео - {types.video}</div>
            </div>
            <div className={style.file}>
              <div className={style.fileIcon}>
                <AudioSvg />
              </div>
              <div className={style.fileCount}>Аудио - {types.audio}</div>
            </div>
            <div className={style.file}>
              <div className={style.fileIcon}>
                <DocumentSvg />
              </div>
              <div className={style.fileCount}>
                Документы - {types.document}
              </div>
            </div>
          </div>
          <div className={style.material__logo}>
            <MaterialCardLogo styleCard={style} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MaterialCardComponent;
