export default {
  clearMocks: true,
  coverageProvider: 'v8',
  verbose: true,
  testEnvironmentOptions: {
    // Change the port to an available one
    url: 'http://localhost:8889',
  },
};