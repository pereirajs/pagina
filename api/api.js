import fetch from 'isomorphic-fetch';


const api = {
    PTTpost: {
        async posts(){
            const queryParams = '?limit=9&filter=author%3Apereirajs&client_id=ghost-frontend&client_secret=7709d8d5ac20'
            const response = await fetch(`https://pereiratechtalks.com/ghost/api/v0.1/posts/${queryParams}`);
            const data = await response.json();
            return data;
        }

    }

}

export default api;