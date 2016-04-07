require.config({
    baseUrl: "./node_modules",
    paths: {
        lib: "../lib",
        root: "../",
        jquery: "jquery/dist/jquery.min",
        jcanvas: "jcanvas/jcanvas.min"
    }
});

require(["root/index"]);
