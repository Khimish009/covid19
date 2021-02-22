import axios from 'axios';

const baseURL = 'https://api.covid19api.com';
const api = axios.create({baseURL});

api.getSummaryData = () => {
  return api.get('/summary')
}

api.getAllCounties = () => {
  return api.get('/countries')
}

api.getCountyData = (country) => {
  return api.get(`/total/country/${country}`)
}

export default api;