import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeEditUserPass } from '../../../../../redux/ducks/application';
import { changeUserPass } from '../../../../../redux/ducks/user';
import CloseButton from '../../../General/buttons/CloseButton/CloseButton';

import style from './style.module.css';

function DialogPass() {
  const dispatch = useDispatch();

  const [newPass, setNewPass] = useState('');

  const handleChangeNewPass = (e) => {
    setNewPass(e.target.value);
  };

  const [checkPass, setCheckPass] = useState('');

  const handleChangeCheckPass = (e) => {
    setCheckPass(e.target.value);
  };

  const [oldPass, setOldPass] = useState('');

  const handleChangeOldPass = (e) => {
    setOldPass(e.target.value);
  };

  const changeCurrentUserPass = () => {
    dispatch(changeUserPass(newPass, checkPass, oldPass));
    pressCloseEditUserPass();
  };

  const pressCloseEditUserPass = () => {
    dispatch(closeEditUserPass());
  };

  return (
    <div className={style.dialogPass}>
      <CloseButton
        bgColor="#F5F5F5"
        handleClick={pressCloseEditUserPass}
        width="25px"
        height="25px"
        top="10px"
        right="13px"
        boxShadow="none"
      />

      <div className={style.passForms}>
        <div className={style.passForm}>
          <div className={style.passFormTitle}>Новый пароль</div>
          <input
            className={style.passFormInput}
            type="text"
            name="editPass"
            value={newPass}
            onChange={handleChangeNewPass}
          />
        </div>
        <div className={style.passForm}>
          <div className={style.passFormTitle}>Повторить пароль</div>
          <input
            className={style.passFormInput}
            type="text"
            name="editPassCheck"
            value={checkPass}
            onChange={handleChangeCheckPass}
          />
        </div>
        <div className={style.passForm}>
          <div className={style.passFormTitle}>Старый пароль</div>
          <input
            className={style.passFormInput}
            type="text"
            name="oldPassCheck"
            value={oldPass}
            onChange={handleChangeOldPass}
          />
        </div>
      </div>

      <div onClick={changeCurrentUserPass} className={style.passBtn}>
        Сменить пароль
      </div>
    </div>
  );
}

export default DialogPass;
