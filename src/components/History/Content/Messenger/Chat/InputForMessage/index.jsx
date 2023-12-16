import React, { useState } from 'react';
import ButtonAddMessage from './Button';
import { useParams } from 'react-router-dom';
import AddFile from './AddFile';
import InputMassage from './InputMassage';
import GetMaterialFiles from './GetMaterialFiles';
import ButtonDeleteChat from './ButtonDeleteChat';
import { useSelector } from 'react-redux';

import styles from '../chat.module.css';

function InputForMessage() {
  const [textMessage, setTextMessage] = useState('');
  const currentUser = useSelector((state) => state.user.currentUser);
  const idContact = useParams().id;

  const handleMessageInput = (e) => {
    setTextMessage(e.target.value);
  };

  return (
    <div className={styles['input-block']}>
      <GetMaterialFiles />
      <AddFile />
      <InputMassage text={textMessage} handleChange={handleMessageInput} />
      <ButtonAddMessage
        content={textMessage}
        idContact={idContact}
        setTextMessage={setTextMessage}
      />
      {currentUser.role === 'historian' ? (
        <ButtonDeleteChat idContact={idContact} />
      ) : null}
    </div>
  );
}

export default InputForMessage;
