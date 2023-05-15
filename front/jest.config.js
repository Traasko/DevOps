module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.js", "!**/node_modules/**"],
  coverageDirectory: "./reports/coverage",
  coverageReporters: ["html", "text", "cobertura", "text-summary"],
  reporters: [
    "default",
    [
      "jest-junit",
      { outputDirectory: "./reports/unit", outputName: "jest.xml" },
    ],
  ],
};
