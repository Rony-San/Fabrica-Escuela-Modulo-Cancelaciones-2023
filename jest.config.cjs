module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
  collectCoverageFrom: [
    'src/**/*',
    '!src/*',
    '!src/app/**/*',
    '!src/assets/**/*',
    '!src/routes/**/*'
  ]
}