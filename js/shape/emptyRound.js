/**
 * Created by XadillaX on 13-12-11.
 */
function EmptyRound(canvas, context) {
    this.canvas = canvas;
    this.context = context;

    this.isMouseDown = false;

    this.startX = 0;
    this.startY = 0;
    this.endX = 0;
    this.endY = 0;
};

EmptyRound.prototype.init = function() {
    this.canvas.canvas.onmousedown = this.mouseDown.bind(this);
    this.canvas.canvas.onmousemove = this.mouseMove.bind(this);
    this.canvas.canvas.onmouseup = this.mouseUp.bind(this);
    this.canvas.canvas.onmouseout = this.mouseOut.bind(this);
};

EmptyRound.prototype.mouseDown = function(event) {
    event = this.canvas.getEvent(event);

    this.startX = this.canvas.getMouseX(event);
    this.startY = this.canvas.getMouseY(event);

    this.isMouseDown = true;
    this.context.closePath();
    this.context.beginPath();
};

EmptyRound.prototype.mouseMove = function(event) {
    event = this.canvas.getEvent(event);
};

EmptyRound.prototype.mouseUp = function(event) {
    event = this.canvas.getEvent(event);

    this.endX = this.canvas.getMouseX(event);
    this.endY = this.canvas.getMouseY(event);

    if(this.isMouseDown) {
        var centerX = this.startX;
        var centerY = this.startY;
        var radius = Math.sqrt(Math.pow((this.endX - this.startX), 2) + Math.pow((this.endY - this.startY), 2)) / 2;
        if(this.endX > this.startX) centerX += radius;
        else centerX -= radius;
        if(this.endY > this.startY) centerY += radius;
        else centerY -= radius;

        this.context.arc(centerX, centerY, radius, 0, 360, false);
        this.context.stroke();
    }

    this.isMouseDown = false;
};

EmptyRound.prototype.mouseOut = function(event) {
    event = this.canvas.getEvent(event);

    this.isMouseDown = false;
};
