import axios from "axios";

const api = axios.create({
    //baseURL: 'http://152.42.216.35:8080/api/', // server BE 
    baseURL: 'http://142.93.49.109:8080/api/', // server BE
  });

export default api;