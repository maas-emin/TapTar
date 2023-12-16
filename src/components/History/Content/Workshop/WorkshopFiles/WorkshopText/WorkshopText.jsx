import { useHistory } from 'react-router-dom';
import TasksIcons from '../TasksIcons';
import TasksTitle from '../TasksTitle';

import style from '../stylesMedia.module.css';

function WorkshopText({ text }) {
  const history = useHistory();

  return (
    <div className={style.block}>
      <div className={style.file}>
        <div className={style.file__item}>
          <div
            onClick={() =>
              history.push({
                pathname: `/history/workshop/master/${
                  text.process_id || text.id
                }`,
                process_status: text.process_status,
                type: text.type,
              })
            }
            className={style.tasksIcons}
          >
            {text.causes.map((item) => {
              return <TasksIcons key={item.id} item={item} />;
            })}
          </div>
          <div
            onClick={() =>
              history.push({
                pathname: `/history/workshop/master/${
                  text.process_id || text.id
                }`,
                process_status: text.process_status,
                type: text.type,
              })
            }
            className={style.tasksTitle}
          >
            {text.causes.map((item) => {
              return <TasksTitle key={item.id} item={item} />;
            })}
          </div>
          <svg
            className={style.file__itemSvg}
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.14933 18.9593C8.15978 18.8966 8.15978 18.8078 8.15978 18.7712V4.16091H6.38251C5.98523 4.16091 5.56183 4.18705 5.17501 4.29682C4.91364 4.37001 4.66796 4.48501 4.45364 4.65228C3.6225 5.31092 3.01091 6.81637 1.90273 6.81637C1.66227 6.81637 1.42705 6.76933 1.19705 6.69614C1.02455 6.64387 0.852046 6.58114 0.690001 6.50274L0 6.15773L0.214318 5.42069C0.339773 4.99205 0.460001 4.56341 0.575001 4.13478C0.669092 3.795 0.742274 3.45 0.799774 3.09978C0.867728 2.7025 0.930456 2.3 0.977501 1.8975C1.01409 1.55773 1.06636 1.19705 1.18659 0.872956L1.2075 0.82591C1.44796 0.282273 1.96023 0 2.54569 0C3.02137 0 3.49182 0.0522728 3.9675 0.094091C4.74114 0.167273 5.51478 0.182955 6.28842 0.182955H15.7393C16.5025 0.182955 17.2709 0.167273 18.0341 0.094091C18.515 0.0470455 19.0012 0 19.4821 0C20.0362 0 20.5171 0.266591 20.7837 0.752728L20.815 0.815456L20.8412 0.878183C20.9614 1.20227 21.0032 1.57864 21.0346 1.92364C21.0659 2.31046 21.1391 2.69728 21.2228 3.08409C21.2855 3.45 21.3587 3.80546 21.4423 4.16091C21.5416 4.57387 21.6723 4.98682 21.803 5.38932L22.08 6.21523L21.2698 6.53933C21.1287 6.59683 20.9823 6.6491 20.8359 6.69614C20.6059 6.76933 20.3707 6.8216 20.1303 6.8216C19.0848 6.8216 18.2955 5.25342 17.548 4.65751C17.3337 4.49023 17.088 4.37523 16.8266 4.30205C16.4502 4.1975 16.0373 4.16614 15.6505 4.16614H13.8732V18.7764C13.8732 18.8287 13.8732 18.8966 13.8732 18.9593C13.9255 18.9855 13.9882 19.0064 14.0248 19.0168C14.2862 19.1005 14.5789 19.1423 14.8559 19.1841C15.5877 19.3305 16.0791 19.8584 16.0791 20.6164C16.0791 20.7366 16.0687 20.8516 16.0582 20.9666C16.0477 21.1182 16.0268 21.2698 15.9902 21.4214L15.8021 22.1689L15.0337 22.1218C14.3384 22.08 13.6484 22.0434 12.9532 22.0173C12.305 21.9912 11.6621 21.9703 11.0139 21.9703C10.3657 21.9703 9.72274 21.9859 9.07456 22.0173C8.38978 22.0487 7.70501 22.08 7.02024 22.1218L6.40864 22.1584L6.13683 21.6148C6.03751 21.4162 5.98523 21.1966 5.96433 20.9718C5.95387 20.8568 5.94342 20.7366 5.94342 20.6164C5.94342 20.3341 6.00092 20.0623 6.13683 19.8166C6.3616 19.4141 6.77455 19.2312 7.21364 19.1528C7.38092 19.1318 7.92978 19.0482 8.13887 18.9698L8.14933 18.9593ZM7.1091 20.9823C7.75206 20.9457 8.38978 20.9091 9.03274 20.883C9.6966 20.8568 10.3552 20.8359 11.0191 20.8359C11.683 20.8359 12.3468 20.8568 13.0055 20.883C13.6484 20.9091 14.2914 20.9405 14.9343 20.9771C14.9396 20.9405 14.9448 20.9039 14.9448 20.8621C14.95 20.7784 14.9605 20.6896 14.9605 20.6007C14.9605 20.3968 14.8559 20.3132 14.6677 20.2766C14.3489 20.2296 14.0039 20.1721 13.6902 20.0728C13.4864 20.0048 13.2668 19.9159 13.0996 19.7748C12.9532 19.6546 12.8434 19.503 12.8016 19.3148C12.7598 19.1371 12.7493 18.9437 12.7493 18.7659V3.03182H15.6505C16.1418 3.03182 16.6541 3.07364 17.1298 3.20955C17.5375 3.32455 17.9139 3.5075 18.2432 3.76887C18.583 4.03546 18.86 4.37523 19.0848 4.74114C19.1632 4.87182 19.9368 5.68728 20.125 5.68728C20.24 5.68728 20.3655 5.65592 20.4753 5.61933C20.5432 5.59842 20.6059 5.57751 20.6739 5.55137C20.5537 5.17501 20.4387 4.79864 20.3446 4.41182C20.2557 4.03546 20.1773 3.6591 20.1146 3.28273C20.0257 2.86455 19.9473 2.43591 19.9107 2.00205C19.895 1.78773 19.8637 1.47932 19.7905 1.27023C19.7225 1.15523 19.618 1.10818 19.4821 1.10818C19.043 1.10818 18.5725 1.16046 18.1334 1.19705C17.3389 1.27023 16.5339 1.29114 15.7393 1.29114H6.28842C5.48342 1.29114 4.66796 1.27023 3.86296 1.19705C3.43955 1.16046 2.97432 1.10818 2.54569 1.10818C2.415 1.10818 2.3 1.13432 2.23728 1.25977C2.15887 1.47409 2.12228 1.77727 2.09614 2.00205C2.04909 2.42546 1.98114 2.84887 1.90796 3.27228C1.84523 3.65387 1.76159 4.03546 1.65705 4.41182C1.5525 4.79341 1.44796 5.16978 1.33818 5.55137C1.40091 5.57228 1.46364 5.59319 1.52637 5.6141C1.64137 5.65069 1.77205 5.68205 1.8975 5.68205C2.05955 5.68205 2.83841 4.85091 2.90637 4.73591C3.13637 4.37001 3.41341 4.03546 3.74796 3.76364C4.07728 3.50228 4.45364 3.31932 4.86137 3.20432C5.34228 3.06841 5.87023 3.02659 6.37205 3.02659H9.27319V18.7607C9.27319 19.1266 9.20001 19.5291 8.91774 19.7852C8.59887 20.0728 7.7991 20.193 7.39137 20.2453C7.34433 20.2557 7.15092 20.2975 7.11955 20.3446C7.07774 20.4178 7.06728 20.5171 7.06728 20.6007C7.06728 20.6843 7.07251 20.7732 7.08296 20.8621C7.08819 20.8987 7.09342 20.9353 7.09864 20.9771L7.1091 20.9823Z"
              fill="#4686CC"
            />
          </svg>
        </div>
        <div className={style.name}>{text.title}</div>
      </div>
    </div>
  );
}

export default WorkshopText;
