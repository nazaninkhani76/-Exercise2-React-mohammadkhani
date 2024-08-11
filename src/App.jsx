import { useState } from "react";

function App() {
  const [inputvalue, setInputvalue] = useState('');
  const handleInputChange = (e) => {
    setInputvalue(e.target.value);
  };
  return (
    <div className="container">
      <input
        type="text"
        value={inputvalue}
        onChange={handleInputChange}
        placeholder="type..."
      />
      <p>Character Count: {inputvalue.length}</p>
   
    </div>
  );
}

export default App;
