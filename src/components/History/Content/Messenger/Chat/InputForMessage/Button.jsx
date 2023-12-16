import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addingMassage } from '../../../../../../redux/ducks/messages';
import { CSSTransition } from 'react-transition-group';
import { useHotkeys } from 'react-hotkeys-hook';

function ButtonAddMessage({ content, idContact, setTextMessage }) {
  const dispatch = useDispatch();

  const stateBTN = content === '';

  const myId = useSelector((state) => state.user.currentUser.id);

  const loadingAddMessage = useSelector(
    (state) => state.messages.loadingMessage,
  );

  const handleAddingMassage = (contactId, type, message) => {
    if (message === '') {
      return;
    }
    dispatch(addingMassage(myId, contactId, type, message));
    setTextMessage('');
  };

  useHotkeys(
    'enter',
    () => {
      handleAddingMassage(idContact, 'text', content);
    },
    { enableOnTags: ['INPUT'] },
  );

  return (
    <CSSTransition in={stateBTN} className="input-btn" timeout={100}>
      <button
        disabled={loadingAddMessage}
        onClick={() => {
          handleAddingMassage(idContact, 'text', content);
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 19 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.8411 19.1496L18.3944 0.688124L0.000267744 7.94738L0.293293 8.23038L8.55124 11.4033L11.8411 19.1496Z"
            fill="#878787"
          />
        </svg>
      </button>
    </CSSTransition>
  );
}

ButtonAddMessage.propTypes = {
  content: PropTypes.string.isRequired,
  idContact: PropTypes.string.isRequired,
  setTextMessage: PropTypes.func.isRequired,
};

export default ButtonAddMessage;
