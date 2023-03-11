import styles from "./InputTextFeild.module.css";
const InputTextFeild = ({
  type = "text",
  value,
  placeholder = "",
  rows="2",
  onChangeHandler = undefined,
  id=""
}) => {
  return (
    <>
      {type === "text-area" ? (
        <textarea
        id={id}
        rows={rows}
          className={styles.input}
          onChange={onChangeHandler}
          value={value}
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input
        id={id}
          className={styles.input}
          type={type}
          onChange={onChangeHandler}
          value={value}
          placeholder={placeholder}
        />
      )}
    </>
  );
};

export default InputTextFeild;
