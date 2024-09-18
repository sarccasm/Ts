import { useState } from "react";
import InputGroup from "./components/InputGroup/InputGroup";

function App() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setValue(value);
    setError(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value));
  };

  return (
    <div className="App">
      <InputGroup
        label="Email"
        placeholder="Input..."
        value={value}
        onChange={handleChange}
        error={error}
      />
      {error && <p>This field is required.</p>}
    </div>
  );
}

export default App;
