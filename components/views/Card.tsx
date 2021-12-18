import { Stack, Typography, Paper, Button, IconButton } from "@mui/material";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import DeleteIcon from "@mui/icons-material/Delete";

const CardPreview = (props: {
  order: number;
  name: string;
  handleRemove: () => void;
}) => (
  <Paper elevation={2} style={{ margin: "10px", padding: "10px" }}>
    <Stack direction="row" spacing={2}>
      <Typography style={{ width: "32px" }} variant="h6" align="center">
        {props.order}
      </Typography>
      <Typography style={{ width: "100%" }} variant="h6" align="center">
        {props.name}
      </Typography>
      <Button
        startIcon={<PlayCircleFilledIcon />}
        variant="contained"
        color="success"
        style={{ width: "128px", height: "40px" }}
        disabled
      >
        Start
      </Button>
      <Button
        onClick={() => props.handleRemove()}
        startIcon={<DeleteIcon />}
        variant="contained"
        color="error"
        style={{ width: "128px", height: "40px" }}
      >
        Delete
      </Button>
    </Stack>
  </Paper>
);

export default CardPreview;
