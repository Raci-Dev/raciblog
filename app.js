/**
 * @license Apache-2.0
 * @copyright 2024 RaciDev
 */

'use strict';


/**
 * módulos de node
 */
const express = require('express');


/**
 * módulos personalizados
 */
const registro = require('./src/rutas/registro_ruta');


/**
 * iniciar express
 */
const app = express();


app.use('/registro', registro);


/**
 * iniciar servidor
 */
app.listen(3000, () => {
  console.log('servidor escuchando en el puerto http://localhost:3000');
})