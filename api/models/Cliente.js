/**
 * Cliente.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  // Nombre de la tabla
  tableName: 'cliente',

  // Atributos de la tabla
  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: 'string',
      required: true,
      size: 100
    },
    apellido: {
      type: 'string',
      required: true,
      size: 100
    },
    usuario: {
      type: 'string',
      unique: true,
      required: true,
      size: 100
    },
    contrasena: {
      type: 'string',
      required: true,
      size: 50
    }
  },
};

