var renderMW = require('../middleware/generic/render');
var redirectMW = require('../middleware/generic/redirect');
var loginMW = require('../middleware/generic/login');
var inverseMW = require('../middleware/generic/inverseAuth');
var logoutMW = require('../middleware/generic/logout');
var loadDataMW = require('../middleware/data/load');
var loadPizzaMW = require('../middleware/data/getPizza');

module.exports = function(app) {
    app.get('/',
        redirectMW('')
    );

    app.use('/login',
        inverseMW(),
        loginMW(),
        loadPizzaMW(),
        loadDataMW(),
        renderMW('index', 'title')
    );

    app.use('/english',
        inverseMW(),
        loginMW(),
        loadPizzaMW(),
        loadDataMW(),
        renderMW('index_en', 'title')
    );

    app.use('/german',
        inverseMW(),
        loginMW(),
        loadPizzaMW(),
        loadDataMW(),
        renderMW('index_d', 'title')
    );

    app.use('/show_menu',
        renderMW('etlap', 'title')
    );

    app.get('/logout',
        logoutMW(),
        function(req, res, next){
            res.redirect('/');
        }
    );
};