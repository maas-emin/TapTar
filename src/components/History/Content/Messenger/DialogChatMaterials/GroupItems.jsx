import { useContext } from 'react';
import { MaterialContext } from './context';
import ReactPlayer from 'react-player';
// import AudioPlayer from '../../../General/Media/AudioPlayer/AudioPlayer';
// import Document from '../../../General/Media/Document';
import style from './style.module.css';

function GroupItems({ file, type, handleClickOpen }) {
  let media;
  let stylesMedia = '';

  const titleSub = file.title.substr(0, 20);

  if (type === 'photo') {
    media = (
      <img
        src={`${process.env.REACT_APP_TEPTAR_HOST}/storage/${file.path_to_file}`}
        alt="#"
      />
    );
  }
  if (type === 'video') {
    media = (
      <ReactPlayer
        width="100%"
        height="100%"
        url={`${process.env.REACT_APP_TEPTAR_HOST}/storage/${file.path_to_file}`}
      />
    );
  }
  if (type === 'audio') {
    media = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        space="preserve"
        width="100%"
        height="100%"
        version="1.1"
        viewBox="0 0 100.82 72.1"
        xlink="http://www.w3.org/1999/xlink"
        xodm="http://www.corel.com/coreldraw/odm/2003"
      >
        <g id="Слой_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer" />
          <path
            fill="#4686CC"
            fillRule="nonzero"
            d="M46.16 0c-0,0 -0,0 -0,0 -1.99,0 -3.97,0.53 -5.72,1.54 -0.31,0.18 -0.59,0.38 -0.86,0.62l-16.22 14.17 -10.98 0c-6.83,0 -12.38,5.55 -12.38,12.38l0 14.68c0,6.83 5.55,12.38 12.38,12.38l10.98 0 16.22 14.17c0.26,0.23 0.55,0.44 0.86,0.61 1.75,1.01 3.73,1.54 5.72,1.54 6.32,0 11.46,-5.14 11.46,-11.46l0 -49.18c0,-6.32 -5.14,-11.46 -11.46,-11.46zm-0 5.42c3.15,0 6.04,2.52 6.04,6.03l0 49.18c0,3.52 -2.89,6.04 -6.04,6.04 -1,0 -2.03,-0.26 -3.01,-0.82l-17.76 -15.51 -13.01 -0c-3.84,0 -6.95,-3.11 -6.95,-6.96l0 -14.68c0,-3.84 3.11,-6.96 6.95,-6.96l13.01 0 17.76 -15.51c0.97,-0.56 2,-0.82 3.01,-0.82z"
          />
          <path
            fill="none"
            fillRule="nonzero"
            stroke="#4686CC"
            strokeWidth="4.46"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M14.11 29.57l9.39 0m12.56 -6.39l7.16 -6.09"
          />
          <path
            fill="none"
            fillRule="nonzero"
            stroke="#4686CC"
            strokeWidth="4.85"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M68.32 27.25c1.73,2.5 2.74,5.5 2.74,8.72 0,3.24 -1.01,6.25 -2.76,8.75m9.41 -28.78c4.41,4.67 7.1,13.23 7.1,20.03 0,6.86 -2.74,15.48 -7.24,20.17m9.27 -48.78c7.12,6.67 11.54,18.33 11.54,28.62 0,10.37 -4.49,22.09 -11.71,28.78"
          />
        </g>
      </svg>
    );
    stylesMedia = style.audio;
  }
  if (type === 'document') {
    stylesMedia = style.document;
    media = (
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        space="preserve"
        version="1.1"
        viewBox="0 0 58.88 84.18"
        xmxlink="http://www.w3.org/1999/xlink"
        xmxodm="http://www.corel.com/coreldraw/odm/2003"
      >
        <g id="Слой_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer" />
          <path
            fill="#4686CC"
            fillRule="nonzero"
            d="M17.38 63.38l24.12 0c1.33,0 2.42,-1.09 2.42,-2.42 0,-1.33 -1.09,-2.42 -2.42,-2.42l-24.12 0c-1.33,0 -2.42,1.09 -2.42,2.42 0,1.33 1.09,2.42 2.42,2.42z"
          />
          <path
            fill="#4686CC"
            fillRule="nonzero"
            d="M41.5 67.43l-24.12 0c-1.33,0 -2.42,1.09 -2.42,2.42 0,1.33 1.09,2.42 2.42,2.42l24.12 0c1.33,0 2.42,-1.09 2.42,-2.42 0,-1.33 -1.09,-2.42 -2.42,-2.42z"
          />
          <path
            fill="#4686CC"
            fillRule="nonzero"
            d="M26.4 7.09l4.78 0c0,-0.05 0,-0.1 0,-0.15 0,-1.32 -1.07,-2.39 -2.39,-2.39 -1.32,0 -2.39,1.07 -2.39,2.39 0,0.05 0,0.1 0,0.15zm-4.55 0c-0,-0.05 -0,-0.1 -0,-0.15 0,-3.83 3.11,-6.94 6.94,-6.94 3.83,0 6.94,3.11 6.94,6.94 0,0.05 -0,0.1 -0,0.15l1.77 0c2.13,0 3.88,1.75 3.88,3.88l0 11.68 -24.85 0 0 -11.68c0,-2.13 1.74,-3.88 3.88,-3.88l1.44 0zm-0.91 11.12l16.45 0 0 -5.27c0,-1 -0.82,-1.82 -1.82,-1.82l-12.8 0c-1.01,0 -1.83,0.82 -1.83,1.83l0 5.26z"
          />
          <path
            fill="#4686CC"
            fillRule="nonzero"
            d="M10.22 16.52c-3.12,0 -5.67,2.55 -5.67,5.67l0 51.76c0,3.12 2.55,5.67 5.67,5.67l38.44 0c3.12,0 5.67,-2.55 5.67,-5.67l0 -51.76c0,-3.12 -2.55,-5.67 -5.67,-5.67l-3.89 0 0 -4.55 3.89 0c5.62,0 10.22,4.6 10.22,10.22l0 51.76c0,5.62 -4.6,10.22 -10.22,10.22l-38.44 0c-5.62,0 -10.22,-4.6 -10.22,-10.22l0 -51.76c0,-5.62 4.6,-10.22 10.22,-10.22l2.91 0 0 4.55 -2.91 0z"
          />
          <path
            fill="#4686CC"
            fillRule="nonzero"
            d="M17.38 44.78l24.12 0c1.33,0 2.42,-1.09 2.42,-2.42 0,-1.33 -1.09,-2.42 -2.42,-2.42l-24.12 0c-1.33,0 -2.42,1.09 -2.42,2.42 0,1.33 1.09,2.42 2.42,2.42z"
          />
          <path
            fill="#4686CC"
            fillRule="nonzero"
            d="M41.5 48.83l-24.12 0c-1.33,0 -2.42,1.09 -2.42,2.42 0,1.33 1.09,2.42 2.42,2.42l24.12 0c1.33,0 2.42,-1.09 2.42,-2.42 0,-1.33 -1.09,-2.42 -2.42,-2.42z"
          />
          <path
            fill="#4686CC"
            fillRule="nonzero"
            d="M41.5 30.58l-24.12 0c-1.33,0 -2.42,1.09 -2.42,2.42 0,1.33 1.09,2.42 2.42,2.42l24.12 0c1.33,0 2.42,-1.09 2.42,-2.42 0,-1.33 -1.09,-2.42 -2.42,-2.42z"
          />
        </g>
      </svg>
    );
  }

  const { materials, addFileInMaterials, removeFileInMaterials } =
    useContext(MaterialContext);

  const checkFile = materials.some((material) => material === file.id);

  return (
    <div className={`${style.block} ${stylesMedia}`}>
      <div
        className={style.card}
        onClick={
          checkFile
            ? () => removeFileInMaterials(file.id)
            : () => addFileInMaterials(file.id)
        }
      >
        <div className={style.choiceLabel}>
          {checkFile ? <div className={style.choiceBlock}></div> : null}
        </div>
        <div className={`${style.cardFile} ${stylesMedia}`}>{media}</div>
      </div>
      <div className={style.cardTitle}>
        {file.title.length >= 20 ? `${titleSub}...` : file.title}
      </div>
    </div>
  );
}

export default GroupItems;
