require.config({
    baseUrl: "./bower_components",
    paths: {
        lib: "../lib",
        root: "../",
        jquery: "jquery/dist/jquery.min"
    }
});

require(["root/index"]);