define(["lib/spectre/SpectreView", "lib/spectre/SpectreModel", "lib/utils/Sort"], function (SpectreView, SpectreModel, Sort) {
    
    
    var SpectreController = function (width, height) {
        this.view = new SpectreView(width, height);
        this.model = new SpectreModel(width, height);
    };
    
    SpectreController.prototype.organize = function () {
        
        this.model.organize(Sort.bubble);
        console.log(this.model.matrix);
        
    };
    
    SpectreController.prototype.randomize = function () {
        this.model.randomize();
        
        this.view.setMatrix(this.model.matrix);
    };
    
    return SpectreController;
    
});