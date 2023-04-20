module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/*.{js,jsx}',
    '!src/app/**/*',
    '!src/assets/**/*',
    '!src/routes/**/*',
  ],
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
}
