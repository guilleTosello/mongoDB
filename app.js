const express = require('express');
const mongoose = require('mongoose')
const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/biblioteca', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

//Importando el Router libros
const librosRouter = require('./routes/libros');

//Importando el Router de errores
const errorHandler = require('./middlewares/errorHandler');

app.use('/libros', librosRouter);

app.use(errorHandler);

app.listen(3000, ()=> {
    console.log('servidor escuchando en el puerto 3000')
})
