define(["jquery", "lib/inputs/InputsView"], function ($, InputsView) {
    
    var InputsController = function (spectreController) {
        this.view = new InputsView();
        this.spectreController = spectreController;
        this.setEvents();    
    };
    
    InputsController.prototype.setEvents = function () {
        
        this.view.go.click(this.goClicked.bind(this));
        this.view.randomize.click(this.randomizeClicked.bind(this));
        
    };
    
    InputsController.prototype.goClicked = function () {
        this.spectreController.organize("bubble");
    };
    
    InputsController.prototype.randomizeClicked = function () {
        this.spectreController.randomize();
    };
    
    return InputsController;
    
});