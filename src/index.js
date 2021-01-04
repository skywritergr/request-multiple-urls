module.exports = async function requestMultipleUrs(requests) {
  // Check is we passed something in the function. If not give a meaningful error.
  if(!requests) {
    throw new Error('No requests where passed in the function.');
  }

  // Check if what we passed in is indeed an array.
  if(!Array.isArray(requests)) {
    throw new Error('The passed variable has to be an array.');
  }

  const fetch = require('node-fetch');

  const result = await Promise.all(
    requests.map(async (url) => {
      try {
        const data = await fetch(url);
        const JSONData = await data.json();

        return JSONData;
      } catch (error) {
        throw new Error(`An error occurred while fetching ${url}. Error: ${error}`)
      }
    })
  );

  return result;
}