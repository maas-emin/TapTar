import { useContext } from 'react';
import { AffiliationContext } from '../AffiliationContainer/context';
import AddedTagsItem from '../misk/AddedTagsItem';

import style from './style.module.css';

function AddedTags() {
  const { information, setInformation } = useContext(AffiliationContext);

  const handleRemoveTypesClick = (id) => {
    const newInformation = information.filter((item) => item.id !== id);

    return setInformation(newInformation);
  };

  return (
    <div className={style.tags__container}>
      <div className={style.tags__subTitle}>Добавленные:</div>
      <div className={style.tags__items}>
        {!information
          ? null
          : information.map((item) => {
              return (
                <AddedTagsItem
                  key={item.id}
                  item={item}
                  handleRemove={handleRemoveTypesClick}
                />
              );
            })}
      </div>
    </div>
  );
}

export default AddedTags;
