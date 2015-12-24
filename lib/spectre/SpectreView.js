define(["jquery"], function ($) {
    
    
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
        
        for(var i = 0; i < this.height; i++) {
            
            this.matrix[i] = [];
            
            var that = this;
            
            for(var j = 0; j < this.width; j++){
              
                this.matrix[i][j] = $('<div>', {
                   
                    style: "width:1px;height:2px;float:left",
                    valeu: i + ":" + j
                    
                });
                
                this.main.append(this.matrix[i][j]);
            }
        }
        
    };
    
    SpectreView.prototype.setMatrix = function (matrix) {
        
        
        
    };
    
    return SpectreView;
    
});