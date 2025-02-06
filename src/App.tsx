import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex space-x-4 mb-6">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="w-20 h-20" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-20 h-20" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold text-blue-600">Vite + React</h1>
      <div className="card mt-4 p-6 bg-white shadow-lg rounded-lg">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-700">
          Edit <code className="bg-gray-200 px-1 rounded">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="mt-6 text-gray-500">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;

