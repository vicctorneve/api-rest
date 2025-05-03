const clienteController = require('../controllers/clienteController');

function clienteRoutes(server) {
   server.get('/cliente', clienteController.getAll);
   server.get('/cliente/:idProd', clienteController.getById);
   server.post('/cliente', clienteController.create);
   server.put('/cliente/:idProd', clienteController.update);
   server.del('/cliente/:idProd', clienteController.remove);
}

module.exports = clienteRoutes;
