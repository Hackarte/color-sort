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
        
        this.main.clearCanvas();
                
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
    
    SpectreView.prototype.swapPixels = function (line, pixel, pixel2, pos, pos2) {
        var color = "rgb(" + pixel2.r + "," + pixel2.g + "," + pixel2.b + ")"; 

        this.main.drawRect({
            fillStyle: color,
            x: pos, y: line,
            width: 1,
            height: 1
        });
        
        color = "rgb(" + pixel.r + "," + pixel.g + "," + pixel.b + ")"; 
        
        this.main.drawRect({
            fillStyle: color,
            x: pos2, y: line,
            width: 1,
            height: 1
        });
        
        
    };
    
    return SpectreView;
    
});