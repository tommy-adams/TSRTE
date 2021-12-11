import React from 'react';
import RTE from "./RTE";

function App() {
  return (
    <div className="absolute top-1/2 transform -translate-y-1/2 ">
      <div className="px-10 pt-20 mb-8 w-screen">
        <h1>TypeScript Rich Text Editor</h1>
        <p>This is a simple rich text editor project to practice TypeScript with React!</p>
      </div>
      <div className="mx-6 border border-gray-300 rounded-md p-4">
        <RTE />
      </div>
    </div>
  );
}

export default App;
