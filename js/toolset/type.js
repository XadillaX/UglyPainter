/**
 * Created by XadillaX on 13-12-11.
 */
function Type(canvas, context) {
    this.canvas = canvas;
    this.context = context;

    this.isMouseDown = false;

    this.startX = 0;
    this.startY = 0;
    this.endX = 0;
    this.endY = 0

    this.context.font="20px 微软雅黑";
};

Type.prototype.init = function() {
    this.canvas.canvas.onmousedown = this.mouseDown.bind(this);
    this.canvas.canvas.onmousemove = this.mouseMove.bind(this);
    this.canvas.canvas.onmouseup = this.mouseUp.bind(this);
    this.canvas.canvas.onmouseout = this.mouseOut.bind(this);
};

Type.prototype.mouseDown = function(event) {
    event = this.canvas.getEvent(event);

    this.startX = this.canvas.getMouseX(event);
    this.startY = this.canvas.getMouseY(event);

    var content = window.prompt('请输入文字', '');
    if(content) {
        this.context.fillText(content, this.startX, this.startY);
    }
};

Type.prototype.mouseMove = function(event) {
};

Type.prototype.mouseUp = function(event) {
};

Type.prototype.mouseOut = function(event) {
};
