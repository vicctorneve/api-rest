const Cliente = require('../models/clienteModel');
const errors = require('restify-errors');

const getAll = (req, res, next) => {
  Cliente.findAll()
    .then((dados) => res.send(dados))  
    .catch(next);                      
};

const getById = (req, res, next) => {
  const id = req.params.idProd
  Cliente.findById(id)
    .then((dados) => {
      if (!dados) return next(new errors.NotFoundError('Cliente não encontrado'))
      res.send( dados )
    })
  .catch(next)
}

const create = (req, res, next) => {
  Cliente.create(req.body)
    .then((dados) => {
      if (!dados) return next(new errors.NotFoundError('Não foi possível inserir'))
      res.send(201, {sucess: true} )
    })
    .catch(next)
}

const update = (req, res, next) => {
  const id = req.params.idProd
  const data = req.body
  Cliente.update(id, data)
    .then((dados) => {
      if (!dados) return next(new errors.NotFoundError('Cliente não encontrado'))
      res.send(200, {sucess: true})
    })
    .catch(next)
}

const remove = (req, res, next) => {
  const id = req.params.idProd
  Cliente.remove(id)
    .then((dados) => {
      if (!dados) return next(new errors.NotFoundError('Cliente não encontrado'))
      res.send(200, { success: true })
    })
    .catch(next)
}


module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,

};