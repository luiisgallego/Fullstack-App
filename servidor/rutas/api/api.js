module.exports = (app) => {
    /*  "/"
    *    GET: Devolver status OK
    */
    app.get('/', (request, response) => {
        respuesta = { "status" : "OK" };
        response.status(200).type('json').send(respuesta);    
    });
}
