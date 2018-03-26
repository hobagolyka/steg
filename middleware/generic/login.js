
var connection = require('../../config/config');
var mysql = require('mysql');
var md5 = require('md5');

function dbconnect(req, callback, data) {
    var username = data.user;

    connection.query('SELECT * FROM users WHERE user = ' + mysql.escape(data.user), function(err,row){
        if (err) {
            throw err;
        }
        return callback(err, row);
    });
}

module.exports = function () {

    return function (req, res, next) {

        res.tpl.alert = false;

        if ((typeof req.body === 'undefined') || (typeof req.body.user === 'undefined') || (typeof req.body.pw === 'undefined')) {
            res.tpl.alert = false;
            return next();
        }

        dbconnect(req, function(err, result){
            if (err) throw err;
            else {
                if(result.length == 0){
                    res.tpl.alert = true;
                    return next();
                }
                else{
                    var password = req.body.pw;
                    var crypt = md5(password);
                    if(crypt == result[0].pw){
                        req.session.userid = result[0].id * 123973;
                    }
                    if(crypt !== result[0].pw){
                        res.tpl.alert = true;
                        return next();
                    }
                    return res.redirect('/');
                }
            }
            return next();
        }, req.body);
    };
};
