import React from 'react';
import { useSelector } from 'react-redux';

import styles from './styles.module.css';

function FileUploadProgress() {
  const progress = useSelector((state) => state.workshop.progress);

  function getProgress() {
    const x = 440 - (440 * progress) / 100;
    return x;
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.box}>
          <div>
            <div className={styles.percent}>
              <svg className={styles.svg}>
                <circle cx="70" cy="70" r="70"></circle>
                <circle
                  strokeDashoffset={getProgress() + 'px'}
                  className={styles.circle}
                  cx="70"
                  cy="70"
                  r="70"
                ></circle>
              </svg>
              <div className={styles.number}>
                <h2>
                  {progress}
                  <span>%</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.text}>Идет загрузка</div>
      </div>
    </div>
  );
}

export default FileUploadProgress;
