import DocumentIcon from '../../../../../Svg/CabinetSvg/DocumentIcon/DocumentIcon';
import ChangeIcons from '../ProcessIcons';

import style from '../stylesMedia.module.css';

function ContributionDocument(props) {
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

export default ContributionDocument;
