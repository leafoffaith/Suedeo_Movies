import axios from 'axios'

export default axios.create ({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Accept: "application/json"
  },
  params: {
    api_key: "dbe4608d19182e24de51d5d4e342e8df", 
  }
})


// Movie of the night
// const options = {
//   method: 'GET',
//   url: 'https://streaming-availability.p.rapidapi.com/search/basic',
//   params: {
//     country: 'gb',
//     service: 'netflix',
//     type: 'movie',
//     page: '1',
//     output_language: 'en',
//     language: 'en'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'f04238a87fmshff21ccbd1b61ef0p102f9fjsn38099287edba',
//     'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });