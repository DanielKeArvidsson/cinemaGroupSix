// const proxy = require('http-proxy-middleware');
 
// module.exports = function(app) {
//   let filter = function(pathname, req) {
//     return pathname.startsWith('/json')
//   }
//   app.use(proxy('/socket.io/', { target: 'http://localhost:3001/' }));
//   app.use(proxy(filter, { target: 'http://localhost:3001/' }));
//   // app.use(proxy('/user/', { target: 'HTTP://localhost:3001/' }));
// };

const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(proxy('/json/', { target: 'HTTP://localhost:3001/' }));
  app.use(proxy('/user/', { target: 'HTTP://localhost:3001/' }));
  app.use(proxy('/socket.io/', { target: 'http://localhost:3001/' }));
}