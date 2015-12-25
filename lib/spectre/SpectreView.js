define(["jquery", "jcanvas"], function ($, jcanvas) {
    
    
    var SpectreView = function (width, height) {
        this.main = $("#spectre");
        this.matrix = [];
        this.width = width;
        this.height = height;
        this.createMatrix();
    };
    
    SpectreView.prototype.createMatrix = function () {
        
        this.main.css("width", this.width);
        this.main.css("height", this.height);
        
    };
    
    SpectreView.prototype.setMatrix = function (matrix) {
        
        for(var i = 0; i < this.height; i++) {
            
            for(var j = 0; j < this.width; j++) {
                
                var color = "rgb(" + matrix[i][j].r + "," + matrix[i][j].g + "," + matrix[i][j].b + ")"; 
                
                this.main.drawRect({
                    fillStyle: color,
                    x: j, y: i,
                    width: 1,
                    height: 1
                });
                
            }
            
        }
        
    };
    
    return SpectreView;
    
});