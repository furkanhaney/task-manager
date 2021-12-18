import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import TaskList from "./views/TaskList";

const INITIAL_TASKS = ["Wake up", "Go to sleep"];

const Main = () => {
  const [tasks, setTasks] = useState<string[]>(INITIAL_TASKS);

  const handleAdd = (task: string) => {
    setTasks(tasks.concat([task]));
  };

  const handleRemove = (task: string) => {
    setTasks(tasks.filter((task_i) => task_i !== task));
  };
  return (
    <Grid justifyContent="center" container>
      <Grid xs={12} md={8} lg={6} item>
        <TaskList
          tasks={tasks}
          handleAdd={handleAdd}
          handleRemove={handleRemove}
        />
      </Grid>
    </Grid>
  );
};

export default Main;
