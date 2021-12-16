import { Box, Grid, Typography, Stack } from "@mui/material";

const Card = (props: { name: string }) => (
  <Box style={{ margin: "10px 20px", background: "beige" }}>
    <Typography variant="h5" align="center">
      {props.name}
    </Typography>
  </Box>
);

const Main = () => (
  <main>
    <Grid container>
      <Grid xs={12} item>
        <Typography variant="h3" align="center">
          Tasks
        </Typography>
      </Grid>
      <Grid xs={12} item>
        <Stack direction="column">
          <Card name="Wake up" />
          <Card name="Go to sleep" />
        </Stack>
      </Grid>
    </Grid>
  </main>
);

export default Main;
