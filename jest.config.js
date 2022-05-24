module.exports = {
  testMatch: [
    '**/components/**/*.test.{js,jsx}',
  ],
  collectCoverage: false,
  collectCoverageFrom: [
    '**/components/**/*.{js,jsx}',
  ],
  coverageDirectory: 'Report',
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  coverageReporters: ['json', 'lcov', 'clover', 'text', 'text-summary', 'cobertura'],
  transformIgnorePatterns: [
    'node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)',
  ],
  testEnvironment: 'jsdom',
};
