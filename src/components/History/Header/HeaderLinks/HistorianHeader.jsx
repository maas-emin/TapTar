import { useState } from 'react';
import HeaderLink from './HeaderLink';
import { useLocation } from 'react-router-dom';
import HistorianMaterialFocusSvg from '../../../../Svg/HeaderSvg/HistorianMaterialFocusSvg';
import HistorianMaterialSvg from '../../../../Svg/HeaderSvg/HistorianMaterialSvg';
import ApproverFocusSvg from '../../../../Svg/HeaderSvg/ApproverFocusSvg';
import ApproverSvg from '../../../../Svg/HeaderSvg/ApproverSvg';
import HistorianCabinetFocusSvg from '../../../../Svg/HeaderSvg/HistorianCabinetFocusSvg';
import HistorianCabinetSvg from '../../../../Svg/HeaderSvg/HistorianCabinetSvg';

import style from './style.module.css';

function HistorianHeader() {
  const location = useLocation();

  const [buttonSendHovered, setButtonSendHovered] = useState(false);
  const [buttonWorkshopHovered, setButtonWorkshopHovered] = useState(false);
  const [buttonContributionHovered, setButtonContributionHovered] =
    useState(false);

  return (
    <>
      <HeaderLink path="/history/incoming-materials">
        <div
          className={style.link__block}
          onMouseEnter={() => setButtonContributionHovered(true)}
          onMouseLeave={() => setButtonContributionHovered(false)}
        >
          <div className={style.link__img}>
            {location.pathname.indexOf('/history/incoming-materials') !== -1 ||
            buttonContributionHovered ? (
              <HistorianMaterialFocusSvg />
            ) : (
              <HistorianMaterialSvg />
            )}
          </div>
          <div className={style.link__title}>Материалы</div>
        </div>
      </HeaderLink>

      <HeaderLink path="/history/approver">
        <div
          className={style.link__block}
          onMouseEnter={() => setButtonWorkshopHovered(true)}
          onMouseLeave={() => setButtonWorkshopHovered(false)}
        >
          <div className={style.link__img}>
            {location.pathname.indexOf('/history/approver') !== -1 ||
            buttonWorkshopHovered ? (
              <ApproverFocusSvg />
            ) : (
              <ApproverSvg />
            )}
          </div>
          <div className={style.link__title}>Утверждение</div>
        </div>
      </HeaderLink>

      <HeaderLink path="/history/my-materials">
        <div
          className={style.link__block}
          onMouseEnter={() => setButtonSendHovered(true)}
          onMouseLeave={() => setButtonSendHovered(false)}
        >
          <div className={style.link__img}>
            {location.pathname.indexOf('/history/my-materials') !== -1 ||
            buttonSendHovered ? (
              <HistorianCabinetFocusSvg />
            ) : (
              <HistorianCabinetSvg />
            )}
          </div>
          <div className={style.link__title}>Мои Материалы</div>
        </div>
      </HeaderLink>
    </>
  );
}

export default HistorianHeader;
