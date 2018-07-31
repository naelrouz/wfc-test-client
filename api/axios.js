import axios from 'axios';

const HTTP = axios.create({
  baseURL: `http://localhost:3000`,
  headers: {
    'Cache-Control': 'no-cache'
  },
})


export default HTTP;
