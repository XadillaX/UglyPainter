/**
 * Created by XadillaX on 13-12-11.
 */
var app = null;

$(function() {
    var cH = $("#painter-wrapper").height();
    var cW = $("#painter-wrapper").width();
    
    $("#canvas").attr("height", cH);
    $("#canvas").attr("width", cW);

    app = new App();
    app.init();
});
