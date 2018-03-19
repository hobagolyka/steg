var connection = require('../../config/config');
var mysql = require('mysql');

function dbconnect(req, callback, type) {

    connection.query('SELECT * FROM food WHERE type = ' + mysql.escape(type), function(err,row){
        if (err) {
            throw err;
        }
        return callback(err, row);
    });
}

module.exports = function () {

    return function (req, res, next) {

        var type = req.param('type');
        var category = '';

        switch(type){
            case 'eloetel':
                category = 'Előételek';
                break;
            case 'leves':
                category = 'Levesek';
                break;
            case 'salata':
                category = 'Saláták';
                break;
            case 'roston':
                category = 'Rostonsült grillételek';
                break;
            case 'frissen':
                category = 'Frissensültek';
                break;
            case 'olaszos':
                category = 'Olaszos tésztafélék';
                break;
            case 'hazajanlat':
                category = 'Ház ajánlata';
                break;
            case 'pizza':
                category = 'Pizzák';
                break;
            case 'desszert':
                category = 'Desszertek';
                break;
            default:
                category = '';
        }

        dbconnect(req, function(err, result){
            if (err) throw err;
            else {
                res.tpl.menu = result;
                res.tpl.type = category;
            }
            return next();
        }, type);
    };
};
