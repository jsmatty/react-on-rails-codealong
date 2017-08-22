import axios from 'axios';

export function setAxiosDefaults(){
  axios.defaults.headers['access-token'] = localStorage.getItem("access-token"); 
  axios.defaults.headers.client = localStorage.getItem("client"); 
  axios.defaults.headers.uid = localStorage.getItem("uid"); 
  axios.defaults.headers.expiry = localStorage.getItem("expiry"); 
  axios.interceptors.response.use((res) => {
    if (res.headers['access-token']){
      localStorage.setItem("access-token", res.headers['access-token'])
      axios.defaults.headers['access-token'] = localStorage.getItem("access-token"); 
    }
    return res
  });
}