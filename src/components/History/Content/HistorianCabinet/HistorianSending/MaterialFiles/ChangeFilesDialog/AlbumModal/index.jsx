import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import style from './style.module.css';

function AlbumModal(props) {
  const [filterAlbums, setFilterTags] = useState('');

  const stateAlbums = useSelector((state) => state.tags.albums);

  const closeModal = () => {
    props.setAlbumsModal(false);
  };

  const changeFilterAlbums = (e) => {
    setFilterTags(e.target.value);
  };

  const albumsFilter = stateAlbums.filter(
    (tag) => tag.title.toUpperCase().indexOf(filterAlbums.toUpperCase()) > -1,
  );

  const handleAddedCredibilityClick = (album) => {
    const newAlbums = [...props.albums, album];
    return props.setAlbums(newAlbums);
  };

  const handleRemoveCredibilityClick = (id) => {
    const newAlbums = props.albums.filter((item) => item.id !== id);
    return props.setAlbums(newAlbums);
  };

  return (
    <div className={style.form__dialog}>
      <div className={style.tags__title}>Добавить в альбом</div>

      <div onClick={closeModal} className={style.closeTagsModal}>
        Применить
      </div>

      <div className={style.userForm}>
        <div className={style.formTitle}>найти</div>
        <input
          className={style.userFormInput}
          type="text"
          name="filterAlbums"
          onChange={changeFilterAlbums}
          value={filterAlbums}
        />
      </div>

      <div className={style.tags__items}>
        <div className={style.tags__title}>Список альбомов</div>
        {albumsFilter.map((album) => {
          const check = props.albums.some((item) => item.id === album.id);
          return (
            <React.Fragment key={album.id}>
              <div className={style.check}>
                <input
                  className={style.check__input}
                  type="checkbox"
                  id={album.title}
                  name={album.title}
                  checked={check || ''}
                  onChange={
                    !check
                      ? () => handleAddedCredibilityClick(album)
                      : () => handleRemoveCredibilityClick(album.id)
                  }
                />
                <label
                  className={`${style.check__label} ${
                    !check ? style.checked : ''
                  }`}
                  htmlFor={album.title}
                >
                  <h4>{album.title}</h4>
                </label>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default AlbumModal;
