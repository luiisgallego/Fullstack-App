const fs = require('fs');
//const path = require('path');

module.exports = (app) => {
    // Recorremos /rutas/api para recopilar todas las rutas
    fs.readdirSync('rutas/api').forEach((file) => {
        require(`./api/${file.substr(0, file.indexOf('.'))}`)(app);
    });
}
