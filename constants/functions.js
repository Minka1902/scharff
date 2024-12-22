module.exports.removeBaseUrl = (url) => {
    if (typeof url !== 'object') {
        const indexOfEnd = url.indexOf('/', 7);
        if (indexOfEnd === -1) {
            return url;
        } else {
            return url.slice(indexOfEnd, url.length);
        }
    } else {
        const indexOfEnd = url.url.indexOf('/', 7);
        if (indexOfEnd === -1) {
            return url.url;
        } else {
            return url.url.slice(indexOfEnd, url.url.length);
        }
    }
};
