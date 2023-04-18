import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Vite </h1>
      <div className="card">
        <button
          type="button"
          onClick={() => setCount((precount) => precount + 1)}
        >
          {count}
        </button>
        <p>
          Test <code>src/App.tsx</code>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
