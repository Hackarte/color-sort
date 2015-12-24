define(function () {
   
    var Pixel = function (r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    };
    
    Pixel.prototype.value = function () {
      return this.r + this.g + this.b;  
    };
    
    return Pixel;
});