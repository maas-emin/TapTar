import React from 'react';
import styles from './chat.module.css';
import Messages from './Messages';
import ChatHeader from './Header';
import InputForMessage from './InputForMessage';
import StartPage from './StartPage';
import { useParams } from 'react-router-dom';

function Chat() {
  const id = useParams().id;

  if (!id) {
    return <StartPage />;
  }

  return (
    <div className={styles.container}>
      <ChatHeader />
      <Messages />
      <InputForMessage />
    </div>
  );
}

export default Chat;
