import React from 'react';
import styles from './contacts.module.css';
import PropTypes from 'prop-types';

function NameContacts({ title }) {
  const titleSub = title.substr(0, 8);

  return (
    <p className={styles.name}>
      {title.length >= 8 ? `${titleSub}...` : title}
    </p>
  );
}

NameContacts.propTypes = {
  fullname: PropTypes.string,
};
export default NameContacts;
