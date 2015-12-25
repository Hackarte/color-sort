define(["jquery", "lib/spectre/SpectreController", "lib/inputs/InputsController"], function ($, SpectreController, InputsController) {
    
    var spectre = new SpectreController(400, 200);
    
    var inputs = new InputsController(spectre);
    
});