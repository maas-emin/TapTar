import ChangeIcons from '../ProcessIcons';

import style from '../stylesMedia.module.css';

function Photo({ photo }) {
  return (
    <div className={style.block}>
      <div className={style.item}>
        <div className={style.image}>
          <img
            src={`${process.env.REACT_APP_TEPTAR_HOST}/storage/${photo.path_to_file}`}
            alt=""
          />
        </div>
        <div className={style.icons}>
          <ChangeIcons item={photo} format="photo" />
        </div>
      </div>
      <div className={style.name}>{photo.title}</div>
    </div>
  );
}

export default Photo;
