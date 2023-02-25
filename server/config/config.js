const config = {
  production: {
    SECRET: process.env.SECRET,
    DATABASE: process.env.MONGODB_URI,
    PORT: process.env.PORT,
    FRONT_END_HOST: process.env.PORT,
  },
  default: {
    SECRET: "mysecretkey",
    DATABASE: "mongodb://localhost:27017/shopping_cart",
    PORT: 3000,
    FRONT_END_HOST: "http://localhost:4200",
  },
};

exports.get = function get(env) {
  return config[env] || config.default;
};
