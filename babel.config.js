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
            "@ASSETS": "./assets",
            "@APP": "./src",
          },
        },
      ],
      "transform-inline-environment-variables",
    ],
  };
};
