module.exports = {
  preset: "jest-expo",
  verbose: true,
  clearMocks: true,
  extensionsToTreatAsEsm: [".tsx", ".ts", ".jsx"],
  setupFilesAfterEnv: ["./src/__test__/jest.setup.ts"],
};
