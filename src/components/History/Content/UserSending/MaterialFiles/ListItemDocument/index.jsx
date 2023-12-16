import Document from './Document';
import ListItemHeader from './ListItemHeader';

import style from '../listStyles.module.css';

function ListItemDocument(props) {
  return (
    <div className={style.list__item}>
      <ListItemHeader />
      <div className={style.list__content}>
        {!props.application.length
          ? null
          : props.application.map((item) => {
              return <Document key={item.id} application={item} item={item} />;
            })}
        {!props.applications.length
          ? null
          : props.applications.map((application) => {
              return (
                <Document
                  key={application.group_uid}
                  application={application.files[0]}
                  item={application}
                />
              );
            })}
      </div>
    </div>
  );
}

export default ListItemDocument;
