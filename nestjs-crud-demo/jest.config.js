module.exports = {
  testEnvironment: 'jsdom',

  transform: {
    '^.+\\.tsx$': 'babel-jest',
    '^.+\\.ts$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
      },
    ],
    '^.+\\.(js|jsx)$': 'babel-jest',
  },

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
};
