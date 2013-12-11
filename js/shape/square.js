/**
 * Created by XadillaX on 13-12-11.
 */
function Square(canvas, context) {
    this.canvas = canvas;
    this.context = context;

    this.isMouseDown = false;

    this.startX = 0;
    this.startY = 0;
    this.endX = 0;
    this.endY = 0;
};

Square.prototype.init = function() {
    this.canvas.canvas.onmousedown = this.mouseDown.bind(this);
    this.canvas.canvas.onmousemove = this.mouseMove.bind(this);
    this.canvas.canvas.onmouseup = this.mouseUp.bind(this);
    this.canvas.canvas.onmouseout = this.mouseOut.bind(this);
};

Square.prototype.mouseDown = function(event) {
    event = this.canvas.getEvent(event);

    this.startX = this.canvas.getMouseX(event);
    this.startY = this.canvas.getMouseY(event);

    this.isMouseDown = true;
    this.context.closePath();
    this.context.beginPath();
};

Square.prototype.mouseMove = function(event) {
    event = this.canvas.getEvent(event);
};

Square.prototype.mouseUp = function(event) {
    event = this.canvas.getEvent(event);

    this.endX = this.canvas.getMouseX(event);
    this.endY = this.canvas.getMouseY(event);

    if(this.isMouseDown) {
        this.context.fillRect(this.startX, this.startY, this.endX - this.startX, this.endY - this.startY);
    }

    this.isMouseDown = false;
};

Square.prototype.mouseOut = function(event) {
    event = this.canvas.getEvent(event);

    this.isMouseDown = false;
};
