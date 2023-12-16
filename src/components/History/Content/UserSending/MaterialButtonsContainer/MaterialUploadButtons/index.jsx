import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PhotoSvg from '../../../../../../Svg/SideBarSvg/PhotoSvg';
import PhotoFocusedSvg from '../../../../../../Svg/SideBarSvg/PhotoFocusedSvg';
import DocumentFocusedSvg from '../../../../../../Svg/SideBarSvg/DocumentFocusedSvg';
import DocumentSvg from '../../../../../../Svg/SideBarSvg/DocumentSvg';
import VideoFocusedSvg from '../../../../../../Svg/SideBarSvg/VideoFocusedSvg';
import VideoSvg from '../../../../../../Svg/SideBarSvg/VideoSvg';
import AudioFocusedSvg from '../../../../../../Svg/SideBarSvg/AudioFocusedSvg';
import AudioSvg from '../../../../../../Svg/SideBarSvg/AudioSvg';
import { openAmountUploadFiles } from '../../../../../../redux/ducks/application';

import style from './style.module.css';

function MaterialUploadButtons(props) {
  const dispatch = useDispatch();

  const [buttonPhotoHovered, setButtonPhotoHovered] = useState(false);
  const [buttonVideoHovered, setButtonVideoHovered] = useState(false);
  const [buttonAudioHovered, setButtonAudioHovered] = useState(false);
  const [buttonDocumentHovered, setButtonDocumentHovered] = useState(false);

  const body = document.querySelector('body');

  const handleOpen = (type) => {
    body.style.overflow = 'hidden';
    dispatch(openAmountUploadFiles(type));
  };

  return (
    <div
      className={`${style.fails__box} ${
        !props.failAdd ? style['fails__box--active'] : ''
      }`}
    >
      <div
        className={`${style.fails__block} ${
          props.failAdd ? style.block__active : ''
        }`}
      >
        <div
          onMouseEnter={() => setButtonPhotoHovered(true)}
          onMouseLeave={() => setButtonPhotoHovered(false)}
          onClick={() => handleOpen('image')}
          className={style.block__item}
        >
          {buttonPhotoHovered ? (
            <PhotoFocusedSvg color="#fff" styleName={'uploadSvg'} />
          ) : (
            <PhotoSvg color="#fff" styleName={'uploadSvg'} />
          )}
          <p className={style.block__name}>Фото</p>
        </div>
        <div
          onMouseEnter={() => setButtonDocumentHovered(true)}
          onMouseLeave={() => setButtonDocumentHovered(false)}
          onClick={() => handleOpen('application')}
          className={style.block__item}
        >
          {buttonDocumentHovered ? (
            <DocumentFocusedSvg color="#fff" styleName={'uploadSvg'} />
          ) : (
            <DocumentSvg color="#fff" styleName={'uploadSvg'} />
          )}
          <p className={style.block__name}>Документы</p>
        </div>
        <div
          onMouseEnter={() => setButtonVideoHovered(true)}
          onMouseLeave={() => setButtonVideoHovered(false)}
          onClick={() => handleOpen('video')}
          className={style.block__item}
        >
          {buttonVideoHovered ? (
            <VideoFocusedSvg color="#fff" styleName={'uploadSvg'} />
          ) : (
            <VideoSvg color="#fff" styleName={'uploadSvg'} />
          )}
          <p className={style.block__name}>Видео</p>
        </div>
        <div
          onMouseEnter={() => setButtonAudioHovered(true)}
          onMouseLeave={() => setButtonAudioHovered(false)}
          onClick={() => handleOpen('audio')}
          className={style.block__item}
        >
          {buttonAudioHovered ? (
            <AudioFocusedSvg color="#fff" styleName={'uploadSvg'} />
          ) : (
            <AudioSvg color="#fff" styleName={'uploadSvg'} />
          )}
          <p className={style.block__name}>Аудио</p>
        </div>
      </div>
      <div
        onClick={props.handleClick}
        className={`${style['fails__add-text']} ${
          !props.failAdd ? style['fails__add-text--active'] : ''
        }`}
      >
        Добавить файл
      </div>
    </div>
  );
}

export default MaterialUploadButtons;
