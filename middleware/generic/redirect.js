/**
 * This middleware has one purpose, when the user visits the / main page,
 * should be redirected to
 *    - /login when not signed in
 *    - /where when signed in
 */
module.exports = function (where) {

    return function (req, res, next) {

        if (typeof req.session.userid == 'undefined') {
            return res.redirect('/login');
        } else {
            return res.redirect('/admin/eloetel');
        }
    };
};