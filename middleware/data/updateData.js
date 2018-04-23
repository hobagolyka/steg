var mysql = require('mysql');
var connection = require('../../config/config');

function dbconnect(callback, data, id) {

    connection.query('UPDATE food SET kaja = '
        + mysql.escape(data.etel) + ', kaja_EN = '
        + mysql.escape(data.etel_EN) + ', kaja_D = '
        + mysql.escape(data.etel_D) + ', leiras = '
        + mysql.escape(data.leiras) + ', leiras_EN = '
        + mysql.escape(data.leiras_EN) + ', leiras_D = '
        + mysql.escape(data.leiras_D) + ', ar = '
        + mysql.escape(data.ar) + ', type = '
        + mysql.escape(data.type) + ' WHERE id = '
        + id,
        function(err,row){
            if (err) {
                throw err;
            }
            return callback(err, row);
        });
}

module.exports = function () {

    return function (req, res, next) {
        var p = req.body;
        var id = req.param('id');

        dbconnect(function(err, results){
            if (err) {
                res.tpl.msg = err;
            }
            else {
                res.tpl.msg = "ok";
            }
            return next();
        },p, id);
    };
};
