import style from './style.module.css';

function DeleteTagsItem({ check, handleSelectedTags, handleDeleteTags, caus }) {
  return (
    <div
      className={style.check}
      onClick={
        !check
          ? () => handleSelectedTags(caus)
          : () => handleDeleteTags(caus.id)
      }
    >
      <div
        className={`${style.checkCircle} ${
          check ? style['checkCircle--active'] : ''
        }`}
      >
        <div className={style.circleInner}></div>
      </div>
      <div className={`${style.check__label} ${check ? style.active : ''}`}>
        {caus.title}
      </div>
    </div>
  );
}

export default DeleteTagsItem;
