import React from 'react';

import style from './style.module.css';

function UserForm({ styleForm, value, title, name, disabled, handleChange }) {
  return (
    <div className={styleForm}>
      <div className={style.formTitle}>{title}</div>
      <input
        className={style.userFormInput}
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
    </div>
  );
}

export default UserForm;
