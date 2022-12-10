global.fetch = jest.fn().mockImplementation(() => ({
  json: jest.fn(),
}));
jest.mock("axios");
jest.mock("react-native-device-info", () => ({
  getVersion: jest.fn(),
  getBuildNumber: jest.fn(),
}));
jest.mock("redux-persist", () => ({
  persistReducer: jest.fn(),
  persistStore: jest.fn(),
}));
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

jest.mock("miragejs", () => ({
  createServer: jest.fn(),
}));
jest.mock("react-native-permissions", () =>
  require("react-native-permissions/mock")
);
jest.mock("react-native-geolocation-service", () => ({
  getCurrentPosition: jest.fn(),
}));

jest.mock("@react-navigation/elements", () => ({
  getDefaultHeaderHeight: jest.fn().mockReturnValue(100),
}));

jest.mock("react-native-gesture-handler", () => {
  return {
    ...mockCreateComponentsCollection("Swipeable"),
  };
});

jest.mock("@react-native-async-storage/async-storage", () => {});
jest.mock("react-redux-help-kit", () => ({
  useRequestError: () => ({
    error: {},
    clearError: () => null,
  }),
  useRequestLoading: () => ({
    loading: true,
    clearLoadingStatus: () => null,
  }),
  byIdReducer: () => (a) => a,
  useCurrentDataSelector: (a) => a,
  useCurrentDataActions: (a) => a,
  useOnRequestSuccess: (a) => a,
  useRequestLoading: (a) => a,
}));
