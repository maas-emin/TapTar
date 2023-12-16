import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CloseButton from '../../../../General/buttons/CloseButton/CloseButton';
import ShowFile from '../ShowFile';
import GroupItems from './GroupItems';
import SvgIcons from './SvgIcons';

import style from './style.module.css';

function ShowFiles() {
  const files = useSelector((state) => state.application.showFiles.files);

  const [showImage, setShowImage] = useState({
    open: false,
    image: null,
  });

  const getOneImage = (file) => {
    setShowImage({
      open: true,
      image: { ...file, type: 'photo' },
    });
  };

  const handleCloseShowImage = () => {
    setShowImage({
      open: false,
      image: null,
    });
  };

  return showImage.open ? (
    <>
      <CloseButton
        bgColor="initial"
        handleClick={handleCloseShowImage}
        width="35px"
        height="35px"
        top="10px"
        right="13px"
        boxShadow="none"
      />
      <ShowFile file={showImage.image} />
    </>
  ) : (
    <div className={style.mainGroup}>
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
              getOneImage={getOneImage}
              key={file.id}
              type={files.type}
              file={file}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ShowFiles;
