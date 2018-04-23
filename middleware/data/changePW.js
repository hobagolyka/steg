var mysql = require('mysql');
var connection = require('../../config/config');
var md5 = require('md5');

function dbconnect(callback, crypt, id) {

    connection.query('UPDATE users SET pw = ' + mysql.escape(crypt) + ' WHERE id = ' + mysql.escape(id),
        function(err,row){
            if (err) {
                throw err;
            }
            return callback(err, row);
        });
}

module.exports = function () {

    return function (req, res, next) {
        var password = req.body.pw;
        var crypt = md5(password);

        dbconnect(function(err, results){
            if (err) {
                res.tpl.msg = err;
            }
            else {
                res.tpl.msg = "ok";
            }
            return next();
        }, crypt, req.session.userid/123973);
    };
};
