const BASE_64 = build('base64', true, true);
const SHA_256 = build('sha256', true, false);

export default {BASE_64, SHA_256}

function build(name, encodingSupported, decodingSupported) {
    return {
        name: name,
        encode: encodingSupported,
        decode: decodingSupported
    };
}