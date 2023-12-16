import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { closeApproverReject } from '../../../../../redux/ducks/application';
import { rejectMaterialOfProcessApprover } from '../../../../../redux/ducks/approver';

import style from './style.module.css';

function DialogWorkWithReject() {
  const body = document.querySelector('body');

  const history = useHistory();
  const dispatch = useDispatch();
  const material = useSelector((state) => state.approver.material);

  const [cause, setCause] = useState('');

  const handleDeleteFail = () => {
    dispatch(rejectMaterialOfProcessApprover(material, cause));
    history.push('/history/approver');
    handleCloseReject();
  };

  const handleCloseReject = () => {
    body.style.overflow = 'visible';
    dispatch(closeApproverReject());
  };

  const handleChangeCause = (e) => {
    setCause(e.target.value);
  };

  return (
    <div className={style['dialog-remove']}>
      <div className={style.title}>Напишите причину</div>
      <textarea
        className={style['form__input-cause']}
        value={cause}
        onChange={handleChangeCause}
        name="cause"
        id="cause"
        placeholder="Напишите причину..."
      />
      <div className={style.buttons}>
        <div onClick={handleDeleteFail} className={style.button}>
          Отклонить
        </div>
        <div onClick={handleCloseReject} className={style.button}>
          Отмена
        </div>
      </div>
    </div>
  );
}

export default DialogWorkWithReject;
