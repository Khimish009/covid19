import React, { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import api from "../api/api";
import GlobalDataBlock from './GlobalDataBlock';
import CountryDataBlock from './CountryDataBlock';

function Summary() {
  const [summaryData, setSummaryData] = useState(null);

  useEffect(() => {
    api.getSummaryData().then((res) => {
      setSummaryData(res.data);
    });
  }, []);

  return summaryData ? (
    <Grid container spacing={3}>
      <Grid item xs={12}><GlobalDataBlock data={summaryData.Global}/></Grid>
      {summaryData.Countries.map(country => {
        return (
          <Grid item xs={3} key={country.CountryCode}>
            <CountryDataBlock data={country} />
          </Grid>
        )
      })}
    </Grid>
  )
  : null
};

export default Summary;
