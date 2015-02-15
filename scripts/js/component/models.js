var Backbone = require('backbone');

module.exports = {
    componentModel: Backbone.Model.extend({
        defaults: {
            message: null
        }
    })
}