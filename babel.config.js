module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@": "./",
            assets: "./assets"
          }
        }
      ],
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin"
    ]
  };
};
