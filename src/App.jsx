import React from "react";

import {
  ThemeProvider,
  createMuiTheme,
  Grid,
  makeStyles,
} from "@material-ui/core";
import { indigo, red } from "@material-ui/core/colors";
import Items from "./Components/Parts/items";

const Theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: red,
  },
});

const useStyles = makeStyles((theme) => ({
  Section_1: {

  },
  Section_2: {

  },

}))

function App() {
  const classes = useStyles()
  console.log(Items)

  return (
    <ThemeProvider theme={Theme}>
      <Grid container spacing={0}>
        <Grid item lg={6} md={6} sm={12} xs={12} className={classes.Section_1}>
          <h1>Section 1</h1>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12} className={classes.Section_2}>
          <h1>Section 2</h1>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
