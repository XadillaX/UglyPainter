/**
 * Created by XadillaX on 13-12-11.
 */
function Line(canvas, context) {
    this.canvas = canvas;
    this.context = context;

    this.isMouseDown = false;

    this.startX = 0;
    this.startY = 0;
    this.endX = 0;
    this.endY = 0;
};

Line.prototype.init = function() {
    this.canvas.canvas.onmousedown = this.mouseDown.bind(this);
    this.canvas.canvas.onmousemove = this.mouseMove.bind(this);
    this.canvas.canvas.onmouseup = this.mouseUp.bind(this);
    this.canvas.canvas.onmouseout = this.mouseOut.bind(this);
};

Line.prototype.mouseDown = function(event) {
    event = this.canvas.getEvent(event);

    this.startX = this.canvas.getMouseX(event);
    this.startY = this.canvas.getMouseY(event);

    this.isMouseDown = true;
    this.context.closePath();
    this.context.beginPath();
    this.context.moveTo(this.startX, this.startY);
};

Line.prototype.mouseMove = function(event) {
    event = this.canvas.getEvent(event);
};

Line.prototype.mouseUp = function(event) {
    event = this.canvas.getEvent(event)

    this.endX = this.canvas.getMouseX(event);
    this.endY = this.canvas.getMouseY(event);

    if(this.isMouseDown) {
        this.context.lineTo(this.endX, this.endY);
        this.context.stroke();
    }

    this.isMouseDown = false;
};

Line.prototype.mouseOut = function(event) {
    event = this.canvas.getEvent(event);

    this.isMouseDown = false;
};
