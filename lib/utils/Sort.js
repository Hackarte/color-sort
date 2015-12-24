define(function () {
   
    var bubbleSort = function (array) {
      
        for(var i = 0; i < array.length; i++) {
            
            for(var j = 0; j < array.length; j++) {
                
                var aux;
                
                if (array[j].value() < array[i].value()) {
                    aux = array[i];
                    array[i] = array[j];
                    array[j] = aux;
                }
                
            }
            
        }
      
        return array;
        
    };
    
    return {
      
        bubble: bubbleSort
        
    };
    
});