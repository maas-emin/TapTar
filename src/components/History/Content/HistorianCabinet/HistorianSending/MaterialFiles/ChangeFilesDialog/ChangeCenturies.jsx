import { useSelector } from 'react-redux';

import style from './style.module.css';

function ChangeCenturies({ century, setCentury, setTagsModal }) {
  const centuries = useSelector((state) => state.tags.centuries);

  const handleAddedCredibilityClick = (tag, checkTag) => {
    const newCentury = [...century, tag];

    if (checkTag) {
      return;
    }

    return setCentury(newCentury);
  };

  const handleRemoveCredibilityClick = (id) => {
    const newCentury = century.filter((item) => item.id !== id);

    return setCentury(newCentury);
  };

  const openModalChangeTags = (title) => {
    setTagsModal({
      open: true,
      title: title,
    });
  };

  return (
    <>
      <div className={style.tags__title}>Теги (период/век):</div>
      <div className={style.tags__block}>
        <div className={style.tags__container}>
          <div className={style.tags__subTitle}>Добавленные:</div>
          <div className={style.tags__items}>
            {!century
              ? null
              : century.map((item) => {
                  return (
                    <div
                      onClick={() => handleRemoveCredibilityClick(item.id)}
                      key={item.id}
                      className={style.tags__item}
                    >
                      {item.title}
                      <svg
                        className={style.tagsSvg}
                        xmlns="http://www.w3.org/2000/svg"
                        width="19px"
                        height="19px"
                        viewBox="0 0 1000 1000"
                      >
                        <path
                          fill="#fff"
                          fillRule="evenodd"
                          id="_8_copy"
                          data-name="8 copy"
                          d="M761.161,793.907C602.711,952.3,345.808,952.3,187.353,793.9s-158.45-415.2,0-573.592,415.353-158.392,573.8,0S919.614,635.513,761.161,793.907ZM223.216,256.163c-138.643,138.593-138.643,363.3,0,501.891s363.434,138.594,502.077,0,138.648-363.3,0-501.9S361.864,117.567,223.216,256.163ZM599.775,417.484l-89.656,89.625,89.658,89.626a25.354,25.354,0,0,1-35.863,35.849l-89.658-89.626L384.6,632.583a25.354,25.354,0,0,1-35.863-35.85L438.4,507.109l-89.658-89.625a25.354,25.354,0,0,1,35.861-35.85l89.658,89.627,89.658-89.625A25.353,25.353,0,1,1,599.775,417.484Z"
                        />
                      </svg>
                    </div>
                  );
                })}
          </div>
        </div>

        <div className={style.tags__container}>
          <div className={style.tags__subTitle}>Список тегов:</div>
          <div className={style.tags__items}>
            {centuries.map((item) => {
              const checkTag = century.some((tag) => tag.id === item.id);
              return (
                <div
                  onClick={() => handleAddedCredibilityClick(item, checkTag)}
                  key={item.id}
                  className={
                    !checkTag
                      ? style['tags__item-choice']
                      : style['tags__item-disabled']
                  }
                >
                  {item.title}
                  <svg
                    className={style.tagsSvg}
                    xmlns="http://www.w3.org/2000/svg"
                    width="19px"
                    height="19px"
                    viewBox="0 0 1000 1000"
                  >
                    <path
                      id="_8_copy"
                      data-name="8 copy"
                      fill="#fff"
                      fillRule="evenodd"
                      d="M479.5,911C252.786,911,69,727.213,69,500.5S252.786,90,479.5,90,890,273.789,890,500.5,706.212,911,479.5,911Zm0-769.688c-198.375,0-359.188,160.813-359.188,359.186S281.124,859.688,479.5,859.688,838.688,698.874,838.688,500.5,677.872,141.315,479.5,141.315ZM633.436,526.157H505.155V654.44a25.657,25.657,0,0,1-51.314,0V526.157H325.562a25.656,25.656,0,1,1,0-51.311H453.841V346.562a25.657,25.657,0,0,1,51.314,0V474.846H633.436A25.656,25.656,0,1,1,633.436,526.157Z"
                    />
                  </svg>
                </div>
              );
            })}
          </div>
          <div
            onClick={() => openModalChangeTags('Теги (период/век):')}
            className={style.btnShow}
          >
            Просмотреть все
          </div>
        </div>
      </div>
    </>
  );
}

export default ChangeCenturies;
