import axios from 'axios';

const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
}

// function fetchNewsList() {
//   // return axios.get(config.baseUrl + 'news/1.json');
//   // ES6 템플릿 문법
//   return axios.get(`${config.baseUrl}news/1.json`);
// }

// function fetchAskList() {
//   return axios.get(`${config.baseUrl}ask/1.json`);
// }

// function fetchJobsList() {
//   return axios.get(`${config.baseUrl}jobs/1.json`);
// }

async function fetchList(pageName) {
  return await axios.get(`${config.baseUrl}${pageName}/1.json`);
}

function fetchUserInfo(username) {
  return axios.get(`${config.baseUrl}user/${username}.json`)
}

function fetchCommentItem(id) {
  return axios.get(`${config.baseUrl}item/${id}.json`)
}



export {
  /* fetchNewsList,
  fetchAskList,
  fetchJobsList, */
  fetchUserInfo,
  fetchCommentItem,
  fetchList,
}
