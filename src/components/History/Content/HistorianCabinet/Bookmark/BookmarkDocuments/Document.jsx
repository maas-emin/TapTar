import ChangeIcons from '../ProcessIcons';
import DocumentIcon from '../../../../../../Svg/CabinetSvg/DocumentIcon/DocumentIcon';

import style from '../stylesMedia.module.css';

function Document(props) {
  return (
    <div className={style.block}>
      <div className={style.item}>
        <div className={style.document}>
          <DocumentIcon color="#4686CC" styleName={'cabinetCard'} />
        </div>
        <div className={style.icons}>
          <ChangeIcons item={props.document} format="document" />
        </div>
      </div>
      <div className={style.name}>{props.document.title}</div>
    </div>
  );
}

export default Document;
