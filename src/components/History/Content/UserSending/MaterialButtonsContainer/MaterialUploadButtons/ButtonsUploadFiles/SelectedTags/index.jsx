import CloseButton from '../../../../../../General/buttons/CloseButton/CloseButton';
import { postFilesGroup } from '../../../../../../../../redux/ducks/uploadFiles';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import {
  checkCauses,
  clearCauses,
  deleteCauses,
} from '../../../../../../../../redux/ducks/tags';

import style from './style.module.css';
import { closeTagsUploadFiles } from '../../../../../../../../redux/ducks/application';

function SelectedTags() {
  const dispatch = useDispatch();

  const causes = useSelector((state) => state.tags.causes);
  const causesID = useSelector((state) => state.tags.causesID);

  const format = useSelector((state) => state.application.tagsUploadFiles.type);

  function fileUploadHandler(event) {
    const files = [...event.target.files];

    if (causesID.length === 0) {
      return;
    }

    if (!files.length) {
      return;
    }

    const filterFiles = files.filter((file) => {
      if (!file.type.match(format)) {
        return false;
      }
      return true;
    });

    if (format === 'image') {
      dispatch(postFilesGroup(filterFiles, 'photo', causesID));
    } else if (format === 'application') {
      dispatch(postFilesGroup(filterFiles, 'document', causesID));
    } else {
      dispatch(postFilesGroup(filterFiles, format, causesID));
    }

    dispatch(closeTagsUploadFiles());
    event.target.value = null;
  }

  const handleClose = () => {
    dispatch(closeTagsUploadFiles());
    dispatch(clearCauses());
  };

  const handleSelectedCauses = (caus) => {
    dispatch(checkCauses(caus));
  };

  const handleDeleteCauses = (caus) => {
    dispatch(deleteCauses(caus));
  };

  return (
    <div className={style.tags}>
      <CloseButton
        handleClick={handleClose}
        width="30px"
        height="30px"
        top="-13px"
        right="-10px"
        bgColor="#fff"
      />
      <div className={style.tags__title}>
        ВЫБЕРИТЕ ОБЩИЕ ХАРАКТЕРИСТИКИ ФАЙЛОВ
      </div>
      <div className={style.checkBox}>
        {causes.map((caus) => {
          const check = causesID.some((item) => item === caus.id);
          return (
            <div
              key={caus.id}
              className={`${style.check} ${check ? style.active : ''}`}
              onClick={
                !check
                  ? () => handleSelectedCauses(caus)
                  : () => handleDeleteCauses(caus.id)
              }
            >
              <div className={style.checkCircle}>
                <div
                  className={`${style.circleInner} ${
                    !check ? style['circleInner--active'] : ''
                  }`}
                ></div>
              </div>
              <div
                className={`${style.check__label} ${
                  check ? style.checked : ''
                }`}
              >
                {caus.title}
              </div>
            </div>
          );
        })}
      </div>

      <div className={style.button}>
        <label
          className={`${style.tags__button} ${
            causesID.length === 0 ? style['tags__button--disabled'] : ''
          }`}
          htmlFor="groupFiles"
        >
          ДАЛЕЕ
        </label>
        {format === 'application' ? (
          <input
            disabled={causesID.length === 0}
            accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf"
            onChange={(event) => fileUploadHandler(event)}
            type="file"
            id="groupFiles"
            name="groupFiles"
            multiple={true}
          />
        ) : (
          <input
            disabled={causesID.length === 0}
            accept={`${format}/*`}
            onChange={(event) => fileUploadHandler(event)}
            multiple={true}
            type="file"
            id="groupFiles"
            name="groupFiles"
          />
        )}
      </div>
    </div>
  );
}

export default SelectedTags;
