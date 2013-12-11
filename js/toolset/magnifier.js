/**
 * Created by XadillaX on 13-12-11.
 */
function Magnifier(canvas, context) {
    this.canvas = canvas;
    this.context = context;

    this.isMouseDown = false;

    this.startX = 0;
    this.startY = 0;
    this.endX = 0;
    this.endY = 0
};

Magnifier.prototype.init = function() {
    this.canvas.canvas.onmousedown = this.mouseDown.bind(this);
    this.canvas.canvas.onmousemove = this.mouseMove.bind(this);
    this.canvas.canvas.onmouseup = this.mouseUp.bind(this);
    this.canvas.canvas.onmouseout = this.mouseOut.bind(this);
};

Magnifier.prototype.mouseDown = function(event) {
    var scale = parseFloat(window.prompt('请输入放大/缩小百分比', ''));

    if(scale !== 0 && !scale) {
        return;
    }

    var scaleX = this.canvas.width * scale / 100;
    var scaleY = this.canvas.height * scale / 100;
    this.canvas.canvasObject.css("width", scaleX + "px");
    this.canvas.canvasObject.css("height", scaleY + "px");

    if(100 === scale) {
        $(".toolset .btn").removeAttr("disabled");
        $(".shape .btn").removeAttr("disabled");
    } else {
        $(".toolset .btn").attr("disabled", "disabled");
        $(".shape .btn").attr("disabled", "disabled");
    }

    $("#magnifier").parent().removeAttr('disabled');
};

Magnifier.prototype.mouseMove = function(event) {
};

Magnifier.prototype.mouseUp = function(event) {
};

Magnifier.prototype.mouseOut = function(event) {
};
