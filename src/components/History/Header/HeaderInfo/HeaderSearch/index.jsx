import React, { useState } from 'react';
import styles from './style.module.css';
import { CSSTransition } from 'react-transition-group';

function HeaderSearch() {
  const [isSearchIsActive, setIsSearchIsActive] = useState(false);
  const [text, setText] = useState('');

  const handleResetSearch = (e) => {
    setText(e.target.value);
  };

  const handleToggleStateActive = () => {
    setIsSearchIsActive(!isSearchIsActive);
  };

  return (
    <div
      className={`${styles['header-search-block']} ${
        isSearchIsActive ? styles['header-search-block--active'] : ''
      }`}
    >
      {isSearchIsActive ? (
        <>
          <input
            type="text"
            placeholder="Поиск по сайту..."
            value={text}
            onChange={handleResetSearch}
          />
          {/* {filter ? ( */}
          {/* <button className="material-icons" onClick={handleResetSearch}>
              clear
            </button> */}
          {/* ) : (
            ''
          )} */}
        </>
      ) : (
        <div
          onClick={handleToggleStateActive}
          className={styles['search-text']}
        >
          Поиск по сайту
        </div>
      )}
      <CSSTransition
        in={isSearchIsActive}
        timeout={200}
        classNames={{
          enterActive: 'search-active-enter',
          exitActive: 'search-active-exit',
        }}
      >
        <button
          className={`${styles['search-button']} ${
            isSearchIsActive
              ? styles['search-button--active']
              : styles['search-button--no-active']
          }`}
          onClick={handleToggleStateActive}
        >
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 485.213 485.213"
          >
            <g>
              <g>
                <path
                  className={`${styles['search-path']} ${
                    isSearchIsActive ? styles['search-path--active'] : ''
                  }`}
                  d="M471.882,407.567L360.567,296.243c-16.586,25.795-38.536,47.734-64.331,64.321l111.324,111.324
			c17.772,17.768,46.587,17.768,64.321,0C489.654,454.149,489.654,425.334,471.882,407.567z"
                />
                <path
                  className={`${styles['search-path']} ${
                    isSearchIsActive ? styles['search-path--active'] : ''
                  }`}
                  d="M363.909,181.955C363.909,81.473,282.44,0,181.956,0C81.474,0,0.001,81.473,0.001,181.955s81.473,181.951,181.955,181.951
			C282.44,363.906,363.909,282.437,363.909,181.955z M181.956,318.416c-75.252,0-136.465-61.208-136.465-136.46
			c0-75.252,61.213-136.465,136.465-136.465c75.25,0,136.468,61.213,136.468,136.465
			C318.424,257.208,257.206,318.416,181.956,318.416z"
                />
                <path
                  className={`${styles['search-path']} ${
                    isSearchIsActive ? styles['search-path--active'] : ''
                  }`}
                  d="M75.817,181.955h30.322c0-41.803,34.014-75.814,75.816-75.814V75.816C123.438,75.816,75.817,123.437,75.817,181.955z"
                />
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </button>
      </CSSTransition>
    </div>
  );
}

export default HeaderSearch;
