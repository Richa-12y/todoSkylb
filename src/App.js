import React, { useState } from "react";
import "./App.css";
import themes from "./themes.json";
import { createContext } from "react";
import { Button, Toggle } from "rsuite";
import InputFrorm from "./components/InputFrorm";

import Todo from "./components/Todo";
import Progress from "./components/Progress";
import CompeteTodo from "./components/CompeteTodo";
import BackImage from "./assets/casual-life-3d-interior-set-with-armchair-bookcase-and-floor-lamp-1.png";
export const themContext = createContext();

function App() {
  const [selectedThem, setSelectedThemt] = React.useState("light");
  const handleThems = (e) => {
    // console.log(e);
    if (e === true) {
      setSelectedThemt("dark");
    } else {
      setSelectedThemt("light");
    }
  };
  console.log(selectedThem);
  const contextValue = {
    themes: themes[selectedThem],
  };

  const [toDoList, setToDolist] = useState(
    JSON.parse(localStorage.getItem("todo")) ?? []
  );

  return (
    <themContext.Provider value={contextValue}>
      <div
        className="App"
        style={{
          color: themes[selectedThem].body.color,
          background: themes[selectedThem].body.background,
        }}
      >
        <div className="them_changer">
          <Toggle
            size="lg"
            checkedChildren="light"
            unCheckedChildren="dark"
            onChange={handleThems}
          />
        </div>
        <InputFrorm setToDolist={setToDolist} />
        <div className="todo-container">
          <Todo toDoList={toDoList} setToDolist={setToDolist} />
          <Progress toDoList={toDoList} setToDolist={setToDolist} />
          <CompeteTodo toDoList={toDoList} setToDolist={setToDolist} />
          <img src={BackImage} alt="bckimg" />
        </div>
      </div>
    </themContext.Provider>
  );
}

export default App;
