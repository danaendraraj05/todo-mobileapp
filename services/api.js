// services/api.js
import axios from 'axios';
import Constants from 'expo-constants';

const API_BASE_URL =
  Constants.expoConfig?.extra?.API_BASE_URL ||
  Constants.manifest?.extra?.API_BASE_URL ||
  'http://172.19.213.122:8000/api/';

console.log("api is called");
console.log(API_BASE_URL);  

const API = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;
