import ListItemHeader from './ListItemHeader';
import Document from './Document';

import style from '../listStyles.module.css';

function ListItemDocument(props) {
  return (
    <div className={style.list__item}>
      <ListItemHeader />
      <div className={style.list__content}>
        {props.applications.map((application) => {
          return <Document key={application.id} item={application} />;
        })}
      </div>
    </div>
  );
}

export default ListItemDocument;
