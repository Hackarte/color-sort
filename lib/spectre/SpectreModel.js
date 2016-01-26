define(["lib/utils/Pixel", "lib/utils/Random"], function (Pixel, Random) {
    
    
    var SpectreModel = function (width, height) {
        this.matrix = [];
        this.width = width;
        this.height = height;
    }
    
    SpectreModel.prototype.randomize = function () {
        
        for(var i = 0; i < this.height; i++) {
            
            this.matrix[i] = [];
            
            for(var j = 0; j < this.width; j++){
              
                this.matrix[i][j] = new Pixel(Random.int(0, 256), Random.int(0, 256), Random.int(0, 256));
            }
        }
            
    };
    
    SpectreModel.prototype.organize = function (algorithm) {
        
        for(var i = 0; i < this.height; i++) {
            
            this.matrix[i] = algorithm(this.matrix[i]);
            
        }
        
//        for(var i = 0; i < this.width; i++) {
//            
//            var column = getColumn(i, this.matrix, this.height);
//            
//            column = algorithm(column);
//            
//            for(var j = 0; j < this.height; j++) {
//                this.matrix[j][i] = column[j];
//            }
//            
//        }
        
    };
    
    SpectreModel.prototype.organizeStep = function (i, j, algorithm) {

        var results = [];
        
        for(var k = 0; k < this.height; k++) {

            results[k] = algorithm(this.matrix[k], i, j);
            this.matrix[k] = results[k].array;

        }


        return results;

    }
    
    return SpectreModel;
    
});





function getColumn (column, matrix, height) {
    
    var array = [];
    
    for(var i = 0; i < height; i++) {
        
        array[i] = matrix[i][column];
        
    }
    
    return array;
    
}