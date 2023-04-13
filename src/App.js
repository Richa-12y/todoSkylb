import React, { useState } from "react";
import "./App.css";
import themes from "./themes.json";
import { createContext } from "react";
import { Toggle } from "rsuite";
import InputFrorm from "./components/InputFrorm";

export const themContext = createContext();

function App() {
  const [selectedThem, setSelectedThemt] = React.useState("light");
  const handleThems = (e) => {
    // console.log(e);
    if (e) {
      setSelectedThemt("light");
    } else {
      setSelectedThemt("dark");
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
        <InputFrorm />
        <div>
          <div>
            {toDoList?.todo?.map((el) => {
              return <div> {el?.task}</div>;
            })}
          </div>
          <div>progress</div>
          <div>done</div>
        </div>
      </div>
    </themContext.Provider>
  );
}

export default App;
