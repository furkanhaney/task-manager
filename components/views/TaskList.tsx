import { useState } from "react";
import { Typography, Stack, TextField, Button } from "@mui/material";
import Card from "./Card";

const TaskList = (props: {
  tasks: string[];
  handleAdd: (task: string) => void;
  handleRemove: (task: string) => void;
}) => {
  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    props.handleAdd(newTask);
    setNewTask("");
  };

  const handleOnChange = (e: any) => {
    setNewTask(e.target.value);
  };

  const handleRemove = (task: string) => {
    props.handleRemove(task);
  };

  return (
    <Stack>
      <Typography variant="h3" align="center">
        Tasks
      </Typography>
      <Stack direction="column">
        {props.tasks.map((task) => (
          <Card
            key={task}
            name={task}
            handleRemove={() => handleRemove(task)}
          />
        ))}
        <Stack direction="row">
          <TextField
            required={true}
            value={newTask}
            onChange={handleOnChange}
            style={{ margin: "10px", width: "100%" }}
          />
          <Button
            onClick={handleAdd}
            style={{ margin: "10px" }}
            variant="contained"
          >
            Add
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TaskList;
