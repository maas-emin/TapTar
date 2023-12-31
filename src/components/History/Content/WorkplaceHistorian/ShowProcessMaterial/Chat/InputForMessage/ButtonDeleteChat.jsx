import React from 'react';
import { useDispatch } from 'react-redux';
import { openDialogDeleteChat } from '../../../../../../../redux/ducks/application';
import styles from '../chat.module.css';

function ButtonDeleteChat(props) {
  const dispatch = useDispatch();

  const openDialogDelete = () => {
    dispatch(openDialogDeleteChat(props.idContact));
  };

  return (
    <div onClick={openDialogDelete} className={styles.delete__chat}>
      <svg
        height="100%"
        viewBox="0 0 30 30"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#878787"
          d="M18.5 12c.294 0 .525.246.497.54l-1 11.984c-.054.693-1.055.61-.994-.082l1-11.984c.016-.262.234-.458.496-.458zm-7 0c-.294 0-.525.246-.497.54l1 11.984c.054.693 1.055.61.994-.082l-1-11.984c-.016-.262-.234-.458-.496-.458zm1-12c-.822 0-1.5.678-1.5 1.5V4H5.5c-.277 0-.5.223-.5.5s.223.5.5.5h19c.277 0 .5-.223.5-.5s-.223-.5-.5-.5H19V1.5c0-.822-.678-1.5-1.5-1.5zm0 1h5c.286 0 .5.214.5.5V4h-6V1.5c0-.286.214-.5.5-.5zm-6 5c-.824 0-1.58.673-1.498 1.547l2 21C7.074 29.307 7.676 30 8.5 30h13c.824 0 1.426-.692 1.498-1.453l2-21C25.08 6.673 24.324 6 23.5 6zm0 1h17c.284 0 .524.224.502.453l-2 21c-.033.342-.218.547-.502.547h-13c-.284 0-.47-.205-.502-.547l-2-21C5.976 7.223 6.216 7 6.5 7z"
        />
      </svg>
    </div>
  );
}

export default ButtonDeleteChat;
