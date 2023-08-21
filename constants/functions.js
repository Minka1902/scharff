module.exports.removeBaseUrl = (url) => {
    if (url) {
        const indexOfEnd = url.indexOf('/', 7);
        if (indexOfEnd === -1) {
            return url;
        } else {
            return url.slice(indexOfEnd, url.length);
        }
    }
};
