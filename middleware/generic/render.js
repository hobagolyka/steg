var googleApiKey = require('../../config/googleApi');

module.exports = function (viewName, cim) {

    return function (req, res, next) {
        res.tpl.title = cim;
        res.tpl.googleApi = "https://maps.googleapis.com/maps/api/js?key=" + googleApiKey + "&callback=initMap";
        res.render(viewName, res.tpl);
    };

};