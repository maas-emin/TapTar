import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { closeWorkplaceButtons } from '../../../../../redux/ducks/application';
import {
  addMaterialInProcess,
  deleteMaterialOfProcess,
  rejectAddInProcess,
  saveMaterialOfProcess,
  SendMaterialOfProcess,
} from '../../../../../redux/ducks/incomingMaterials';

import style from './style.module.css';

function DialogWorkWithMaterial() {
  const body = document.querySelector('body');

  let pathname = new URL(document.location).pathname;
  const pathnameSplit = pathname.split('/');
  const id = pathnameSplit[pathnameSplit.length - 1];

  const history = useHistory();
  const dispatch = useDispatch();
  const material = useSelector((state) => state.incomingMaterials.material);
  const status = useSelector(
    (state) => state.application.workplaceButtons.status,
  );

  const handleDeleteFail = () => {
    if (status === 'stop') {
      dispatch(deleteMaterialOfProcess(material.process_id));
      history.push('/history/incoming-materials');
    }
    if (status === 'send') {
      dispatch(SendMaterialOfProcess(material));
      history.push('/history/incoming-materials/processed');
    }
    if (status === 'processing') {
      dispatch(addMaterialInProcess(material.process_id));
      history.push('/history/incoming-materials/processing');
    }
    if (status === 'blocked') {
      dispatch(rejectAddInProcess(id));
      history.push('/history/incoming-materials/processing');
    }
    if (status === 'pause') {
      dispatch(saveMaterialOfProcess(material.process_id, material));
      history.push('/history/incoming-materials/processing');
    }
    handleCloseStatus();
  };

  const handleCloseStatus = () => {
    body.style.overflow = 'visible';
    dispatch(closeWorkplaceButtons());
  };

  return (
    <div className={style['dialog-remove']}>
      <div className={style.title}>Вы уверены</div>
      <div className={style.buttons}>
        <div onClick={handleDeleteFail} className={style.button}>
          Да
        </div>
        <div onClick={handleCloseStatus} className={style.button}>
          Нет
        </div>
      </div>
    </div>
  );
}

export default DialogWorkWithMaterial;
