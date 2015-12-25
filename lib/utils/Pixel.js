define(function () {
   
    var Pixel = function (r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    };
    
    Pixel.prototype.value = function () {
        var lum = Math.sqrt(this.r*0.241 + this.g*0.691 + this.b*0.068);
        
        var hsv = rgb2hsv(this.r, this.g, this.b);
        
        return hsv.h*8*1000 + lum*8*5 + hsv.v*8;
    
        //return (-100*this.r + 100*this.b) / Math.pow(2, Math.log(this.g));  
    };

    
    Pixel.prototype.compare = function (other) {
    
        return ((this.r > this.g && this.r > this.b && !(other.r > other.g && other.r > other.b)) && 
        ((this.r > other.r) || 
        (this.r == other.r && this.g > other.g) ||
        (this.r == other.r && this.g == other.g && this.b > other.b)))
        
        ||
        
        ((this.g > this.r && this.g > this.b && !(other.g > other.r && other.g > other.b)) &&    
        ((this.g > other.g) ||
        (this.g == other.g && this.r > other.r) ||
        (this.g == other.g && this.r == other.r && this.b > other.b)))
        
        ||
        
        ((this.b > this.r && this.b > this.g) &&
        ((this.b > other.b) ||
        (this.b == other.b && this.r > other.r) ||
        (this. b == other.b && this.r == other.r && this.g > other.g)));
        
    };
    
    
    
    return Pixel;
});

function rgb2hsv () {
    var rr, gg, bb,
        r = arguments[0] / 255,
        g = arguments[1] / 255,
        b = arguments[2] / 255,
        h, s,
        v = Math.max(r, g, b),
        diff = v - Math.min(r, g, b),
        diffc = function(c){
            return (v - c) / 6 / diff + 1 / 2;
        };

    if (diff == 0) {
        h = s = 0;
    } else {
        s = diff / v;
        rr = diffc(r);
        gg = diffc(g);
        bb = diffc(b);

        if (r === v) {
            h = bb - gg;
        }else if (g === v) {
            h = (1 / 3) + rr - bb;
        }else if (b === v) {
            h = (2 / 3) + gg - rr;
        }
        if (h < 0) {
            h += 1;
        }else if (h > 1) {
            h -= 1;
        }
    }
    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        v: Math.round(v * 100)
    };
}