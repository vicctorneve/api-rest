const restify = require('restify');
const produtoRoutes = require('./routes/produtoRoutes');
const clienteRoutes = require('./routes/clienteRoutes');

const server = restify.createServer({
  name: 'Lojinha',
  version: '1.0.0',
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

// Importa e usa as rotas
produtoRoutes(server);
clienteRoutes(server);

// Starta o servidor
server.listen(8001, function () {
  console.log('%s executando em: %s', server.name, server.url);
});
