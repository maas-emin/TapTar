import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { AffiliationContext } from '../context';
import ServerTagsItem from './ServerTagsItem';

import style from './style.module.css';

function TagsCenturies() {
  const { centuryClient, setCenturyClient, checkTime } =
    useContext(AffiliationContext);

  const centuries = useSelector((state) => state.tags.centuries);
  const files = useSelector((state) => state.application.changeFiles.files);

  const handleAddedCenturiesClick = (tag, checkTag) => {
    if (checkTag) return;

    const addCenturies = [...centuryClient, tag];
    setCenturyClient(addCenturies);
  };

  if (files.group_uid && !checkTime) return null;

  return (
    <div className={style.tags__affiliationBlockAdd}>
      <div className={style.tags__title}>Период/век:</div>
      <div className={style.tags__affiliation}>
        {centuries.map((item) => {
          const checkTag = centuryClient.some((tag) => tag.id === item.id);
          return (
            <ServerTagsItem
              key={item.id}
              item={item}
              handleAdded={handleAddedCenturiesClick}
              checkTag={checkTag}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TagsCenturies;
