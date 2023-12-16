import style from './style.module.css';

function AlbumBtn({ closeModal, albums }) {
  return (
    <button
      onClick={closeModal}
      className={`${style.tags__button} ${
        albums.length === 0 ? style['tags__button--disabled'] : ''
      }`}
    >
      Вернуться назад
    </button>
  );
}

export default AlbumBtn;
