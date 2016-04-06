define(function () {
   
    var bubbleSort = function (array) {
      
        for(var i = array.length - 1; i > 0; i--) {
            
            for(var j = 0; j < i; j++) {
                
                var aux;
                
                 if (array[j].value() > array[j + 1].value()) {
                     aux = array[j];
                     array[j] = array[j + 1];
                     array[j + 1] = aux;
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