/**
 * Created by XadillaX on 13-12-11.
 */
function Toolset(app) {
    this.tools = {
        "brush"     : $("#brush").parent(),
        "eraser"    : $("#eraser").parent(),
        "fill"      : $("#fill").parent(),
        "dropper"   : $("#dropper").parent(),
        "type"      : $("#type").parent(),
        "magnifier" : $("#magnifier").parent()
    };
    this.currentTool = null;
    this.currentToolObject = null;
    this.app = app;

    this.action = {
        "brush"     : Brush,
        "eraser"    : Eraser,
        "fill"      : Fill,
        "dropper"   : Straw,
        "type"      : Type,
        "magnifier" : Magnifier
    };
};
                        
Toolset.prototype.init = function() {
    var self = this;
    $(".toolset .btn").click(function() {
        self.choose($(this).find("input").attr("id"), true);
    });
    
    this.choose("brush");
};

Toolset.prototype.choose = function(tool, userClick) {
    $(".toolset .btn").removeClass("active");

    this.currentTool = tool;
    if(!this.tools[tool]) {
        this.currentToolObject = null;
        return;
    }

    this.app.shape.choose(null);

    if(!userClick) {
        this.tools[tool].addClass("active");
    }

    if(this.action[tool]) {
        this.currentToolObject = new this.action[tool](this.app.canvas, this.app.canvas.canvasContext);
        this.currentToolObject.init();
    }

    console.log("Tool [" + tool + "] was selected.");
};
