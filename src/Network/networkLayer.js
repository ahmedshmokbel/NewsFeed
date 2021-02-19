import axios from "axios";

const API_HOST = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=28b7d42f392b4fc9ae7d979e515f8164&' 


get_request = (endpoint) => {
  const url = API_HOST + endpoint;
  return new Promise(function (resolve, reject) {
    try {
      
      axios
        .get(url, {
         
          timeout:30000,
         
        })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {reject(err)});
    } catch (err) {
      reject(err);
    }
  });
};