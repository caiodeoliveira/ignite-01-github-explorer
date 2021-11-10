import React from "react";
import Counter from "./components/counter";
import RepositoryList from "./components/RepositoryList";
import "./styles/global.scss";

function App() {
  return (
    <>
      <RepositoryList />
      <Counter />
    </>
  );
}

export default App;
