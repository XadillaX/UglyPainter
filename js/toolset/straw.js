/**
 * Created by XadillaX on 13-12-11.
 */
function Straw(canvas, context) {
    this.canvas = canvas;
    this.context = context;

    this.isMouseDown = false;

    this.startX = 0;
    this.startY = 0;
    this.endX = 0;
    this.endY = 0

    this.prevColor = "";
};

Straw.prototype.init = function() {
    this.canvas.canvas.onmousedown = this.mouseDown.bind(this);
    this.canvas.canvas.onmousemove = this.mouseMove.bind(this);
    this.canvas.canvas.onmouseup = this.mouseUp.bind(this);
    this.canvas.canvas.onmouseout = this.mouseOut.bind(this);
};

Straw.prototype.mouseDown = function(event) {
    event = this.canvas.getEvent(event);

    this.startX = this.canvas.getMouseX(event);
    this.startY = this.canvas.getMouseY(event);

    var imageData = this.context.getImageData(this.startX, this.startY, 1, 1);
    var pxData = imageData.data;
    var color='rgba(' + pxData[0] + ',' + pxData[1] + ',' + pxData[2] + ',' + pxData[3] + ')';

    this.canvas.app.color.setColor(color);
};

Straw.prototype.mouseMove = function(event) {
};

Straw.prototype.mouseUp = function(event) {
};

Straw.prototype.mouseOut = function(event) {
};
