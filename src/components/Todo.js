import React from "react";
import { useContext } from "react";
import { themContext } from "../App";
import TrashIcon from "@rsuite/icons/Trash";
import ArrowRightLineIcon from "@rsuite/icons/ArrowRightLine";
import EditIcon from "@rsuite/icons/Edit";
import { Modal, Button, ButtonToolbar, Placeholder, Input } from "rsuite";
import { useState } from "react";

const Todo = ({ toDoList, setToDolist }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { themes } = useContext(themContext);
  const addToDoToProgress = (item, todoItem) => {
    let todolist = JSON.parse(localStorage.getItem("todo"));

    let obj = {
      ...todolist,
      progress: [...todolist?.progress, todoItem],
      todo: toDoList.todo.filter((el) => el.task !== todoItem.task),
    };
    localStorage.setItem("todo", JSON.stringify(obj));
    setToDolist(obj);
  };
  const editTodo = (item, todoItem) => {
    handleOpen(true);

    setEditItem(todoItem);
  };
  const deleteToDo = (item, todoItem) => {
    let todolist = JSON.parse(localStorage.getItem("todo"));

    let obj = {
      ...todolist,
      todo: toDoList.todo.filter((el) => el.task !== todoItem.task),
    };
    localStorage.setItem("todo", JSON.stringify(obj));
    setToDolist(obj);
  };
  const iconClick = (button, todoItem) => {
    if (button.label === "next") {
      addToDoToProgress(button, todoItem);
    } else if (button.label === "edit") {
      editTodo(button, todoItem);
    } else {
      deleteToDo(button, todoItem);
    }
  };
  const buttonData = [
    {
      color: "orange",
      appearance: "primary",
      text: <EditIcon />,
      label: "edit",
    },
    {
      color: "red",
      appearance: "primary",
      text: <TrashIcon />,
      label: "delete",
    },
    {
      color: "blue",
      appearance: "primary",
      text: <ArrowRightLineIcon />,
      label: "next",
    },
  ];
  const [editText, setEditText] = useState("");
  const [editItem, setEditItem] = useState("");
  const onUpadte = () => {
    let todolist = JSON.parse(localStorage.getItem("todo"));
    console.log(todolist);

    let updatableIndex = todolist.todo.findIndex(
      (el) => el.task === editItem.task
    );
    // console.log(updatableIndex);
    //  let obj = {
    //    ...todolist,
    //    todo: toDoList.todo.filter((el) => el.task !== todoItem.task),
    //  };
    todolist.todo[updatableIndex].task = editText;
    localStorage.setItem("todo", JSON.stringify(todolist));
    setToDolist(todolist);

    handleClose(false);
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Upadte your task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            placeholder="add Task"
            value={editText}
            onChange={(e) => setEditText(e)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onUpadte} appearance="primary">
            Upadte Todo
          </Button>
        </Modal.Footer>
      </Modal>
      <div
        className="todo_container_details"
        style={{
          background: themes.card.background,
          border: `1px solid ${themes.card.border}`,
          color: themes.card.color,
        }}
      >
        <h6>To Do</h6>
        <div className="todo_text">
          {toDoList?.todo
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

export default Todo;
