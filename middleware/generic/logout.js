module.exports = function () {

    return function (req, res, next) {
        req.session.userid = undefined;
        req.session.status = undefined;
        return next();
    };

};
