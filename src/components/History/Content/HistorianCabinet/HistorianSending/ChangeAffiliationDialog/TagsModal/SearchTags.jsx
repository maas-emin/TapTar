import style from './style.module.css';

function SearchTags({ filterTags, changeFilterTags }) {
  return (
    <div className={style.userForm}>
      <div className={style.formTitle}>Поиск тега:</div>
      <input
        placeholder="Введите текст..."
        className={style.userFormInput}
        type="text"
        name="filterTags"
        onChange={changeFilterTags}
        value={filterTags}
      />
    </div>
  );
}

export default SearchTags;
