import { useState } from 'react';
import ProcessedFocusedSvg from '../../../../../../Svg/SideBarSvg/ProcessedFocusedSvg';
import ProcessedSvg from '../../../../../../Svg/SideBarSvg/ProcessedSvg';
import ProcessingFocusedSvg from '../../../../../../Svg/SideBarSvg/ProcessingFocusedSvg';
import ProcessingSvg from '../../../../../../Svg/SideBarSvg/ProcessingSvg';
import SideBarItem from '../../../../General/SideBarItem';

import style from './style.module.css';

function NavigationProcess() {
  const [buttonProcessedHovered, setButtonProcessedHovered] = useState(false);
  const [buttonProcessingHovered, setButtonProcessingHovered] = useState(false);

  return (
    <div className={style.sidebar}>
      <SideBarItem
        SvgIcon={ProcessingSvg}
        SvgFocusedIcon={ProcessingFocusedSvg}
        setButtonHovered={setButtonProcessingHovered}
        path="/history/workshop/processing"
        buttonHovered={buttonProcessingHovered}
        name="Принятые"
      />
      <SideBarItem
        SvgIcon={ProcessedSvg}
        SvgFocusedIcon={ProcessedFocusedSvg}
        setButtonHovered={setButtonProcessedHovered}
        path="/history/workshop/processed"
        buttonHovered={buttonProcessedHovered}
        name="Завершенные"
      />
    </div>
  );
}

export default NavigationProcess;
