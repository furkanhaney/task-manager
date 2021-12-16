import { Stack, Typography, Paper, Button } from "@mui/material";

const Card = (props: { name: string; handleRemove: () => void }) => (
  <Paper elevation={2} style={{ margin: "10px", padding: "10px" }}>
    <Stack direction="row">
      <Typography style={{ width: "100%" }} variant="h5" align="center">
        {props.name}
      </Typography>
      <Button
        onClick={() => props.handleRemove()}
        variant="contained"
        size="small"
        color="error"
      >
        X
      </Button>
    </Stack>
  </Paper>
);

export default Card;
