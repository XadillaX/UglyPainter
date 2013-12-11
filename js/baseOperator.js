/**
 * Created by XadillaX on 13-12-11.
 */
function BaseOperator(app) {
    this.app = app;
    this.canvas = app.canvas;
};

BaseOperator.prototype.init = function() {
    var canvas = this.canvas;
    var context = canvas.canvasContext;
    $("#clear").click(function() {
        var prevColor = context.fillStyle;
        context.fillStyle = "#fff";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = prevColor;
    });
    $("#save").click(function() {
        var href = canvas.canvas.toDataURL("image/png");

        $("#oksave").attr("href", href);
        $("#oksave").attr("target", "_blank");
        $('#saveModal').modal('show');
    });
};
