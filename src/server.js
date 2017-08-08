var express    = require('express');
var bodyParser = require('body-parser');
import sequelize from './utils/sequelize';

var app = express();

// parse application/json
app.use(bodyParser.json({ type : '*/*' })); // force json

app.post('/locations', function(request, response){
    console.log('Headers:\n', request.headers);
    console.log('Body:\n', request.body);
    console.log('------------------------------');
    response.sendStatus(200);
});

app.get('/', function(request, response){
    console.log('request received');
    response.send({
        a: 'b'
    });
});

app.listen(3000);
sequelize.test();

console.log('Server started...');