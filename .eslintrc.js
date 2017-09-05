var OFF = 0, WARN = 1, ERROR = 2;

module.exports = exports = {
  "env": {
    "browser": true
  },

  "globals": {
    "angular": true
  },

  "rules": {
    "camelcase": ERROR,
    "curly": ERROR,
    "object-property-newline": ERROR,
    "brace-style": [ERROR, "1tbs"],
    "quotes": [ERROR, "single"],
    "semi": [ERROR, "always"]
  }
}