import ReactPlayer from 'react-player';
import { useHistory } from 'react-router-dom';
import TasksIcons from '../TasksIcons';
import TasksTitle from '../TasksTitle';

import style from '../stylesMedia.module.css';

function WorkshopVideo({ video }) {
  const history = useHistory();

  return (
    <div className={style.block}>
      <div className={style.file}>
        <div className={style.file__item}>
          <div
            onClick={() =>
              history.push({
                pathname: `/history/workshop/master/${
                  video.process_id || video.id
                }`,
                process_status: video.process_status,
                type: video.type,
              })
            }
            className={style.tasksIcons}
          >
            {video.causes.map((item) => {
              return <TasksIcons key={item.id} item={item} />;
            })}
          </div>
          <div
            onClick={() =>
              history.push({
                pathname: `/history/workshop/master/${
                  video.process_id || video.id
                }`,
                process_status: video.process_status,
                type: video.type,
              })
            }
            className={style.tasksTitle}
          >
            {video.causes.map((item) => {
              return <TasksTitle key={item.id} item={item} />;
            })}
          </div>
          <ReactPlayer
            width="100%"
            height="100%"
            url={`${process.env.REACT_APP_TEPTAR_HOST}/storage/${video.url}`}
          />
        </div>
        <div className={style.name}>{video.title}</div>
      </div>
    </div>
  );
}

export default WorkshopVideo;
