const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
mongoose
    .connect('mongodb://angelho:2740522ab@192.168.0.199:27017/mevn')
    .then(db => console.log('base conectada'))
    .catch(err => console.log(err));
//configuraciones
app.set('port', 80);
var puerto = app.get('port');
//middlewares (esto es como un log antes de entrar
//a un controlador)
app.use(morgan('dev')); //solo controla el tiempo
app.use(express.json()); // puedo leer json
//routes : imagino que son como los controladores
app.use('/api/tasks', require('./routes/tasks'));
app.use('/prueba', require('./routes/prueba'));
//archivos estaticos;
app.use(express.static(__dirname + '/public'));
app.listen(puerto, () => {  
});