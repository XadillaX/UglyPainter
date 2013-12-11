/**
 * Created by XadillaX on 13-12-11.
 */
function OhColor(app) {
    this.currentColorElement = $("#currentColor");
    this.app = app;
    this.canvasContext = this.app.canvas.canvasContext;
    this.currentColor = "#000";
};

OhColor.prototype.init = function() {
    var self = this;

    $(".stored-color a").click(function() {
        self.setColor($(this).css("background-color"));
    });

    this.setColor("#000");

    $("#other-color").ColorPicker({
        onShow: function (colpkr) {
            $(colpkr).fadeIn(500);
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).fadeOut(500);
            return false;
        },
        onChange: function (hsb, hex, rgb) {
            self.setColor("#" + hex);
        }
    });
};

OhColor.prototype.setColor = function(colorHex) {
    console.log(colorHex);

    this.currentColorElement.css("background-color", colorHex);
    this.currentColor = colorHex;
    this.canvasContext.strokeStyle = this.currentColor;
    this.canvasContext.fillStyle = this.currentColor;
};
