import "./InputText.css";

function InputText({ id, placeholder, value, onChange, disabled, error }) {
  const inputClass = error ? "input error" : "input";

  return (
    <input
      type="text"
      id={id}
      className={inputClass}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
}

export default InputText;
