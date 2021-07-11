const ts = require('ts-jest/jest-preset')
mongo = require('@shelf/jest-mongodb/jest-preset')
const merge = require('merge')

module.exports = merge.recursive(ts, mongo, {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.(js|jsx)?$': 'ts-jest'
  },
  testMatch: [
    '**/(src/**/*.test.ts)',
    '<rootDir>/(src/**/*.test.ts)',
    '**/(src/**/*.spec.ts)',
    '<rootDir>/(src/**/*.spec.ts)'
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
});
