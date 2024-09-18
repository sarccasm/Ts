import "./InputLabel.css";

function InputLabel({ htmlFor, text }) {
  return (
    <label htmlFor={htmlFor} className="input-label">
      {text}
    </label>
  );
}

export default InputLabel;
