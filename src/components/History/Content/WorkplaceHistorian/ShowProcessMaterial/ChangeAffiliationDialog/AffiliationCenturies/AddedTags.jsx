import { useContext } from 'react';
import { AffiliationContext } from '../AffiliationContainer/context';
import AddedTagsItem from '../misk/AddedTagsItem';

import style from './style.module.css';

function AddedTags() {
  const { century, setCentury } = useContext(AffiliationContext);

  const handleRemoveCenturiesClick = (id) => {
    const newCentury = century.filter((item) => item.id !== id);

    return setCentury(newCentury);
  };

  return (
    <div className={style.tags__container}>
      <div className={style.tags__subTitle}>Добавленные:</div>
      <div className={style.tags__items}>
        {!century
          ? null
          : century.map((item) => {
              return (
                <AddedTagsItem
                  key={item.id}
                  item={item}
                  handleRemove={handleRemoveCenturiesClick}
                />
              );
            })}
      </div>
    </div>
  );
}

export default AddedTags;
