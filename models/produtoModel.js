const conn = require('../database/connection');

const Produto = {
  findAll: () => conn('produto'),
  findById: (id) => conn('produto').where('id', id).first(),
  create: (data) => conn('produto').insert(data),
  update: (id, data) => conn('produto').where('id', id).update(data),
  remove: (id) => conn('produto').where('id', id).delete(),
};

module.exports = Produto;
