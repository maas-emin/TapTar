import style from './style.module.css';

export default function AudioSvg({ color, styleName }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      space="preserve"
      className={style[styleName]}
      version="1.1"
      style={{
        shapeRendering: 'geometricPrecision',
        textRendering: 'geometricPrecision',
        imageRendering: 'optimizeQuality',
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      }}
      viewBox="0 0 100.82 72.1"
      xlink="http://www.w3.org/1999/xlink"
      xodm="http://www.corel.com/coreldraw/odm/2003"
    >
      <g id="Слой_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer" />
        <path
          fill={color}
          fillRule="nonzero"
          d="M46.16 0c-0,0 -0,0 -0,0 -1.99,0 -3.97,0.53 -5.72,1.54 -0.31,0.18 -0.59,0.38 -0.86,0.62l-16.22 14.17 -10.98 0c-6.83,0 -12.38,5.55 -12.38,12.38l0 14.68c0,6.83 5.55,12.38 12.38,12.38l10.98 0 16.22 14.17c0.26,0.23 0.55,0.44 0.86,0.61 1.75,1.01 3.73,1.54 5.72,1.54 6.32,0 11.46,-5.14 11.46,-11.46l0 -49.18c0,-6.32 -5.14,-11.46 -11.46,-11.46zm-0 5.42c3.15,0 6.04,2.52 6.04,6.03l0 49.18c0,3.52 -2.89,6.04 -6.04,6.04 -1,0 -2.03,-0.26 -3.01,-0.82l-17.76 -15.51 -13.01 -0c-3.84,0 -6.95,-3.11 -6.95,-6.96l0 -14.68c0,-3.84 3.11,-6.96 6.95,-6.96l13.01 0 17.76 -15.51c0.97,-0.56 2,-0.82 3.01,-0.82z"
        />
        <path
          fill="none"
          fillRule="nonzero"
          stroke={color}
          strokeWidth="4.46"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          d="M14.11 29.57l9.39 0m12.56 -6.39l7.16 -6.09"
        />
        <path
          fill="none"
          fillRule="nonzero"
          stroke={color}
          strokeWidth="4.85"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          d="M68.32 27.25c1.73,2.5 2.74,5.5 2.74,8.72 0,3.24 -1.01,6.25 -2.76,8.75m9.41 -28.78c4.41,4.67 7.1,13.23 7.1,20.03 0,6.86 -2.74,15.48 -7.24,20.17m9.27 -48.78c7.12,6.67 11.54,18.33 11.54,28.62 0,10.37 -4.49,22.09 -11.71,28.78"
        />
      </g>
    </svg>
  );
}
