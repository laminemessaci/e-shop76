module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [".tsx", ".ts", ".js", ".json", "mjs", "jsx"],
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
