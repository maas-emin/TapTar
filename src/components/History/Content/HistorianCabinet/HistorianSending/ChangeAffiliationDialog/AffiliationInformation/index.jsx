import AddedTags from './AddedTags';
import ListTags from './ListTags';

import style from './style.module.css';

function AffiliationInformation() {
  return (
    <>
      <div className={style.tags__title}>Теги (тип/принадлежность):</div>
      <div className={style.tags__block}>
        <AddedTags />
        <ListTags />
      </div>
    </>
  );
}

export default AffiliationInformation;
