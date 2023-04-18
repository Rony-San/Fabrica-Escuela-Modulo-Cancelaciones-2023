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
    '!src/**/*.test.{js,jsx}',
    '!**/*.config.{js,jsx,cjs}',
    '!**/*.setup.{js,jsx,cjs}'
  ],
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
}
