# Request Multiple URLs

A small library that enables you to fetch multiple URLs containing JSON data.

## Table of Contents

  - [Getting Started](#getting-started)
  - [Error States](#error-states)
    - [No variables passed](#no-variables-passed)
    - [Non array passed](#non-array-passed)
    - [Wrong URL](#wrong-url)
  - [Dependencies](#dependencies)
  - [Running the Tests](#tests)

## Getting Started
Install the package to your project 

using **npm**:
 `npm install --save @skywritergr/request-multiple-urls` 
 
 Or **yarn**:
  `yarn add @skywritergr/request-multiple-urls`

  To use it we can do the following:

  ```javascript
  const requestMultipleUrls = require('@skywritergr/request_multiple_urls')

  const URLs = ['https://example.com/1.json', 'https://example.com/2.json']
  const data = await requestMultipleUrls(URLs);
  ```

  ## Error States

  ### No variables passed

  If the function is run without any parameters like so:

  ```javascript
  const data = await requestMultipleUrls();
  ```

  An error with the following message should be returned: `No requests where passed in the function.`

  ### Non array passed

  If an non array is passed in the function the following error message should be returned: `The passed variable has to be an array.`

  ### Wrong URL

  When one or more of your URLs is wrong you should expect a meaningful error letting you know of the specific URL that failed.

  For example for the following request:

  ```javascript
  const URLs = ['https://example.com/1.json', 'https://example.com/2.json'. 'example.com']
  const data = await requestMultipleUrls(URLs);
  ```

  This error should appear: `An error occurred while fetching example.com. Error: TypeError: Only absolute URLs are supported`

  ## Dependencies

  This project depends on `node-fetch` for doing the fetching of the URLs. It also depends on `Jest`, as a dev dependency, when using it locally in order to run the tests.

  ## Tests

  To run tests you can do

  for **npm**:
  `npm run test`

  for **yarn**:
  `yarn test`