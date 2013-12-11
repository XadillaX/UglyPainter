/**
 * Created by XadillaX on 13-12-11.
 */
function Thickness(app) {
    this.levels = {
        "tn1"   : $("#tn1").parent(),
        "tn2"   : $("#tn2").parent(),
        "tn3"   : $("#tn3").parent(),
        "tn4"   : $("#tn4").parent()
    };
    this.currentThickness = 1;
    this.app = app;
    this.canvasContext = null;
};

Thickness.prototype.init = function() {
    this.canvasContext = this.app.canvas.canvasContext;

    var self = this;
    $(".thickness .btn").click(function() {
        self.choose($(this).find("input").attr("id"), true);
    });
    
    this.choose("tn1");
    this.levels["tn1"].addClass("active");
};

Thickness.prototype.choose = function(thickness, userClick) {
    this.currentThickness = parseInt(thickness[2]);
    this.canvasContext.lineWidth = this.currentThickness;
    
    console.log("Thickness [" + this.currentThickness + "] was selected.");
};
