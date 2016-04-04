define(function () {
   
    var bubbleSort = function (array) {
      
        for(var i = 0; i < array.length; i++) {
            
            for(var j = 0; j < array.length; j++) {
                
                var aux;
                
                 if (array[i].value() < array[j].value()) {
                     aux = array[i];
                     array[i] = array[j];
                     array[j] = aux;
                 }
                
            }
            
        }
      
        return array;
        
    };
    
    
    var bubbleStep = function(array, i, j) {
      
        var aux;
        var result = {};
        
        if (array[i].value() < array[j].value()) {
            aux = array[i];
            array[i] = array[j];
            array[j] = aux;
            result.changed = true;
        }
        
        result.array = array;
        result.next = {};
        
        if(j + 1 < array.length) {
            result.next.j = j + 1;
            result.next.i = i;
        } else {
            if(i + 1 < array.length) {
                result.next.j = 0;
                result.next.i = i + 1;
            } else {
                result.next = false;
            }
        }
        
        return result;
        
        
        
        
    };
    
    return {
      
        bubble: bubbleSort,
        bubbleStep: bubbleStep
        
    };
    
});