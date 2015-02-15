var Backbone = require('backbone'),
    $ = require('jquery'),
    componentTemplate = require('./component.handlebars');

Backbone.$ = $;

module.exports = {
    componentView: Backbone.View.extend({
        template: componentTemplate,

        render: function(){
            this.$el.html(this.template(this.model.attributes));

            return this;
        }
    })
}