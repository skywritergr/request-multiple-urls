const requestMultipleUrls = require('./index.js');

describe('Given a multiple requests module', () => {
  describe('When there is nothing passed in it', () => {
    it('then it should give a relevant error message', async () => {
      try {
        await requestMultipleUrls();
      } catch (error) {
        expect(error.message).toBe('No requests where passed in the function.');
      }
    });
  });

  describe('When a variable that\'s not an array is passed in', () => {
    it('then it should give an error message when passing a string', async () => {
      try {
        await requestMultipleUrls('Hello World');
      } catch (error) {
        expect(error.message).toBe('The passed variable has to be an array.')
      }
    });

    it('then it should give an error message when passing an object', async () => {
      try {
        await requestMultipleUrls({url: 'Hello World'});
      } catch (error) {
        expect(error.message).toBe('The passed variable has to be an array.')
      }
    });

    it('then it should give an error message when passing a number', async () => {
      try {
        await requestMultipleUrls(42);
      } catch (error) {
        expect(error.message).toBe('The passed variable has to be an array.')
      }
    });
  });

  describe('When one of the URLs is wrong', () => {
    const URLs = [
      'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
      'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
      'example.com'
    ];

    it('then it should throw an error specifying the URL that failed', async () => {
      try {
        await requestMultipleUrls(URLs);
      } catch (error) {
        expect(error.message).toBe('An error occurred while fetching example.com. Error: TypeError: Only absolute URLs are supported');
      }
    });
  });

  describe('When all the URLs are correct', () => {
    const URLs = [
      'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
      'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
      'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
    ];

    it('then it should return all expected results', async () => {
      const data = await requestMultipleUrls(URLs);
      expect(data).toHaveLength(URLs.length);
    });
  })
});