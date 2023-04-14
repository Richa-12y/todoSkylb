import React from "react";
import { useContext } from "react";
import { themContext } from "../App";
import ArrowRightLineIcon from "@rsuite/icons/ArrowRightLine";
const Progress = ({ toDoList, setToDolist }) => {
  const { themes } = useContext(themContext);

  const iconClick = (button, todoItem) => {
    let todolist = JSON.parse(localStorage.getItem("todo"));

    let obj = {
      ...todolist,
      done: [...todolist?.done, todoItem],
      progress: toDoList.progress.filter((el) => el.task !== todoItem.task),
    };
    localStorage.setItem("todo", JSON.stringify(obj));
    setToDolist(obj);
  };
  const buttonData = [
    {
      color: "orange",
      appearance: "primary",
      text: <ArrowRightLineIcon />,
      label: "edit",
    },
  ];

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
        <h6>Progess</h6>
        <div className="todo_text">
          {toDoList?.progress
            ?.sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((el, index) => {
              const date1 = new Date(Date.now());
              const date2 = new Date(el.date);
              const diffTime = Math.abs(date2 - date1);
              const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
              //   console.log(diffDays); // Output: 10
              return (
                <div>
                  <div
                    style={{
                      color: `${
                        diffDays < 2
                          ? "red"
                          : diffDays > 2 && diffDays < 5
                          ? "orange"
                          : "green"
                      }`,
                    }}
                  >
                    {index + 1} {el?.task}
                  </div>
                  <div className="button_container">
                    {buttonData.map((ele, i) => {
                      return (
                        <div onClick={() => iconClick(ele, el)}>{ele.text}</div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Progress;
