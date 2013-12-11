/**
 * Created by XadillaX on 13-12-11.
 */
function Shape(app) {
    this.app = app;
    this.currentShape = null;
    this.currentShapeObject = null;

    this.shapes = {
        "line"          : $("#line").parent(),
        "round-empty"   : $("#round-empty").parent(),
        "square-empty"  : $("#square-empty").parent(),
        "triangle-empty": $("#triangle-empty").parent(),
        "round"         : $("#round").parent(),
        "square"        : $("#square").parent()
    };
    this.action = {
        "line"          : Line,
        "round-empty"   : EmptyRound,
        "square-empty"  : EmptySquare,
        "triangle-empty": EmptyTriangle,
        "round"         : Round,
        "square"        : Square
    };
};

Shape.prototype.init = function() {
    var self = this;
    $(".shape .btn").click(function() {
        self.choose($(this).find("input").attr("id"), true);
    });
    
    this.choose(null);
};

Shape.prototype.choose = function(shape, userClick) {
    $(".shape .btn").removeClass("active");

    this.currentShape = shape;
    if(!this.shapes[shape]) {
        this.currentShapeObject = null;
        return;
    }

    this.app.toolset.choose(null);

    if(!userClick) {
        this.shapes[shape].addClass("active");
    }

    if(this.action[shape]) {
        this.currentShapeObject = new this.action[shape](this.app.canvas, this.app.canvas.canvasContext);
        this.currentShapeObject.init();
    }

    console.log("Shape [" + shape + "] was selected.");
};
