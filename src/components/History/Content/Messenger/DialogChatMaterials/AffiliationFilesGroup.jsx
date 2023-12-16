import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeShowImage } from '../../../../../redux/ducks/application';
import CloseButton from '../../../General/buttons/CloseButton/CloseButton';
import AffiliationFile from './AffiliationFile';
import MainGroup from './MainGroup';
import TextMaterial from './TextMaterial';

import style from './style.module.css';

function AffiliationFileGroups(props) {
  const dispatch = useDispatch();

  const text = useSelector((state) => state.messages.materials.text);
  const photo = useSelector((state) => state.messages.materials.photo);
  const video = useSelector((state) => state.messages.materials.video);
  const audio = useSelector((state) => state.messages.materials.audio);
  const document = useSelector((state) => state.messages.materials.document);
  const showImage = useSelector((state) => state.application.showImage);

  const handleClickClose = () => {
    dispatch(closeShowImage());
  };

  return showImage.open ? (
    <>
      <CloseButton
        bgColor="initial"
        handleClick={handleClickClose}
        width="35px"
        height="35px"
        top="10px"
        right="13px"
        boxShadow="none"
      />
      <AffiliationFile
        amount={props.amount}
        type={props.type}
        content={showImage.image}
      />
    </>
  ) : (
    <div className={style.mainGroup}>
      {text.length !== 0 ? (
        <TextMaterial title="Текст" type="text" files={text} />
      ) : null}
      {photo.length !== 0 ? (
        <MainGroup title="Фото" type="photo" files={photo} />
      ) : null}
      {audio.length ? (
        <MainGroup title="Аудио" type="audio" files={audio} />
      ) : null}
      {video.length ? (
        <MainGroup title="Видео" type="video" files={video} />
      ) : null}
      {document.length ? (
        <MainGroup title="Документ" type="document" files={document} />
      ) : null}

      <div className={style.buttons}>
        <button
          onClick={props.handleSendClick}
          className={`${style.dialog__button} ${false ? style.btn__error : ''}`}
        >
          Отправить
        </button>
        <button onClick={props.closeFilesRoom} className={style.dialog__button}>
          Отменить
        </button>
      </div>
    </div>
  );
}

export default AffiliationFileGroups;
