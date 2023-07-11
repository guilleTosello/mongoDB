const express = require('express');
const app = express();
app.use(express.json());

//Importando el Router libros
const librosRouter = require('./routes/libros');

//Importando el Router de errores
const errorHandler = require('./middlewares/errorHandler');

app.use('/libros', librosRouter);

app.use(errorHandler);

app.listen(3000, ()=> {
    console.log('servidor escuchando en el puerto 3000')
})