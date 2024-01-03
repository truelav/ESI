export default {
  // clearMocks: true,
  // coverageProvider: 'v8',
  // verbose: true,
  // testEnvironmentOptions: {
  //   url: 'http://localhost:8889',
  // },
  testEnvironment: 'node',
  testEnvironmentOptions: {
    NODE_ENV: 'test',
    url: 'http://localhost:8889',
  },
  restoreMocks: true,
  coveragePathIgnorePatterns: ['node_modules', 'src/config', 'src/app.js', 'tests'],
  coverageReporters: ['text', 'lcov', 'clover', 'html'],
};