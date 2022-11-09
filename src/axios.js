import axios from "axios";
if(process.env.NODE_ENV !== 'production'){'https://backend-for-movies.adaptable.app/'}else{
    axios.defaults.baseURL = 'http://localhost:5000/';
}
axios.defaults.withCredentials= true;