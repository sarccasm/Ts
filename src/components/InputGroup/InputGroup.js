import InputText from "../InputText/InputText";
import InputLabel from "../InputLabel/InputLabel";

function InputGroup({ label, placeholder, value, onChange, disabled, error }) {
  return (
    <div className="input-group">
      <InputLabel text={label} htmlFor="emailInput" />
      <InputText
        id="emailInput"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        error={error}
      />
    </div>
  );
}

export default InputGroup;
