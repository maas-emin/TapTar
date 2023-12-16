import { useHistory } from 'react-router-dom';
import TasksIcons from '../TasksIcons';
import TasksTitle from '../TasksTitle';

import style from '../stylesMedia.module.css';

function WorkshopPhoto({ photo }) {
  const history = useHistory();

  return (
    <div className={style.block}>
      <div className={style.file}>
        <div className={style.file__item}>
          <div
            onClick={() =>
              history.push({
                pathname: `/history/workshop/master/${
                  photo.process_id || photo.id
                }`,
                process_status: photo.process_status,
                type: photo.type,
              })
            }
            className={style.tasksIcons}
          >
            {photo.causes.map((item) => {
              return <TasksIcons key={item.id} item={item} />;
            })}
          </div>
          <div
            onClick={() =>
              history.push({
                pathname: `/history/workshop/master/${
                  photo.process_id || photo.id
                }`,
                process_status: photo.process_status,
                type: photo.type,
              })
            }
            className={style.tasksTitle}
          >
            {photo.causes.map((item) => {
              return <TasksTitle key={item.id} item={item} />;
            })}
          </div>
          <img
            src={`${process.env.REACT_APP_TEPTAR_HOST}/storage/${photo.url}`}
            alt=""
          />
        </div>
        <div className={style.name}>{photo.title}</div>
      </div>
    </div>
  );
}

export default WorkshopPhoto;
