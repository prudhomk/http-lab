module.exports = rawRequest => {
    const [method, path] = rawRequest.split('\n')[0].split(' ');
    console.log(method, path);
    return {method, path};
};
