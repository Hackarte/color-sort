require.config({
    baseUrl: "./bower_components",
    paths: {
        lib: "../lib",
        root: "../",
        jquery: "jquery/dist/jquery.min",
        jcanvas: "jcanvas/jcanvas.min"
    }
});

require(["root/index"]);