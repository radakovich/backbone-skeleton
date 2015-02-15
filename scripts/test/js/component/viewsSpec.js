describe('whatever', function(){
    beforeEach(function(){
        var views = require('../../../js/component/views'),
            models = require('../../../js/component/models');

        this.view = new views.componentView({
            model: new models.componentModel({
                message: 'Hello!'
            })
        })
        this.view.render();
    });

    it('should do whatever', function(){
        expect(this.view.$el.text()).toBe('Hello!');
    });
});