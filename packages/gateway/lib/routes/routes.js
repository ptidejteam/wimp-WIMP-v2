const API_PREFIX = "api/v1";
const USER_URL = process.env.USER_URL || "http://0.0.0.0:3001"; // Replace with your actual environment variable name
const AUTH_URL = process.env.AUTH_URL || "http://0.0.0.0:3001/auth";

exports.routes = [
  {
    url: `/${API_PREFIX}/auth`,
    proxy: {
      target: `${AUTH_URL}`,
      changeOrigin: true,
      pathRewrite: {
        [`^/${API_PREFIX}/auth`]: "",
      },
    },
  },
  {
    url: `/${API_PREFIX}/refresh`,
    authenticationRequired: true,
    applyBodyParser: true,
    rateLimit: {
      windowsMs: 15 * 60 * 1000,
      max: 5,
    },
    proxy: {
      target: `${USER_URL}/refresh`,
      changeOrigin: true,
      timeout: 3000,
      pathRewrite: {
        [`^/${API_PREFIX}/refresh`]: "",
      },
    },
  },
  {
    url: `/${API_PREFIX}/admin`,
    proxy: {
      target: `${USER_URL}/admin`,
      changeOrigin: true,
      pathRewrite: {
        [`^/${API_PREFIX}/admin`]: "",
      },
    },
  },
  {
    url: `/${API_PREFIX}/users`,
    authenticationRequired: true,
    proxy: {
      target: `${USER_URL}/users`,
      changeOrigin: true,
      pathRewrite: {
        [`^/${API_PREFIX}/users`]: "",
      },
    },
  },
  // Add more routes as needed
];
