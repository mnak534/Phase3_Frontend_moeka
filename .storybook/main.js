module.exports = {
  "stories": [
    "../src/**/*.stories.tsx"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "@storybook/addon-a11y",
    "@storybook/testing-react"
  ],
  features: {
    interactionsDebugger: true
  },
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}