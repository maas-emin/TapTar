import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PhotoSvg from '../../../../../../Svg/SideBarSvg/PhotoSvg';
import PhotoFocusedSvg from '../../../../../../Svg/SideBarSvg/PhotoFocusedSvg';
import DocumentFocusedSvg from '../../../../../../Svg/SideBarSvg/DocumentFocusedSvg';
import DocumentSvg from '../../../../../../Svg/SideBarSvg/DocumentSvg';
import VideoFocusedSvg from '../../../../../../Svg/SideBarSvg/VideoFocusedSvg';
import VideoSvg from '../../../../../../Svg/SideBarSvg/VideoSvg';
import AudioFocusedSvg from '../../../../../../Svg/SideBarSvg/AudioFocusedSvg';
import AudioSvg from '../../../../../../Svg/SideBarSvg/AudioSvg';
import { postFileHistorian } from '../../../../../../redux/ducks/uploadFiles';

import style from './style.module.css';

function MaterialUploadButtons({ fileAdd, handleClick }) {
  const dispatch = useDispatch();

  const [buttonPhotoHovered, setButtonPhotoHovered] = useState(false);
  const [buttonVideoHovered, setButtonVideoHovered] = useState(false);
  const [buttonAudioHovered, setButtonAudioHovered] = useState(false);
  const [buttonDocumentHovered, setButtonDocumentHovered] = useState(false);

  function fileUploadHandler(event, format) {
    const file = event.target.files[0];

    if (!event.target.files.length) {
      return;
    }
    if (!file.type.match(format)) {
      return;
    }

    if (format === 'image') {
      dispatch(postFileHistorian(file, 'photo'));
    } else if (format === 'application') {
      dispatch(postFileHistorian(file, 'document'));
    } else {
      dispatch(postFileHistorian(file, format));
    }

    event.target.value = null;
  }

  return (
    <>
      <div
        className={`${style.fails__box} ${
          !fileAdd ? style['fails__box--active'] : ''
        }`}
      >
        <div
          className={`${style.fails__block} ${
            fileAdd ? style.block__active : ''
          }`}
        >
          <label
            htmlFor="uploadImage"
            onMouseEnter={() => setButtonPhotoHovered(true)}
            onMouseLeave={() => setButtonPhotoHovered(false)}
            className={style.block__item}
          >
            {buttonPhotoHovered ? (
              <PhotoFocusedSvg color="#fff" styleName={'uploadSvg'} />
            ) : (
              <PhotoSvg color="#fff" styleName={'uploadSvg'} />
            )}
            <p className={style.block__name}>Фото</p>
          </label>
          <input
            className={style.uploadInput}
            accept={`image/*`}
            onChange={(event) => fileUploadHandler(event, 'image')}
            type="file"
            id="uploadImage"
            name="uploadImage"
          />
          <label
            onMouseEnter={() => setButtonDocumentHovered(true)}
            onMouseLeave={() => setButtonDocumentHovered(false)}
            htmlFor="uploadDocument"
            className={style.block__item}
          >
            {buttonDocumentHovered ? (
              <DocumentFocusedSvg color="#fff" styleName={'uploadSvg'} />
            ) : (
              <DocumentSvg color="#fff" styleName={'uploadSvg'} />
            )}
            <p className={style.block__name}>Документы</p>
          </label>
          <input
            className={style.uploadInput}
            accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf"
            onChange={(event) => fileUploadHandler(event, 'application')}
            type="file"
            id="uploadDocument"
            name="uploadDocument"
          />
          <label
            onMouseEnter={() => setButtonVideoHovered(true)}
            onMouseLeave={() => setButtonVideoHovered(false)}
            htmlFor="uploadVideo"
            className={style.block__item}
          >
            {buttonVideoHovered ? (
              <VideoFocusedSvg color="#fff" styleName={'uploadSvg'} />
            ) : (
              <VideoSvg color="#fff" styleName={'uploadSvg'} />
            )}
            <p className={style.block__name}>Видео</p>
          </label>
          <input
            className={style.uploadInput}
            accept={`video/*`}
            onChange={(event) => fileUploadHandler(event, 'video')}
            type="file"
            id="uploadVideo"
            name="uploadVideo"
          />
          <label
            onMouseEnter={() => setButtonAudioHovered(true)}
            onMouseLeave={() => setButtonAudioHovered(false)}
            htmlFor="uploadAudio"
            className={style.block__item}
          >
            {buttonAudioHovered ? (
              <AudioFocusedSvg color="#fff" styleName={'uploadSvg'} />
            ) : (
              <AudioSvg color="#fff" styleName={'uploadSvg'} />
            )}
            <p className={style.block__name}>Аудио</p>
          </label>
          <input
            className={style.uploadInput}
            accept={`audio/*`}
            onChange={(event) => fileUploadHandler(event, 'audio')}
            type="file"
            id="uploadAudio"
            name="uploadAudio"
          />
        </div>
        <div
          onClick={handleClick}
          className={`${style['fails__add-text']} ${
            !fileAdd ? style['fails__add-text--active'] : ''
          }`}
        >
          Добавить файл
        </div>
      </div>
    </>
  );
}

export default MaterialUploadButtons;
