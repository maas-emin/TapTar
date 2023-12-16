import style from './style.module.css';

function TagsCenturies({ century }) {
  if (!century.length) {
    return null;
  }

  return (
    <div className={style.tags__container}>
      <div className={style.tags__subTitle}>Теги (период/век):</div>
      <div className={style.tags__items}>
        {!century
          ? null
          : century.map((item) => {
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

export default TagsCenturies;
