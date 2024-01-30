import React, { useEffect, useState } from "react";
import logo from "./logo.svg";

function App() {
  let [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("/api/questions")
      .then((res) => res.json())
      .then((json) => {
        setQuestions(json.questions);
      });
  }, []);

  return (
    <div className="bg-gray-800">
      <header>header</header>
      <main>
        <img src={logo} alt="logo" />
        <p className="text-teal-100">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="text-teal-500"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </main>
    </div>
  );
}

export default App;
