/**
 * Created by XadillaX on 13-12-11.
 */
function Filter(app) {
    this.app = app;
    this.canvas = app.canvas;
};

Filter.prototype.init = function() {
    var canvas = this.canvas;
    $(".filter a").click(function() {
        var value = $(this).attr('value');

        var image = new Image();
        image.src = canvas.canvas.toDataURL("image/png");
        AlloyImage(image).ps(value).replace(image);
        canvas.canvasContext.drawImage(image, 0, 0);
    });
};
