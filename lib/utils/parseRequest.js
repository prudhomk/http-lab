module.exports = rawRequest => {
  const [method, path] = rawRequest.split('\n')[0].split(' ');
  const body = rawRequest.split('\n')[4];
  return { method, path, body };
};
