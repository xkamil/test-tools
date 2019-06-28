const ApiClient = {

    getRandomUUID: () => GET('/api/random/uuid'),

};

function GET(url) {
    return fetch(url).then(res => res.json())
}

export default ApiClient;