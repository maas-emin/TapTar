import Video from './Video';
import ListItemHeader from './ListItemHeader';

import style from '../listStyles.module.css';

function ListItemVideo(props) {
  return (
    <div className={style.list__item}>
      <ListItemHeader />
      <div className={style.list__content}>
        {!props.video.length
          ? null
          : props.video.map((item) => {
              return <Video key={item.id} video={item} item={item} />;
            })}
        {!props.videos.length
          ? null
          : props.videos.map((video) => {
              return (
                <Video
                  key={video.group_uid}
                  video={video.files[0]}
                  item={video}
                />
              );
            })}
      </div>
    </div>
  );
}

export default ListItemVideo;
