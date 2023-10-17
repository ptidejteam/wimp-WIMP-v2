const { createProxyMiddleware } = require('http-proxy-middleware');
const { createServer } = require('http');
const grpcWebProxy = require('@grpc-web/proxy');

exports.setupProxies = (app, routes) => {
    routes.forEach((route) => {
        if (route.isgRPC) {
            // Create a server for gRPC proxy
            const grpcProxyServer = createServer((req, res) => {
                // Handle gRPC proxy requests using grpc-web-proxy
                grpcWebProxy.proxy(route.proxy.target, req, res);
            });

            // Listen on the specified port
            grpcProxyServer.listen(route.proxy.port, () => {
                console.log(`gRPC proxy server listening on port ${route.proxy.port}`);
            });

            // Attach the gRPC proxy server to the route URL
            app.use(route.url, (req, res) => {
                // This part will not be executed for gRPC routes, as the gRPC server handles them.
            });
        } else {
            // For non-gRPC routes, use createProxyMiddleware
            app.use(route.url, createProxyMiddleware(route.proxy));
        }
    });
};
