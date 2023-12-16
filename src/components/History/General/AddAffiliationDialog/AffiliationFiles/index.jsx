import GroupItems from './GroupItems';
import SvgIcons from './SvgIcons';
import { useSelector } from 'react-redux';

import style from './style.module.css';

function AffiliationFiles(props) {
  const files = useSelector((state) => state.uploadFiles.files);

  return (
    <>
      <div className={style.groupTitle}>
        <div className={style.groupTitleIcon}>
          <SvgIcons />
        </div>
        <div className={style.groupTitleText}>Группа файлов</div>
      </div>
      <div className={style.flexContainer}>
        {files?.files.map((file) => {
          return (
            <GroupItems
              key={file.id}
              file={file}
              type={files.type}
              handleRemoveOpen={props.handleRemoveOpen}
            />
          );
        })}
      </div>
    </>
  );
}

export default AffiliationFiles;
