import { useContext, useState } from 'react';
import CloseButton from '../../../../../General/buttons/CloseButton/CloseButton';
import { AffiliationContext } from '../AffiliationContainer/context';
import AlbumBtn from './AlbumBtn';
import AlbumsList from './AlbumsList';
import SearchAlbums from './SearchAlbums';

import style from './style.module.css';

function AlbumModal() {
  const { albums, setAlbumsModal, handleCloseAffiliation } =
    useContext(AffiliationContext);

  const closeModal = () => {
    setAlbumsModal(false);
  };

  const [filterAlbums, setFilterTags] = useState('');

  const changeFilterAlbums = (e) => {
    setFilterTags(e.target.value);
  };

  return (
    <div className={style.form__dialog}>
      <CloseButton
        bgColor="initial"
        handleClick={handleCloseAffiliation}
        width="35px"
        height="35px"
        top="10px"
        right="13px"
        boxShadow="none"
      />
      <div className={style.tags__title}>Добавить в альбом</div>
      <SearchAlbums
        changeFilterAlbums={changeFilterAlbums}
        filterAlbums={filterAlbums}
      />
      <AlbumsList filterAlbums={filterAlbums} />
      <AlbumBtn closeModal={closeModal} albums={albums} />
    </div>
  );
}

export default AlbumModal;
