import { useSelector } from 'react-redux';
import styles from './chat.module.css';

function StartPage() {
  const contacts = useSelector((state) => state.contacts.contacts);

  return (
    <div className={styles['start-page']}>
      {contacts.length ? (
        <h3>Пожалуйста, выберите чат, чтобы начать общение</h3>
      ) : (
        <h3>У вас нету чатов</h3>
      )}
    </div>
  );
}

export default StartPage;
