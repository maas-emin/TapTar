import styles from './contacts.module.css';
import MainContacts from './MainContacts';

function Contacts() {
  return (
    <div className={styles.container}>
      <MainContacts />
    </div>
  );
}

export default Contacts;
