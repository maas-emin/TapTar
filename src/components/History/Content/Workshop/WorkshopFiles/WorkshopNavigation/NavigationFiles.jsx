import { useState } from 'react';
import AudioFocusedSvg from '../../../../../../Svg/SideBarSvg/AudioFocusedSvg';
import AudioSvg from '../../../../../../Svg/SideBarSvg/AudioSvg';
import DocumentFocusedSvg from '../../../../../../Svg/SideBarSvg/DocumentFocusedSvg';
import DocumentSvg from '../../../../../../Svg/SideBarSvg/DocumentSvg';
import PhotoFocusedSvg from '../../../../../../Svg/SideBarSvg/PhotoFocusedSvg';
import PhotoSvg from '../../../../../../Svg/SideBarSvg/PhotoSvg';
import TextFocusedSvg from '../../../../../../Svg/SideBarSvg/TextFocusedSvg';
import TextSvg from '../../../../../../Svg/SideBarSvg/TextSvg';
import VideoFocusedSvg from '../../../../../../Svg/SideBarSvg/VideoFocusedSvg';
import VideoSvg from '../../../../../../Svg/SideBarSvg/VideoSvg';
import SideBarItem from '../../../../General/SideBarItem';

import style from './style.module.css';

function NavigationFiles() {
  const [buttonPhotoHovered, setButtonPhotoHovered] = useState(false);
  const [buttonVideoHovered, setButtonVideoHovered] = useState(false);
  const [buttonAudioHovered, setButtonAudioHovered] = useState(false);
  const [buttonTextHovered, setButtonTextHovered] = useState(false);
  const [buttonDocumentHovered, setButtonDocumentHovered] = useState(false);

  return (
    <div className={style.sidebar}>
      <SideBarItem
        SvgIcon={PhotoSvg}
        SvgFocusedIcon={PhotoFocusedSvg}
        setButtonHovered={setButtonPhotoHovered}
        path="/history/workshop/photos"
        buttonHovered={buttonPhotoHovered}
        name="Фото"
      />
      <SideBarItem
        SvgIcon={DocumentSvg}
        SvgFocusedIcon={DocumentFocusedSvg}
        setButtonHovered={setButtonDocumentHovered}
        path="/history/workshop/documents"
        buttonHovered={buttonDocumentHovered}
        name="документы"
      />
      <SideBarItem
        SvgIcon={VideoSvg}
        SvgFocusedIcon={VideoFocusedSvg}
        setButtonHovered={setButtonVideoHovered}
        path="/history/workshop/videos"
        buttonHovered={buttonVideoHovered}
        name="Видео"
      />
      <SideBarItem
        SvgIcon={TextSvg}
        SvgFocusedIcon={TextFocusedSvg}
        setButtonHovered={setButtonTextHovered}
        path="/history/workshop/text"
        buttonHovered={buttonTextHovered}
        name="Текст"
      />
      <SideBarItem
        SvgIcon={AudioSvg}
        SvgFocusedIcon={AudioFocusedSvg}
        setButtonHovered={setButtonAudioHovered}
        path="/history/workshop/audios"
        buttonHovered={buttonAudioHovered}
        name="Аудио"
      />
    </div>
  );
}

export default NavigationFiles;
