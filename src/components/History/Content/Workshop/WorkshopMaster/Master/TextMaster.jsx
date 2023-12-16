import style from './style.module.css';

function TextMaster(props) {
  return (
    <textarea
      className={style.processed__textarea}
      id=""
      cols="30"
      rows="10"
      value={props.text}
      onChange={props.handleChangeText}
      type="processedText"
      name="processedText"
      placeholder="Введите текст..."
    />
  );
}

export default TextMaster;
