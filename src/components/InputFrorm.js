import React, { useContext } from "react";
import { themContext } from "../App";
import { Button, Input, InputGroup } from "rsuite";
import ExpandOutlineIcon from "@rsuite/icons/ExpandOutline";
import { DatePicker, Stack } from "rsuite";

const styles = {
  width: 300,
  marginBottom: 10,
};

const InputFrorm = () => {
  const { themes } = useContext(themContext);
  const [task, setTask] = React.useState("");
  const [currentDate, setCurrentDate] = React.useState(Date.now());
  //   console.log(currentDate);
  const addTask = () => {
    if (!JSON.parse(localStorage.getItem("todo"))) {
      if (task === "") {
        alert("Please write task first ");
        return;
      }
      let taskList = {
        progress: [],
        todo: [
          {
            task: task,
            date: currentDate,
          },
        ],
        done: [],
      };
      localStorage.setItem("todo", JSON.stringify(taskList));
    }

    let oldTaskList = JSON.parse(localStorage.getItem("todo"));
    localStorage.setItem(
      "todo",
      JSON.stringify({
        ...oldTaskList,
        todo: [...oldTaskList.todo, { task: task, date: currentDate }],
      })
    );
  };
  return (
    <>
      <div
        className="from_container"
        style={{
          background: themes.card.background,
          border: `1px solid ${themes.card.border}`,
          color: themes.card.color,
        }}
      >
        <InputGroup style={styles}>
          <Input
            placeholder="add Task"
            value={task}
            onChange={(e) => setTask(e)}
          />
          <InputGroup.Addon>
            <ExpandOutlineIcon />
          </InputGroup.Addon>
        </InputGroup>
        <Stack direction="column" alignItems="flex-start" spacing={6}>
          <DatePicker
            format="yyyy-MM-dd HH:mm:ss"
            style={styles}
            onChange={(e) => setCurrentDate(e)}
          />
        </Stack>
        <Button color="green" appearance="primary" onClick={addTask}>
          Add Task
        </Button>
      </div>
    </>
  );
};

export default InputFrorm;
