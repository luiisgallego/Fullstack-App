/****************************   SERVIDOR - RUTAS    *****************************/

const fs = require('fs');

module.exports = (app) => {
    // Recorremos /rutas/api para recopilar todas las rutas
    fs.readdirSync('rutas/api').forEach((file) => {
        require(`./api/${file.substr(0, file.indexOf('.'))}`)(app);
    });
}
