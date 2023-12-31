import style from './style.module.css';

function HistoryLink() {
  return (
    <div className={style.link}>
      <div className={style.link__icon}>
        <svg
          className={style.link__svg}
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 511.41 441.66"
        >
          <path
            d="M695.86,311.25l-36.65,41.87-41-40.47h0L604.36,299l-49,54.12-41-40.47h0L500.5,299l-49,54.12-41-40.47h0L396.64,299l-49,54.12-41-40.47h0L292.79,299l-56.42,54.56V668.45H711.59V311.25ZM252.11,652.72l2.2-295.42,39-40.11,41,40.47h0l13.84,13.65,49-54.12,41,40.47h0L452,371.31l49-54.12,41,40.47h0l13.84,13.65,49-54.12,41,40.47h0l13.83,13.65,36.14-42.42V652.72Z"
            transform="translate(-228.04 -299)"
          />
          <rect x="64.98" y="101.77" width="361.92" height="8.03" />
          <rect x="64.98" y="144.61" width="361.92" height="8.03" />
          <rect x="64.98" y="187.45" width="361.92" height="8.03" />
          <rect x="64.98" y="230.29" width="361.92" height="8.03" />
          <rect x="64.98" y="273.13" width="361.92" height="8.03" />
          <path
            d="M293,733h369.2c39.21,0,71-24.44,71-54.6h0c0-30.15-31.79-54.6-71-54.6H289.41V733"
            transform="translate(-228.04 -299)"
          />
          <path
            d="M662.16,739.3H293V733h-9.84V617.51h379c42.62,0,77.3,27.32,77.3,60.89S704.78,739.3,662.16,739.3ZM295.71,726.71H662.16c35.68,0,64.71-21.67,64.71-48.31s-29-48.3-64.71-48.3H295.71Z"
            transform="translate(-228.04 -299)"
          />
          <ellipse cx="51.93" cy="378.72" rx="45.63" ry="56.65" />
          <path
            d="M280,740.66c-28.63,0-51.93-28.23-51.93-62.94s23.3-62.94,51.93-62.94S331.9,643,331.9,677.72,308.61,740.66,280,740.66Zm0-113.29c-21.69,0-39.34,22.58-39.34,50.35s17.65,50.35,39.34,50.35,39.34-22.59,39.34-50.35S301.66,627.37,280,627.37Z"
            transform="translate(-228.04 -299)"
          />
          <ellipse cx="51.93" cy="378.72" rx="11.02" ry="13.67" />
        </svg>
      </div>
      <div className={style.link__text}>история</div>
    </div>
  );
}

export default HistoryLink;
