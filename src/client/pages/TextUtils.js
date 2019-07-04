const TextUtils = {
    toUpperCase: (string) => string.toUpperCase(),
    toLowerCase: (string) => string.toLowerCase(),
    getNumberOfCharacters: (string) => string.length,
    getNumberOfWords: (string) => string.split(/\s/).filter(w => w.trim().length > 0).length,
    getNumberOfLines: (string) => string.split(/\n/).length,
    formatJSON: (string) => {
        try {
            return JSON.stringify(JSON.parse(string), null, 4)
        } catch (e) {
            return string;
        }
    }
};

export default TextUtils;