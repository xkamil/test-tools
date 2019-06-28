const ApiClient = {

    getRandomUUID: () => GET('/api/random/uuid'),
    encode: (encoding, data) => POST(`/api/encodedecode/encode/${encoding}`, {input: data}),
    decode: (encoding, data) => POST(`/api/encodedecode/decode/${encoding}`, {input: data}),

};

function GET(url) {
    return fetch(url).then(res => res.json())
}

function POST(url, data) {
    const conf = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    return fetch(url, conf).then(res => res.json())
}

export default ApiClient;