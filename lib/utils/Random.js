define(function () {
   
    var getRandomInt = function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    
    return {
        int: getRandomInt
    };
    
});