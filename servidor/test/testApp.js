/**************************** TEST SERVIDOR    *****************************/

var request = require('supertest'),
should = require('should'),
app = require('../servidor.js');

describe("APP ON", function(){
    it('Debería devolver 200.', function(done){
        request(app)
            .get('/')
            .expect('Content-Type',/json/)
            .expect(200, done)
    });
});
