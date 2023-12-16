import { postFail } from '../../../../../../../../redux/ducks/uploadFiles';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { closeAmountUploadFiles } from '../../../../../../../../redux/ducks/application';

import style from './style.module.css';

function UploadOne() {
  const dispatch = useDispatch();

  const format = useSelector(
    (state) => state.application.amountUploadFiles.type,
  );

  const [buttonHovered, setButtonHovered] = useState(false);

  function fileUploadHandler(event) {
    const file = event.target.files[0];

    if (!event.target.files.length) {
      return;
    }
    if (!file.type.match(format)) {
      return;
    }

    if (format === 'image') {
      dispatch(postFail(file, 'photo'));
    } else if (format === 'application') {
      dispatch(postFail(file, 'document'));
    } else {
      dispatch(postFail(file, format));
    }

    dispatch(closeAmountUploadFiles());
    event.target.value = null;
  }

  return (
    <div
      className={style.button}
      onMouseEnter={() => setButtonHovered(true)}
      onMouseLeave={() => setButtonHovered(false)}
    >
      <label htmlFor="oneFail">
        {buttonHovered ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            space="preserve"
            width="60px"
            height="100%"
            version="1.1"
            style={{
              shapeRendering: 'geometricPrecision',
              textRendering: 'geometricPrecision',
              imageRendering: 'optimizeQuality',
              fillRule: 'evenodd',
              clipRule: 'evenodd',
            }}
            viewBox="0 0 29.63 41.71"
            xlink="http://www.w3.org/1999/xlink"
            xodm="http://www.corel.com/coreldraw/odm/2003"
          >
            <g id="Слой_x0020_1">
              <metadata id="CorelCorpID_0Corel-Layer" />
              <path
                fill="#fff"
                stroke="#fff"
                strokeWidth="0.39"
                strokeMiterlimit="22.9256"
                d="M29.44 38.15l0 -34.6c0,-1.85 -1.51,-3.36 -3.36,-3.36l-22.52 0c-1.85,0 -3.36,1.51 -3.36,3.36l0 34.6c0,1.85 1.51,3.36 3.36,3.36l22.52 0c1.85,0 3.36,-1.51 3.36,-3.36zm-10.11 -32.8c0,0.95 -0.77,1.72 -1.72,1.72l-10.77 0c-0.95,0 -1.72,-0.77 -1.72,-1.72 0,-0.95 0.77,-1.72 1.72,-1.72l10.77 0c0.95,0 1.72,0.77 1.72,1.72zm-13.12 8.25l17.22 0c0.95,0 1.72,0.77 1.72,1.72 0,0.95 -0.77,1.72 -1.72,1.72l-17.22 0c-0.95,0 -1.72,-0.77 -1.72,-1.72 0,-0.95 0.77,-1.72 1.72,-1.72zm0 6.95l17.22 0c0.95,0 1.72,0.77 1.72,1.72 0,0.95 -0.77,1.72 -1.72,1.72l-17.22 0c-0.95,0 -1.72,-0.77 -1.72,-1.72 0,-0.95 0.77,-1.72 1.72,-1.72zm0 6.87l17.22 0c0.95,0 1.72,0.77 1.72,1.72 0,0.95 -0.77,1.72 -1.72,1.72l-17.22 0c-0.95,0 -1.72,-0.77 -1.72,-1.72 0,-0.95 0.77,-1.72 1.72,-1.72zm0 6.87l17.22 0c0.95,0 1.72,0.77 1.72,1.72 0,0.95 -0.77,1.72 -1.72,1.72l-17.22 0c-0.95,0 -1.72,-0.77 -1.72,-1.72 0,-0.95 0.77,-1.72 1.72,-1.72z"
              />
            </g>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            space="preserve"
            width="60px"
            height="100%"
            version="1.1"
            style={{
              shapeRendering: 'geometricPrecision',
              textRendering: 'geometricPrecision',
              imageRendering: 'optimizeQuality',
              fillRule: 'evenodd',
              clipRule: 'evenodd',
            }}
            viewBox="0 0 35.76 47.69"
            xlink="http://www.w3.org/1999/xlink"
            xodm="http://www.corel.com/coreldraw/odm/2003"
          >
            <g id="Слой_x0020_1">
              <metadata id="CorelCorpID_0Corel-Layer" />
              <path
                fill="#fff"
                d="M3.44 40.93l0 -34.17c0,-1.83 1.49,-3.32 3.32,-3.32l22.25 0c1.83,0 3.32,1.49 3.32,3.32l0 34.17c0,1.83 -1.49,3.32 -3.32,3.32l-22.25 0c-1.83,0 -3.32,-1.49 -3.32,-3.32zm25.57 -40.93l-22.25 0c-3.72,0 -6.76,3.04 -6.76,6.76l0 34.17c0,3.72 3.04,6.76 6.76,6.76l22.25 0c3.72,0 6.76,-3.04 6.76,-6.76l0 -34.17c0,-3.72 -3.04,-6.76 -6.76,-6.76zm-19.01 10.23l10.64 0c0.93,0 1.7,-0.76 1.7,-1.7 0,-0.93 -0.76,-1.7 -1.7,-1.7l-10.64 0c-0.93,0 -1.7,0.76 -1.7,1.7 0,0.93 0.76,1.7 1.7,1.7zm16.39 6.45l-17.01 0c-0.93,0 -1.7,0.76 -1.7,1.7 0,0.93 0.76,1.7 1.7,1.7l17.01 0c0.93,0 1.7,-0.76 1.7,-1.7 0,-0.93 -0.76,-1.7 -1.7,-1.7zm0 6.86l-17.01 0c-0.93,0 -1.7,0.76 -1.7,1.7 0,0.93 0.76,1.7 1.7,1.7l17.01 0c0.93,0 1.7,-0.76 1.7,-1.7 0,-0.93 -0.76,-1.7 -1.7,-1.7zm0 6.79l-17.01 0c-0.93,0 -1.7,0.76 -1.7,1.7 0,0.93 0.76,1.7 1.7,1.7l17.01 0c0.93,0 1.7,-0.76 1.7,-1.7 0,-0.93 -0.76,-1.7 -1.7,-1.7zm0 6.79l-17.01 0c-0.93,0 -1.7,0.76 -1.7,1.7 0,0.93 0.76,1.7 1.7,1.7l17.01 0c0.93,0 1.7,-0.76 1.7,-1.7 0,-0.93 -0.76,-1.7 -1.7,-1.7z"
              />
            </g>
          </svg>
        )}
        <div className={style.button__title}>Выбрать один файл</div>
      </label>
      {format === 'application' ? (
        <input
          accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf"
          onChange={(event) => fileUploadHandler(event)}
          type="file"
          id="oneFail"
          name="oneFail"
        />
      ) : (
        <input
          accept={`${format}/*`}
          onChange={(event) => fileUploadHandler(event)}
          type="file"
          id="oneFail"
          name="oneFail"
        />
      )}
    </div>
  );
}

export default UploadOne;
