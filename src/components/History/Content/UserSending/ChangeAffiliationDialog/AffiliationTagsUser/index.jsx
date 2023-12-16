import UserTagsItem from './UserTagsItem';
import { useContext } from 'react';
import { AffiliationContext } from '../context';

import style from './style.module.css';

function AffiliationTagsUser() {
  const {
    informationClient,
    setInformationClient,
    centuryClient,
    setCenturyClient,
  } = useContext(AffiliationContext);

  const handleRemoveCenturiesClick = (id) => {
    const filteredCenturies = centuryClient.filter((item) => item.id !== id);
    setCenturyClient(filteredCenturies);
  };

  const handleRemoveTypesClick = (id) => {
    const filteredInformation = informationClient.filter(
      (item) => item.id !== id,
    );
    setInformationClient(filteredInformation);
  };

  return (
    <div className={style.tags__affiliationBlockAdd}>
      <div className={style.tags__title}>Добавленные теги:</div>
      <div className={style.tags__affiliation}>
        {!informationClient
          ? null
          : informationClient.map((item) => {
              return (
                <UserTagsItem
                  key={item.id}
                  item={item}
                  handleRemove={handleRemoveTypesClick}
                />
              );
            })}
        {!centuryClient
          ? null
          : centuryClient.map((item) => {
              return (
                <UserTagsItem
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

export default AffiliationTagsUser;
