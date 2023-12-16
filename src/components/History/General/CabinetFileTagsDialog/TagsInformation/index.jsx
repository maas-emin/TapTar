import style from './style.module.css';

function TagsInformation({ information }) {
  if (!information.length) {
    return null;
  }

  return (
    <div className={style.tags__container}>
      <div className={style.tags__subTitle}>Теги (тип/принадлежность):</div>
      <div className={style.tags__items}>
        {!information
          ? null
          : information.map((item) => {
              return (
                <div key={item.id} className={style.tags__item}>
                  {item.title}
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default TagsInformation;
