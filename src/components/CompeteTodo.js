import React from "react";
import { useContext } from "react";
import { themContext } from "../App";
const CompeteTodo = ({ toDoList, setToDolist }) => {
  const { themes } = useContext(themContext);

  let todolist = JSON.parse(localStorage.getItem("todo"));

  return (
    <>
      <div
        className="todo_container_details"
        style={{
          background: themes.card.background,
          border: `1px solid ${themes.card.border}`,
          color: themes.card.color,
        }}
      >
        <h6>Done</h6>
        <div className="todo_text">
          {todolist?.done
            ?.sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((el, index) => {
              return (
                <div>
                  <div style={{ color: "green" }}>
                    {index + 1} {el?.task}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default CompeteTodo;
