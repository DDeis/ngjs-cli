module.exports = function() {
  return {
    "plugins": [require("@babel/plugin-proposal-class-properties")],
    "env": {
      "development": {
        "presets": [require("@babel/preset-env").default],
        "plugins": [require("babel-plugin-angularjs-annotate")]
      },
      "production": {
        "presets": [
          [
            require("@babel/preset-env").default,
            {
              "modules": false,
              "forceAllTransforms": true,
              "targets": {
                "browsers": [
                  "> 0.5%",
                  "last 2 versions",
                  "not ie <= 8",
                  "Firefox ESR",
                  "not dead"
                ]
              }
            }
          ]
        ],
        "plugins": [require("babel-plugin-angularjs-annotate")]
      },
      "test": {
        "presets": [require("@babel/preset-env").default]
      }
    }
  };
}