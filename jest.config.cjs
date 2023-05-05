module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
  collectCoverageFrom: [
    'src/**/*',
    '!src/**/*.{css, scss, sass}',
    '!src/*',
    '!src/app/**/*',
    '!src/assets/**/*',
    '!src/routes/**/*'
  ]
}