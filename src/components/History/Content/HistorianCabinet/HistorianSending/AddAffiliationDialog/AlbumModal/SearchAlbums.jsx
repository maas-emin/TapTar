import style from './style.module.css';

function SearchAlbums({ changeFilterAlbums, filterAlbums }) {
  return (
    <div className={style.userForm}>
      <div className={style.formTitle}>Поиск тега:</div>
      <input
        placeholder="Введите текст..."
        className={style.userFormInput}
        type="text"
        name="filterAlbums"
        onChange={changeFilterAlbums}
        value={filterAlbums}
      />
    </div>
  );
}

export default SearchAlbums;
