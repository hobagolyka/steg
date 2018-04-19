var renderMW = require('../middleware/generic/render');
var redirectMW = require('../middleware/generic/redirect');
var loginMW = require('../middleware/generic/login');
var inverseMW = require('../middleware/generic/inverseAuth');
var logoutMW = require('../middleware/generic/logout');
var loadDataMW = require('../middleware/data/load');

module.exports = function(app) {
    app.get('/',
        redirectMW('')
    );

    app.use('/login',
        inverseMW(),
        loginMW(),
        loadDataMW(),
        renderMW('index', 'title')
    );

    app.get('/logout',
        logoutMW(),
        function(req, res, next){
            res.redirect('/');
        }
    );
};