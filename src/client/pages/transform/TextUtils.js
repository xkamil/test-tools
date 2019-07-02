const TextUtils = {
    toUpperCase: (string) => string.toUpperCase(),
    toLowerCase: (string) => string.toLowerCase(),
    getNumberOfCharacters : (string) => string.length,
    getNumberOfWords : (string) => string.split(/\s/).filter(w => w.trim().length > 0).length,
    getNumberOfLines : (string) => string.split(/\n/).length
};

export default TextUtils;