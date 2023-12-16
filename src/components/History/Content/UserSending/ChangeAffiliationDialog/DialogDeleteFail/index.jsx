import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFiles } from '../../../../../../redux/actions/userSendMaterial';
import { clearCauses } from '../../../../../../redux/ducks/tags';
import { deleteFileUpload } from '../../../../../../redux/ducks/application';
import { AffiliationContext } from '../context';

import style from './style.module.css';

function DialogDeleteFail({ files, handleRemoveClose }) {
  const { handleCloseAffiliation } = useContext(AffiliationContext);

  const dispatch = useDispatch();

  const deleteGroupFile = useSelector(
    (state) => state.application.deleteGroupFile,
  );

  const { open, file } = deleteGroupFile;
  const body = document.querySelector('body');

  const handleDeleteFail = () => {
    dispatch(deleteFileUpload(file));
    handleRemoveClose();
  };

  const handleDeleteGroup = () => {
    body.style.overflow = 'visible';
    dispatch(removeFiles(files));
    dispatch(clearCauses());
    handleCloseAffiliation();
    handleRemoveClose();
  };

  return (
    <div className={`${open ? style.dialog : style.active}`}>
      <div className={`${open ? style.dialog__wrapper : style.active}`}>
        {files.files.length <= 2 ? (
          <div className={style['dialog-remove']}>
            <div className={style.title}>
              В группе не может быть меньше 2 файлов
            </div>
            <div className={style.buttonsCenter}>
              <div onClick={handleDeleteGroup} className={style.button}>
                удалить группу
              </div>
              <div onClick={handleRemoveClose} className={style.button}>
                отмена
              </div>
            </div>
          </div>
        ) : (
          <div className={style['dialog-remove']}>
            <div className={style.title}>Вы уверены</div>
            <div className={style.buttons}>
              <div onClick={handleDeleteFail} className={style.button}>
                Да
              </div>
              <div onClick={handleRemoveClose} className={style.button}>
                Нет
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DialogDeleteFail;
