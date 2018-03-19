
module.exports = function (viewName, cim) {

    return function (req, res, next) {
        res.tpl.title = cim;
        res.render(viewName, res.tpl);
    };

};