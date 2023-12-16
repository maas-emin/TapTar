import { useSelector } from 'react-redux';

import style from './style.module.css';

function MasterUploadFile(props) {
  const show = useSelector((state) => state.workshop.show);

  let accept = null;

  if (show?.file?.type === 'photo') {
    accept = 'image/*';
  }
  if (show?.file?.type === 'video') {
    accept = 'video/*';
  }
  if (show?.file?.type === 'audio') {
    accept = 'audio/*';
  }
  if (show?.file?.type === 'document') {
    accept =
      '.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf';
  }

  return (
    <>
      <label htmlFor="masterFail" className={style.processed__add}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      </label>
      <input
        accept={accept}
        disabled={show?.file?.process_status === 'wait' ? true : false}
        className={style.processed__input}
        onChange={(event) => props.fileUploadHandler(event)}
        type="file"
        id="masterFail"
        name="masterFail"
      />
    </>
  );
}

export default MasterUploadFile;
