/**
 * Created by XadillaX on 13-12-11.
 */
function Fill(canvas, context) {
    this.canvas = canvas;
    this.context = context;

    this.isMouseDown = false;

    this.startX = 0;
    this.startY = 0;
    this.endX = 0;
    this.endY = 0

    this.prevColor = "";
};

Fill.prototype.init = function() {
    this.canvas.canvas.onmousedown = this.mouseDown.bind(this);
    this.canvas.canvas.onmousemove = this.mouseMove.bind(this);
    this.canvas.canvas.onmouseup = this.mouseUp.bind(this);
    this.canvas.canvas.onmouseout = this.mouseOut.bind(this);
};

Fill.prototype.mouseDown = function(event) {
    console.log(this.canvas.width + " " + this.canvas.height);
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
};

Fill.prototype.mouseMove = function(event) {
};

Fill.prototype.mouseUp = function(event) {
};

Fill.prototype.mouseOut = function(event) {
};
