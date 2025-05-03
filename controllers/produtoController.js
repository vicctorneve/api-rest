const Produto = require('../models/produtoModel');
const errors = require('restify-errors');

const getAll = (req, res, next) => {
  Produto.findAll()
    .then((dados) => res.send(dados))  
    .catch(next);                      
};

const getById = (req, res, next) => {
  const id = req.params.idProd
  Produto.findById(id)
    .then((dados) => {
      if (!dados) return next(new errors.NotFoundError('Produto não encontrado'))
      res.send( dados )
    })
  .catch(next)
}

const create = (req, res, next) => {
  Produto.create(req.body)
    .then((dados) => {
      if (!dados) return next(new errors.NotFoundError('Não foi possível inserir'))
      res.send(201, {sucess: true} )
    })
    .catch(next)
}

const update = (req, res, next) => {
  const id = req.params.idProd
  const data = req.body
  Produto.update(id, data)
    .then((dados) => {
      if (!dados) return next(new errors.NotFoundError('Produto não encontrado'))
      res.send(200, {sucess: true})
    })
    .catch(next)
}

const remove = (req, res, next) => {
  const id = req.params.idProd
  Produto.remove(id)
    .then((dados) => {
      if (!dados) return next(new errors.NotFoundError('Produto não encontrado'))
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