module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@api(.*)$': '<rootDir>/src/api$1',
    '^@assets(.*)$': '<rootDir>/src/assets$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@interfaces(.*)$': '<rootDir>/src/interfaces$1',
    '^@layouts(.*)$': '<rootDir>/src/layouts$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@routes(.*)$': '<rootDir>/src/routes$1',
    '^@store(.*)$': '<rootDir>/src/store$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
    // For svg images transformer
    '^.+\\.svg$': 'jest-svg-transformer',
  },
  setupFilesAfterEnv: ['./jest.setup.ts'],
};
