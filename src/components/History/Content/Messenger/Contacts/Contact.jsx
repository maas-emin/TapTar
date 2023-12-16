import { NavLink } from 'react-router-dom';
import NameContacts from './NameContacts';
import { PropTypes } from 'prop-types';
import Avatar from '../Avatar/Avatar';
import { useDispatch } from 'react-redux';
import { minusCountMessages } from '../../../../../redux/ducks/contacts';

import styles from './contacts.module.css';

function Contact(props) {
  const dispatch = useDispatch();

  const handleClickMinus = () => {
    dispatch(
      minusCountMessages(+props.contact.id, props.contact.count_new_messages),
    );
  };

  return (
    <div className={styles.contacts} onClick={handleClickMinus}>
      <NavLink
        to={`/history/chat/${props.contact.id}`}
        activeClassName={styles.active}
        className={styles.contacts__link}
      >
        <li className={styles.contacts__item}>
          <Avatar
            currentUserAvatar={props.contact.avatar}
            size={'medium'}
            online={props.contact.online}
          />
          <div className={styles['info_block']}>
            <NameContacts title={props.contact.title} />
          </div>
          {props.contact.count_new_messages ? (
            <div className={styles.new__messages}>
              +{props.contact.count_new_messages}
            </div>
          ) : null}
        </li>
      </NavLink>
    </div>
  );
}

Contact.propTypes = {
  _id: PropTypes.string,
  contact: PropTypes.object,
};
export default Contact;
