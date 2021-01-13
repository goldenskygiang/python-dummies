import BASE_URL from './global.js';
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: BASE_URL,
      changeOrigin: true,
    })
  );
};
