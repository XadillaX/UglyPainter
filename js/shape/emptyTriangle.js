/**
 * Created by XadillaX on 13-12-11.
 */
function EmptyTriangle(canvas, context) {
    this.canvas = canvas;
    this.context = context;

    this.isMouseDown = false;

    this.startX = 0;
    this.startY = 0;
    this.endX = 0;
    this.endY = 0;
};

EmptyTriangle.prototype.init = function() {
    this.canvas.canvas.onmousedown = this.mouseDown.bind(this);
    this.canvas.canvas.onmousemove = this.mouseMove.bind(this);
    this.canvas.canvas.onmouseup = this.mouseUp.bind(this);
    this.canvas.canvas.onmouseout = this.mouseOut.bind(this);
};

EmptyTriangle.prototype.mouseDown = function(event) {
    event = this.canvas.getEvent(event);

    this.startX = this.canvas.getMouseX(event);
    this.startY = this.canvas.getMouseY(event);

    this.isMouseDown = true;
    this.context.closePath();
    this.context.beginPath();
};

EmptyTriangle.prototype.mouseMove = function(event) {
    event = this.canvas.getEvent(event);
};

EmptyTriangle.prototype.mouseUp = function(event) {
    event = this.canvas.getEvent(event);

    this.endX = this.canvas.getMouseX(event);
    this.endY = this.canvas.getMouseY(event);

    if(this.isMouseDown) {
        this.context.moveTo(this.endX, this.endY);
        this.context.lineTo(this.startX - (this.endX - this.startX), this.endY);
        this.context.lineTo(this.startX,
            this.startY - Math.sqrt(
                Math.sqrt(Math.abs(this.endX - this.startX), 2) +
                Math.sqrt(Math.abs(this.endY - this.startY), 2)
            )
        );
        this.context.closePath();
        this.context.stroke();
    }

    this.isMouseDown = false;
};

EmptyTriangle.prototype.mouseOut = function(event) {
    event = this.canvas.getEvent(event);

    this.isMouseDown = false;
};
