import style from './style.module.css';

function ChatImage(props) {
  return (
    <div className={`${style.fileShow} ${style.imageShow}`}>
      <div className={`${style.oneFile} ${style.imageShow}`}>
        <img
          src={`${process.env.REACT_APP_TEPTAR_HOST}/storage/${props.path}`}
          alt="#"
        />
      </div>
    </div>
  );
}

export default ChatImage;
