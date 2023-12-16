import AddedTags from './AddedTags';
import ListTags from './ListTags';

import style from './style.module.css';

function AffiliationCenturies() {
  return (
    <>
      <div className={style.tags__title}>Теги (период/век):</div>
      <div className={style.tags__block}>
        <AddedTags />
        <ListTags />
      </div>
    </>
  );
}

export default AffiliationCenturies;
