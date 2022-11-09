import axios from "axios";
if(process.env.NODE_ENV !== 'production'){}else{
 //   axios.defaults.baseURL = 'http://localhost:5000/';
};
axios.defaults.baseURL ='https://backend-for-movies.adaptable.app/';
axios.defaults.withCredentials= true;