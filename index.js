define(["jquery", "lib/spectre/SpectreController", "lib/inputs/InputsController"], function ($, SpectreController, InputsController) {
    
    var spectre = new SpectreController(507, 767, 'imgs/mona.jpg');
    
    var inputs = new InputsController(spectre);
    
});
 