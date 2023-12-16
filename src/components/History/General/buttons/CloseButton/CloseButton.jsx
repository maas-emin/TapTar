import style from './style.module.css';

function CloseButton(props) {
  return (
    <div
      onClick={props.handleClick}
      className={style.btn__close}
      style={{
        width: props.width,
        height: props.height,
        top: props.top,
        left: props.left,
        right: props.right,
        bottom: props.bottom,
        backgroundColor: props.bgColor,
        boxShadow: props.boxShadow,
      }}
    >
      <svg
        className={style.svg}
        xmlns="http://www.w3.org/2000/svg"
        space="preserve"
        version="1.1"
        viewBox="0 0 23.12 23.12"
        xlink="http://www.w3.org/1999/xlink"
        xodm="http://www.corel.com/coreldraw/odm/2003"
      >
        <g id="Слой_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer" />
          <circle
            fill="none"
            fillRule="nonzero"
            cx="11.56"
            cy="11.56"
            r="11.56"
          />
          <path
            fill="#C4C4C4"
            fillRule="nonzero"
            d="M16.83 6.29l0 0c0.51,0.51 0.51,1.34 0,1.84l-3.42 3.42 3.42 3.42c0.51,0.51 0.51,1.34 0,1.84l-0 0c-0.51,0.51 -1.34,0.51 -1.84,0l-3.42 -3.42 -3.42 3.42c-0.51,0.51 -1.34,0.51 -1.84,0l0 -0c-0.51,-0.51 -0.51,-1.34 0,-1.84l3.42 -3.42 -3.42 -3.42c-0.51,-0.51 -0.51,-1.34 0,-1.84l0 0c0.51,-0.51 1.34,-0.51 1.84,0l3.42 3.42 3.42 -3.42c0.51,-0.51 1.34,-0.51 1.84,0z"
          />
        </g>
      </svg>
    </div>
  );
}

export default CloseButton;
