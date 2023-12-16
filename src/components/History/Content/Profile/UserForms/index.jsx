import React from 'react';
import UserForm from './UserForm';
import style from './style.module.css';
import { useSelector } from 'react-redux';

export default function UserForms({
  currentUserEmail,
  currentUserName,
  handleChangeEmail,
  handleChangeName,
}) {
  const editUser = useSelector((state) => state.application.editUser);
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <div className={style.userForms}>
      <UserForm
        title="ФИО"
        name="userMainName"
        styleForm={style.userFormName}
        value={!editUser ? currentUser.name : currentUserName}
        handleChange={handleChangeName}
        disabled={!editUser}
      />
      <UserForm
        title="Должность"
        name="userMainRole"
        styleForm={style.userForm}
        handleChange={null}
        value={currentUser.role}
        disabled={true}
      />
      <UserForm
        title="Почта"
        name="userMainEmail"
        styleForm={style.userForm}
        value={!editUser ? currentUser.email : currentUserEmail}
        handleChange={handleChangeEmail}
        disabled={!editUser}
      />
    </div>
  );
}
