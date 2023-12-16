import React from 'react';
import styles from '../chat.module.css';
import { useSelector } from 'react-redux';
import SearchMessage from './SearchMessage';
import Avatar from '../../Avatar/Avatar';

function ChatHeader() {
  const loading = useSelector((state) => state.messages.loading);
  const currentUser = useSelector((state) => state.user.currentUser);
  const companion = useSelector((state) => state.messages.companions[0]);

  if (loading) {
    return (
      <div className={styles['header-loading']}>
        <div className={styles['header-loader-icon']}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z" />
          </svg>
        </div>
        <div>Загрузка чата</div>
      </div>
    );
  }

  return (
    <div className={styles.header}>
      <div className={styles['header-name-companion']}>
        {companion === undefined ? (
          ''
        ) : companion.online && companion.online !== undefined ? (
          <>
            {companion.name}
            <div className={styles['header-name-online']} />
          </>
        ) : (
          <>
            <Avatar
              currentUserAvatar={companion.avatar}
              size={'small'}
              // online={props.contact.online}
            />
            <div className={styles.companionName}>{companion.name}</div>
          </>
        )}
      </div>
      <SearchMessage />
      <div className={styles['header-name-user']}>
        <div className={styles.userName}>{currentUser.name}</div>
        <Avatar currentUserAvatar={currentUser.avatar} size={'small'} />
      </div>
    </div>
  );
}

export default ChatHeader;
