var connection = require('../../config/config');
var mysql = require('mysql');

function dbconnect(req, callback) {

    connection.query('SELECT * FROM food', function(err,row){
        if (err) {
            throw err;
        }
        return callback(err, row);
    });
}

module.exports = function () {
    return function (req, res, next) {
        dbconnect(req, function(err, result){
            if (err) throw err;
            else {
                res.tpl.menu = result;
            }
            return next();
        });
    };
};
