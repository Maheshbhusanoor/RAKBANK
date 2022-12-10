module.exports = {
  preset: "react-native",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/mocks/fileMock.js",
    "\\.(css|less)$": "<rootDir>/mocks/fileMock.js",
    axios: "axios/dist/node/axios.cjs",
  },
  setupFiles: ["<rootDir>/jestConfigs/setup/jestSetup.js"],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|redux-persist.*|react-native-vector-icons|@react-native-community|@makard|@react-navigation|frames-react-native|@sentry/.*|@react-native)",
  ],
  collectCoverage: true,
  coverageReporters: ["cobertura", "lcov", "html"],
  coverageThreshold: {
    global: {
      branches: 13.2,
      functions: 14.4,
      lines: 26.2,
    },
  },
  reporters: ["default"],
  collectCoverageFrom: ["src/**/*.ts", "src/**/*.tsx"],
  setupFilesAfterEnv: ["<rootDir>/jestConfigs/preloads/jest-preload.js"],
};
