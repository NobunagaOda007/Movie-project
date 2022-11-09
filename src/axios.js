import axios from "axios";
if(process.env.NODE_ENV !== 'production'){}else{
    axios.defaults.baseURL = 'http://localhost:5000/';
}
axios.defaults.withCredentials= true;