import React from 'react';
import styles from '../chat.module.css';
import PropTypes from 'prop-types';

function InputMassage({ text, handleChange }) {
  return (
    <div className={styles['input-message']}>
      <input
        type="text"
        placeholder="Введите сообщение"
        value={text}
        onChange={handleChange}
      />
      <div className={styles.inputCircles}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 4 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="1.9" cy="1.9" r="1.9" fill="#878787" />
          <circle cx="1.9" cy="9.5001" r="1.9" fill="#878787" />
          <circle cx="1.9" cy="17.1" r="1.9" fill="#878787" />
        </svg>
      </div>
    </div>
  );
}

InputMassage.propTypes = {
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputMassage;
