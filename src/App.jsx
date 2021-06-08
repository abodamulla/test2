import React from "react"

import {
  ThemeProvider,
  createMuiTheme,
  Grid,
  makeStyles,
} from "@material-ui/core"

import {
  AccountCircle,
  People,
  AttachMoney,
  Tune,
} from '@material-ui/icons';

import { indigo, red } from "@material-ui/core/colors"

import Items from "./Components/Parts/items";

const Theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: red,
  },
});

const useStyles = makeStyles((theme) => ({
  Section_1: {
    color: theme.palette.primary,
    backgroundColor: 'whitesmoke',
    minHeight: '791px',
  },
  Search: {
    padding: theme.spacing(5),
  },
  Section_2: {

  },
  CardContainer: {
    paddingLeft: theme.spacing(4),
  },

}))

function App() {
  const classes = useStyles()
  console.log(Items)

  return (
    <ThemeProvider theme={Theme}>
      <Grid container spacing={0}>

        <Grid item lg={7} md={7} sm={12} xs={12} className={classes.Section_1}>
          <Grid item lg={12}>
            <ul className='ulnav'>
              <li><AccountCircle className='icon' /><span><p>Karem</p><p>Cachiere</p></span></li>
              <li><People className='icon' />Customer Lookup</li>
              <li><AttachMoney className='icon' />Find Transaction</li>
            </ul>
          </Grid>

          <Grid container spacing={0} className={classes.Search}>
            <Grid item xs={1}>
              <Tune className='setting_Icon' />
            </Grid>
            <Grid item xs={1}>
              <select name="Type" id="type">
                <option value="Test 1">Test 1</option>
                <option value="Test 2">Test 2</option>
                <option value="Test 3">Test 3</option>
              </select>
            </Grid>
          </Grid>
          <Grid item xs={10}>

          </Grid>

          <Grid container spacing={0} className={classes.CardContainer}>
            {
              Items.map(Item => (
                <Grid item lg={3} md={4} sm={3} xs={4} className="cardy">
                  <img src={Item.img} alt={Item.name} />
                  <p>{Item.name}</p>
                  <p>${Item.price}</p>
                </Grid>
              ))
            }
          </Grid>

        </Grid>

        <Grid item lg={5} md={5} sm={12} xs={12} className={classes.Section_2}>
          <h1>Section 2</h1>
        </Grid>

      </Grid>
    </ThemeProvider>
  );
}

export default App;
