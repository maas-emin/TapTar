import { useCallback, useContext } from 'react';
import { useSelector } from 'react-redux';
import { AffiliationContext } from '../AffiliationContainer/context';
import CredibilityItem from './CredibilityItem';

import style from './style.module.css';

function AffiliationCredibility() {
  const { credibility, setCredibility, setCredibilityError, credibilityError } =
    useContext(AffiliationContext);

  const credibilityServer = useSelector((state) => state.tags.credibility);

  const handleAddedCredibilityClick = useCallback(
    (tag, checkTag) => {
      if (!checkTag) {
        if (credibilityError) {
          setCredibilityError('');
        }
        const newCredibility = [...credibility, tag];
        setCredibility(newCredibility);
      } else {
        const filterCredibility = credibility.filter(
          (item) => item.id !== tag.id,
        );
        setCredibility(filterCredibility);
      }
    },
    [credibilityError, credibility, setCredibility, setCredibilityError],
  );

  return (
    <div className={style.credibility}>
      <div className={style.credibility__title}>Достоверность:</div>
      <div className={style.credibility__block}>
        {!credibilityServer
          ? null
          : credibilityServer.map((item) => {
              const checkTag = credibility.some((tag) => tag.id === item.id);
              return (
                <CredibilityItem
                  key={item.id}
                  item={item}
                  checkTag={checkTag}
                  handleAdded={handleAddedCredibilityClick}
                />
              );
            })}
      </div>
    </div>
  );
}

export default AffiliationCredibility;
