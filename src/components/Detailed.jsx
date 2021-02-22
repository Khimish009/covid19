import React, { useEffect, useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import api from "../api/api";
import Chart from './Chart';

function Detailed() {
    const [countries, setCountries] = useState([]);
    const [countryCode, setCountryCode] = useState('russia');
    const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    api.getAllCounties().then((res) => {
      setCountries(res.data);
    });
  }, []);

  useEffect(() => {
    api.getCountyData(countryCode).then(res => {
      setCountryData(prepareData(res.data))
    })
  }, [countryCode]);

  const handleChange = (e) => {
    setCountryCode(e.target.value);
  };

  const prepareData = (data) => {
    const chartData = {
      labels: [],
      active: [],
      deaths: [],
      recovered: [],
    }

    data.forEach(country => {
      chartData.labels.push(country.Date.replace(/T.*$/, ''))
      chartData.active.push(country.Active)
      chartData.deaths.push(country.Deaths)
      chartData.recovered.push(country.Recovered)
    });

    return chartData
  }

  return (
    <>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={countryCode}
        onChange={handleChange}
      >
        {countries.map(country => <MenuItem value={country.Slug} key={country.Slug}>{country.Country}</MenuItem>)}
      </Select>
      {countryData ? <Chart data={countryData} /> : null}
    </>
  )
};

export default Detailed;
