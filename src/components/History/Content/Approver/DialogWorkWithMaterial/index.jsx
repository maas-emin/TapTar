import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { closeApproverButtons } from '../../../../../redux/ducks/application';
import {
  addMaterialInProcessApprover,
  deleteMaterialOfProcessApprover,
  SendMaterialOfProcessApprover,
} from '../../../../../redux/ducks/approver';

import style from './style.module.css';

function DialogWorkWithMaterial() {
  const body = document.querySelector('body');

  const history = useHistory();
  const dispatch = useDispatch();
  const material = useSelector((state) => state.approver.material);
  const status = useSelector(
    (state) => state.application.approverButtons.status,
  );

  const handleDeleteFail = () => {
    if (status === 'stop') {
      dispatch(deleteMaterialOfProcessApprover(material.process_id));
      history.push('/history/approver');
    }
    if (status === 'processed') {
      dispatch(SendMaterialOfProcessApprover(material));
      history.push('/history/approver/processed');
    }
    if (status === 'processing') {
      dispatch(addMaterialInProcessApprover(material.process_id));
      history.push('/history/approver/processing');
    }
    handleCloseStatus();
  };

  const handleCloseStatus = () => {
    body.style.overflow = 'visible';
    dispatch(closeApproverButtons());
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
