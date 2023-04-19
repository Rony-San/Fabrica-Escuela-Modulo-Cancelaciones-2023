module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/tests/**',
    '!**/coverage/**',
    '!**/dist/**',
    '!**/*.config.{js,jsx,cjs}',
    '!**/*.setup.{js,jsx,cjs}',
    '!src/*.{js,jsx}',
    '!src/app/**',
    '!src/assets/**',
    '!src/routes/**',
  ],
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
}
