const mongoose = require('mongoose');
const {
    Schema
} = mongoose; //quiero solo una parte


//esto es como una entidad
const task = new Schema({
    titulo: String,
    descripcion: String
});

module.exports = mongoose.model('task', task,'task');