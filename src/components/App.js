import React from "react";

import Timer from "./Timer";

import "../index.css";

const App = () => {
  return (
    <div className="bg-blue-sea" style={{ height: "100vh" }}>
      <h1 className="text-gray-50 text-4xl text-center py-4 tracking-wider">
        Stand Stopwatch
      </h1>
      <Timer title="Sit" />
      <Timer title="Stand" />
    </div>
  );
};

export default App;
