var mysql = require('mysql');
var connection = require('../../config/config');

function dbconnect(callback, delme) {

    connection.query('DELETE FROM food WHERE id = ' + mysql.escape(delme),
        function(err,rows){
            if (err) {
                throw err;
            }
            return callback(err, rows);
        });
}

module.exports = function () {

    return function (req, res, next) {

        var delme = req.param('id');

        dbconnect(function(err, results){

            if (err) throw err;
            else {
            }
            return next();
        }, delme);
    };
};