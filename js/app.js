/**
 * Created by XadillaX on 13-12-11.
 */
function App() {
    this.canvas = new Canvas(this);

    this.baseOperator = new BaseOperator(this);
    this.toolset = new Toolset(this);
    this.shape = new Shape(this);
    this.thickness = new Thickness(this);
    this.color = new OhColor(this);
    this.filter = new Filter(this);
};

App.prototype.init = function() {
    this.canvas.init();

    this.baseOperator.init();
    this.toolset.init();
    this.shape.init();
    this.thickness.init();
    this.color.init();
    this.filter.init();
};
