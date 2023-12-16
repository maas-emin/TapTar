import style from './style.module.css';

function ListTagsItem({ item, handleAdded, checkTag }) {
  return (
    <div
      onClick={() => handleAdded(item, checkTag)}
      key={item.id}
      className={
        !checkTag ? style['tags__item-choice'] : style['tags__item-disabled']
      }
    >
      {item.title}
      <svg
        className={style.tagsSvg}
        xmlns="http://www.w3.org/2000/svg"
        width="19px"
        height="19px"
        viewBox="0 0 1000 1000"
      >
        <path
          id="_8_copy"
          data-name="8 copy"
          fill="#fff"
          fillRule="evenodd"
          d="M479.5,911C252.786,911,69,727.213,69,500.5S252.786,90,479.5,90,890,273.789,890,500.5,706.212,911,479.5,911Zm0-769.688c-198.375,0-359.188,160.813-359.188,359.186S281.124,859.688,479.5,859.688,838.688,698.874,838.688,500.5,677.872,141.315,479.5,141.315ZM633.436,526.157H505.155V654.44a25.657,25.657,0,0,1-51.314,0V526.157H325.562a25.656,25.656,0,1,1,0-51.311H453.841V346.562a25.657,25.657,0,0,1,51.314,0V474.846H633.436A25.656,25.656,0,1,1,633.436,526.157Z"
        />
      </svg>
    </div>
  );
}

export default ListTagsItem;
