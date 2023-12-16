import { useState } from 'react';
import AudioFocusedSvg from '../../../../../../Svg/SideBarSvg/AudioFocusedSvg';
import AudioSvg from '../../../../../../Svg/SideBarSvg/AudioSvg';
import DocumentFocusedSvg from '../../../../../../Svg/SideBarSvg/DocumentFocusedSvg';
import DocumentSvg from '../../../../../../Svg/SideBarSvg/DocumentSvg';
import PhotoFocusedSvg from '../../../../../../Svg/SideBarSvg/PhotoFocusedSvg';
import PhotoSvg from '../../../../../../Svg/SideBarSvg/PhotoSvg';
import ReadyMaterialFocusedSvg from '../../../../../../Svg/SideBarSvg/ReadyMaterialFocusedSvg';
import ReadyMaterialSvg from '../../../../../../Svg/SideBarSvg/ReadyMaterialSvg';
import VideoFocusedSvg from '../../../../../../Svg/SideBarSvg/VideoFocusedSvg';
import VideoSvg from '../../../../../../Svg/SideBarSvg/VideoSvg';
import SideBarItem from '../../../../General/SideBarItem';

import style from './style.module.css';

function AsideProcessed() {
  const [buttonPhotoHovered, setButtonPhotoHovered] = useState(false);
  const [buttonVideoHovered, setButtonVideoHovered] = useState(false);
  const [buttonAudioHovered, setButtonAudioHovered] = useState(false);
  const [buttonDocumentHovered, setButtonDocumentHovered] = useState(false);
  const [buttonMaterialHovered, setButtonMaterialHovered] = useState(false);

  return (
    <div className={style.aside__processed}>
      <div className={style.aside__title}>Мои материалы</div>
      <SideBarItem
        SvgIcon={PhotoSvg}
        SvgFocusedIcon={PhotoFocusedSvg}
        setButtonHovered={setButtonPhotoHovered}
        path="/history/my-materials/photo"
        buttonHovered={buttonPhotoHovered}
        name="Фото"
      />
      <SideBarItem
        SvgIcon={DocumentSvg}
        SvgFocusedIcon={DocumentFocusedSvg}
        setButtonHovered={setButtonDocumentHovered}
        path="/history/my-materials/document"
        buttonHovered={buttonDocumentHovered}
        name="документы"
      />
      <SideBarItem
        SvgIcon={VideoSvg}
        SvgFocusedIcon={VideoFocusedSvg}
        setButtonHovered={setButtonVideoHovered}
        path="/history/my-materials/video"
        buttonHovered={buttonVideoHovered}
        name="Видео"
      />
      <SideBarItem
        SvgIcon={AudioSvg}
        SvgFocusedIcon={AudioFocusedSvg}
        setButtonHovered={setButtonAudioHovered}
        path="/history/my-materials/audio"
        buttonHovered={buttonAudioHovered}
        name="Аудио"
      />
      <SideBarItem
        SvgIcon={ReadyMaterialSvg}
        SvgFocusedIcon={ReadyMaterialFocusedSvg}
        setButtonHovered={setButtonMaterialHovered}
        path="/history/my-materials"
        buttonHovered={buttonMaterialHovered}
        name="Материалы"
      />
    </div>
  );
}

export default AsideProcessed;
