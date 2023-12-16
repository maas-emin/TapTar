import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  addAlbumsInSend,
  removeAlbumsInSend,
} from '../../../../../../../redux/ducks/userTags';

import style from './style.module.css';

function AlbumsList({ filterAlbums }) {
  const dispatch = useDispatch();

  const albums = useSelector((state) => state.userTags.albums);
  const stateAlbums = useSelector((state) => state.tags.albums);

  const albumsFilter = stateAlbums.filter(
    (tag) => tag.title.toUpperCase().indexOf(filterAlbums.toUpperCase()) > -1,
  );

  const handleAddedCredibilityClick = (album) => {
    dispatch(addAlbumsInSend(album));
  };

  const handleRemoveCredibilityClick = (id) => {
    dispatch(removeAlbumsInSend(id));
  };

  return (
    <div className={style.tags__items}>
      <div className={style.tags__title}>Список альбомов</div>
      {albumsFilter.map((album) => {
        const check = albums.some((item) => item.id === album.id);
        return (
          <div
            key={album.id}
            className={style.check}
            onClick={
              !check
                ? () => handleAddedCredibilityClick(album)
                : () => handleRemoveCredibilityClick(album.id)
            }
          >
            <div
              className={`${style.checkCircle} ${
                check ? style['checkCircle--active'] : ''
              }`}
            >
              <div className={style.circleInner}></div>
            </div>
            <div
              className={`${style.check__label} ${check ? style.active : ''}`}
            >
              {album.title}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AlbumsList;
