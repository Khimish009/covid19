import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1.2),
  },
}));

const SimplePaper = ({data: {TotalConfirmed, TotalDeaths, TotalRecovered}}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container>
        <Grid item xs={3}>
          <Typography variant="h4">Global</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6">Confirmed: {TotalConfirmed}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6">Deaths: {TotalDeaths}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6">Recovered: {TotalRecovered}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SimplePaper;