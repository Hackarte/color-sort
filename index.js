define(["jquery", "lib/spectre/SpectreController", "lib/inputs/InputsController","lib/utils/Sort"], function ($, SpectreController, InputsController, sort) {
    
    var spectre = new SpectreController(507, 767, 'imgs/mona.jpg');
    
    var inputs = new InputsController(spectre);
});
 