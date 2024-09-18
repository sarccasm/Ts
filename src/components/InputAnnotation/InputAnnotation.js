import "./InputAnnotation.css";

function InputAnnotation({ message, type }) {
  const annotationClass = type === "error" ? "annotation error" : "annotation";

  return <small className={annotationClass}>{message}</small>;
}

export default InputAnnotation;
