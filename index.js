define(["jquery", "lib/spectre/SpectreController", "lib/inputs/InputsController"], function ($, SpectreController, InputsController) {
    
    var spectre = new SpectreController(2835, 4289);
    
    var inputs = new InputsController(spectre);
    
    var auxImage = new Image(); 
    auxImage.src = 'imgs/Mona_Lisa.jpg';
    auxImage.onload = function () {
        
        var context = spectre.view.main[0].getContext('2d');
        
        context.drawImage(auxImage, 0, 0);
    };
    
    
});
 