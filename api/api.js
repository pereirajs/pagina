import fetch from 'isomorphic-fetch';
import data from './data';
import timer from './timer'

const api = {
  urlApi: 'https://pereiratechtalks.com',
  async posts () {
    const queryParams = '?limit=9&filter=author%3Apereirajs&client_id=ghost-frontend&client_secret=7709d8d5ac20';
    const response = await fetch(`https://pereiratechtalks.com/ghost/api/v0.1/posts/${queryParams}`);
    const data = await response.json();
    return data;
  },
  collaborators: data.collaborators,
  timer
};

export default api;
