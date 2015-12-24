define(["jquery", "lib/spectre/SpectreController", "lib/inputs/InputsController"], function ($, SpectreController, InputsController) {
    
    var spectre = new SpectreController(1000, 600);
    
    var inputs = new InputsController(spectre);
    
    console.log(inputs);
    
});