import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

const proxyUrl = {
  "/users": process.env.USERS_PROXY_URL,
  "/books": process.env.BOOKS_PROXY_URL,
  "/orders": process.env.ORDERS_PROXY_URL,
};

// const proxyUrl = {
//   "/users": "http://localhost:4000",
//   "/books": "http://localhost:4002",
//   "/orders": "http://localhost:4001",
// };

for (const route in proxyUrl) {
  console.log(proxyUrl[route]);
  app.use(
    route,
    createProxyMiddleware({
      target: proxyUrl[route],
      changeOrigin: true,
      pathRewrite: (path, req) => path.replace([`^${route}`], ""), // Remove base route
    })
  );
}

// for (const route in serviceUrl) {
//   app.use(
//     route,
//     createProxyMiddleware({
//       target: serviceUrl[route],
//       changeOrigin: true,
//       pathRewrite: { [`^${route}`]: "" },
//       onError: (err, req, res) => {
//         console.error(`Error occurred while trying to proxy request to: ${serviceUrl[route]}`);
//         console.error(err);
//         res.status(500).send("Proxy error");
//       },
//     })
//   );
// }

app.use((req, res, next) => {
  res
    .status(404)
    .send({
      message: `The route you are looking for ${req.originalUrl} is not found`,
    });
});

app.listen(port, () => {
  console.clear();
  console.log(`API Gateway listening on port: ${port}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong");
});
