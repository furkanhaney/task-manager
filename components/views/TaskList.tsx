import { useState } from "react";
import { Typography, Stack, TextField, Button } from "@mui/material";
import Card from "./Card";
import AddBoxIcon from "@mui/icons-material/AddBox";
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
        {props.tasks.map((task, index) => (
          <Card
            order={index + 1}
            key={task}
            name={task}
            handleRemove={() => handleRemove(task)}
          />
        ))}
        <Stack
          spacing={2}
          style={{ margin: "10px" }}
          direction="row"
          justifyContent="center"
        >
          <TextField
            required={true}
            value={newTask}
            onChange={handleOnChange}
            size="small"
            style={{ width: "100%" }}
          />
          <Button
            onClick={handleAdd}
            startIcon={<AddBoxIcon />}
            style={{ width: "128px", height: "100%" }}
            variant="contained"
          >
            Create
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TaskList;
