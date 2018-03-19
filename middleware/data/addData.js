var mysql = require('mysql');
var connection = require('../../config/config');

function dbconnect(callback, data) {

    connection.query('INSERT INTO food (kaja,leiras,ar,type) VALUES(' +
        mysql.escape(data.etel) + ',' +
        mysql.escape(data.leiras) + ',' +
        mysql.escape(data.ar) + ',' +
        mysql.escape(data.type) + ')',
        function(err,rows){

            return callback(err, rows);
        });
}

module.exports = function () {

    return function (req, res, next) {
        var p = req.body;

        if(p.etel == ''){
            res.tpl.msg = "Nem adtad meg az étel nevét.";
            return next();
        }

        if(p.ar == ''){
            res.tpl.msg = "Nem adtál meg árat.";
            return next();
        }

        dbconnect(function(err, results){

            if (err) {
                res.tpl.msg = err;
            }
            else {
                res.tpl.msg = "ok";
            }
            return next();
        },p);
    };
};
