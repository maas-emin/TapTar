import ListItemHeader from './ListItemHeader';
import Document from './Document';

import style from '../listStyles.module.css';

function MaterialDocuments(props) {
  return (
    <div className={style.list__item}>
      <ListItemHeader />
      <div className={style.list__content}>
        {props.documents.map((document) => {
          return <Document key={document.id} item={document} />;
        })}
      </div>
    </div>
  );
}

export default MaterialDocuments;
