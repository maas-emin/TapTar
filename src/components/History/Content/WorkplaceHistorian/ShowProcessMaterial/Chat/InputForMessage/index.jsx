import React, { useState } from 'react';
import ButtonAddMessage from './Button';
import InputMassage from './InputMassage';
import { useSelector } from 'react-redux';

import styles from '../chat.module.css';

function InputForMessage() {
  const [textMessage, setTextMessage] = useState('');

  // const idContact = useSelector(
  //   (state) => state.incomingMaterials.material.user_id,
  // );

  const idContact = useSelector(
    (state) => state.incomingMaterials.material.room_id,
  );

  const handleMessageInput = (e) => {
    setTextMessage(e.target.value);
  };

  return (
    <div className={styles['input-block']}>
      <InputMassage text={textMessage} handleChange={handleMessageInput} />
      <ButtonAddMessage
        content={textMessage}
        idContact={idContact}
        setTextMessage={setTextMessage}
      />
    </div>
  );
}

export default InputForMessage;
