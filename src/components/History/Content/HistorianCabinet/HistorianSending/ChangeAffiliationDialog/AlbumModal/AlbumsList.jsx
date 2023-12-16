import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { AffiliationContext } from '../AffiliationContainer/context';

import style from './style.module.css';

function AlbumsList({ filterAlbums }) {
  const { albums, setAlbums } = useContext(AffiliationContext);

  const stateAlbums = useSelector((state) => state.tags.albums);

  const albumsFilter = stateAlbums.filter(
    (tag) => tag.title.toUpperCase().indexOf(filterAlbums.toUpperCase()) > -1,
  );

  const handleAddedCredibilityClick = (album) => {
    const newAlbums = [...albums, album];
    return setAlbums(newAlbums);
  };

  const handleRemoveCredibilityClick = (id) => {
    const newAlbums = albums.filter((item) => item.id !== id);
    return setAlbums(newAlbums);
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
