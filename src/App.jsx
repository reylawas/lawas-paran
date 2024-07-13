import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>First React App Installation</h1>
      <div>
        <h4>What is React?</h4>
      </div>
      <p>
        React is a JavaScript library for building user interfaces. React is
        used to build single-page applications. React allows us to create
        reusable UI components.
      </p>
      <ul>1.Rey Lawas</ul>
      <ul>2.Mary Claire Paran</ul>
    </div>
  );
}

export default App;
