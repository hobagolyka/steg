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

        dbconnect(req, function(err, result){
            if (err) throw err;
            else {
                var pizza1 = [];
                var pizza2 = [];
                for(var i = 0; i < result.length; i++){
                    if(i < (result.length/2 + 1))
                        pizza1.push(result[i]);
                    else
                        pizza2.push(result[i]);
                }

                res.tpl.pizza1 = pizza1;
                res.tpl.pizza2 = pizza2;
            }
            return next();
        }, 'pizza');
    };
};
