var renderMW = require('../middleware/generic/render');
var getmenuMW = require('../middleware/data/getData');
var saveMW = require('../middleware/data/addData');
var redirectMW = require('../middleware/generic/redirect');
var authMW = require('../middleware/generic/auth');
var updateMW = require('../middleware/data/updateData');
var deleteMW = require('../middleware/data/deleteData');
var changepwMW = require('../middleware/data/changePW');

module.exports = function(app) {

    app.use('/admin/changepw',
        authMW(),
        changepwMW(),
        redirectMW('')
    );

    app.use('/admin/save',
        authMW(),
        saveMW(),
        redirectMW('')
    );

    app.use('/admin/update/:id',
        authMW(),
        updateMW(),
        redirectMW('')
    );

    app.use('/admin/delete/:id',
        authMW(),
        deleteMW(),
        redirectMW('')
    );

    app.use('/admin/:type',
        authMW(),
        getmenuMW(),
        renderMW('admin', 'Admin')
    );

};