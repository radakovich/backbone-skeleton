var componentViews = require('./component/views'),
    componentModels = require('./component/models'),
    $ = require('jquery');

myComponentModel = new componentModels.componentModel({
    message: 'Hello, from the Backbone Skeleton!'
}),

myComponentView = new componentViews.componentView({
    model: myComponentModel
}),

myComponentView.render();

$('.component').append(myComponentView.$el);
