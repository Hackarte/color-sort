define(["lib/spectre/SpectreView", "lib/spectre/SpectreModel", "lib/utils/Sort"], function (SpectreView, SpectreModel, Sort) {
    
    
    var SpectreController = function (width, height, imgPath) {
        this.view = new SpectreView(width, height, imgPath);
        this.model = new SpectreModel(width, height);
    };
    
    SpectreController.prototype.organize = function () {
        
        this.model.matrix = this.view.matrix;

        //this.model.organize(Sort.bubble);
        
        //this.view.setMatrix(this.model.matrix);
        
        this.organizeStep(0, 0, Sort.bubbleStep);
        
    };
    
    SpectreController.prototype.organizeStep = function (i, j, algorithm) {
        
        var results = this.model.organizeStep(i, j, algorithm);
        //this.view.setMatrix(this.model.matrix);
        var that = this;
        
        results.forEach(function (result, index) {
            if(result.changed) {
                that.view.swapPixels(index, that.model.matrix[index][i], that.model.matrix[index][j], i, j);
                
            }
        });
        
        var next = results[0].next;
        
        if(next) {
            setTimeout(function () {that.organizeStep(next.i, next.j, algorithm)}, 0);
        }
        
        
    };
    
    SpectreController.prototype.randomize = function () {
        this.model.randomize();
        
        this.view.setMatrix(this.model.matrix);
    };
    
    return SpectreController;
    
});
