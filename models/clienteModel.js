const conn = require('../database/connection');

const Cliente = {
  findAll: () => conn('cliente'),
  findById: (id) => conn('cliente').where('id', id).first(),
  create: (data) => conn('cliente').insert(data),
  update: (id, data) => conn('cliente').where('id', id).update(data),
  remove: (id) => conn('cliente').where('id', id).delete(),
};

module.exports = Cliente;
