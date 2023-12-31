import React from 'react';
import { useSelector } from 'react-redux';
import Contact from './Contact';
import Search from './Header';
import styles from './contacts.module.css';
import Preloader from './Preloader/Preloader';

function MainContacts() {
  const contacts = useSelector((state) => {
    return state.contacts.contacts.filter(
      (contact) =>
        contact.title
          .toUpperCase()
          .indexOf(state.contacts.filter.toUpperCase()) > -1,
    );
  });

  const loading = useSelector((state) => state.contacts.loading);

  return loading ? (
    <div className={styles['main-contact']}>
      <Search />
      <div className={styles['preloader-wrapper']}>
        <Preloader />
      </div>
    </div>
  ) : (
    <div className={styles['main-contact']}>
      <Search />
      <ul className={styles.contacts__list}>
        {contacts.map((contact) => {
          return <Contact contact={contact} key={contact.id} />;
        })}
      </ul>
    </div>
  );
}

export default MainContacts;
