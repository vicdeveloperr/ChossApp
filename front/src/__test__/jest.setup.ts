jest.mock("../utils/getVideoAnalysis", () => jest.fn());
jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({ navigate: jest.fn(), addListener: jest.fn() }),
}));
