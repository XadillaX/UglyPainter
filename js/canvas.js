/**
 * Created by XadillaX on 13-12-11.
 */
function Canvas(app) {
    this.canvas = document.getElementById('canvas');
    this.canvasContext = this.canvas.getContext("2d");
    this.canvasObject = $(this.canvas);

    this.app = app;

    this.width = this.canvas.clientWidth;
    this.height = this.canvas.clientHeight;
};

Canvas.prototype.init = function() {
    this.canvasContext.rect(0, 0, this.width, this.height);
    this.canvasContext.fillStyle = "#fff";
    this.canvasContext.fill();
};

Canvas.prototype.getEvent = function(event) {
    return event ? event : window.event;
};

Canvas.prototype.getMouseX = function(event) {
    return event.pageX - this.canvasObject.offset().left;
};

Canvas.prototype.getMouseY = function(event) {
    return event.pageY - this.canvasObject.offset().top;
};
