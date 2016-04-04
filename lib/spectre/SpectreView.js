define(["jquery", "jcanvas", "lib/utils/Pixel"], function ($, jcanvas, Pixel) {
    
    
    var SpectreView = function (width, height, imgPath) {
        this.main = $("#spectre");
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById('spectre');
        this.ctx = this.canvas.getContext('2d');
        this.matrix = [];
        this.setCanvas();

        var that = this;
        var img = new Image(this.width, this.height);

        img.onload = function () {

            console.log(img);
            that.ctx.drawImage(img, 0, 0);
            that.getImagePixels(that.ctx.getImageData(0, 0, width, height));
        };

        img.src = 'imgs/mona.jpg';

    };

    
    SpectreView.prototype.setCanvas = function () {
        
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        
    };

    SpectreView.prototype.getImagePixels = function (imgData) {

        var k = 0;

        for(var i = 0; i < this.height; i++) {
            
            this.matrix[i] = [];

            for(var j = 0; j < this.width; j++) {
                
                this.matrix[i][j] = new Pixel(imgData.data[k], imgData.data[k + 1], imgData.data[k + 2]);

                k = k + 4;

            }
            
        }
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