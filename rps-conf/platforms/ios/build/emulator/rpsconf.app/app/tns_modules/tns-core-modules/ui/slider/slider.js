var common = require("./slider-common");
var style = require("ui/styling/style");
function onValuePropertyChanged(data) {
    var slider = data.object;
    slider.ios.value = data.newValue;
}
function onMinValuePropertyChanged(data) {
    var slider = data.object;
    slider.ios.minimumValue = data.newValue;
}
function onMaxValuePropertyChanged(data) {
    var slider = data.object;
    slider.ios.maximumValue = data.newValue;
}
common.Slider.valueProperty.metadata.onSetNativeValue = onValuePropertyChanged;
common.Slider.minValueProperty.metadata.onSetNativeValue = onMinValuePropertyChanged;
common.Slider.maxValueProperty.metadata.onSetNativeValue = onMaxValuePropertyChanged;
global.moduleMerge(common, exports);
var SliderChangeHandlerImpl = (function (_super) {
    __extends(SliderChangeHandlerImpl, _super);
    function SliderChangeHandlerImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SliderChangeHandlerImpl.initWithOwner = function (owner) {
        var handler = SliderChangeHandlerImpl.new();
        handler._owner = owner;
        return handler;
    };
    SliderChangeHandlerImpl.prototype.sliderValueChanged = function (sender) {
        var owner = this._owner.get();
        if (owner) {
            owner._onPropertyChangedFromNative(common.Slider.valueProperty, sender.value);
        }
    };
    return SliderChangeHandlerImpl;
}(NSObject));
SliderChangeHandlerImpl.ObjCExposedMethods = {
    'sliderValueChanged': { returns: interop.types.void, params: [UISlider] }
};
var Slider = (function (_super) {
    __extends(Slider, _super);
    function Slider() {
        var _this = _super.call(this) || this;
        _this._ios = UISlider.new();
        _this._ios.minimumValue = 0;
        _this._ios.maximumValue = _this.maxValue;
        _this._changeHandler = SliderChangeHandlerImpl.initWithOwner(new WeakRef(_this));
        _this._ios.addTargetActionForControlEvents(_this._changeHandler, "sliderValueChanged", 4096);
        return _this;
    }
    Object.defineProperty(Slider.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    return Slider;
}(common.Slider));
exports.Slider = Slider;
var SliderStyler = (function () {
    function SliderStyler() {
    }
    SliderStyler.setColorProperty = function (view, newValue) {
        var bar = view.ios;
        bar.thumbTintColor = newValue;
    };
    SliderStyler.resetColorProperty = function (view, nativeValue) {
        var bar = view.ios;
        bar.thumbTintColor = nativeValue;
    };
    SliderStyler.getNativeColorValue = function (view) {
        var bar = view.ios;
        return bar.thumbTintColor;
    };
    SliderStyler.setBackgroundColorProperty = function (view, newValue) {
        var bar = view.ios;
        bar.minimumTrackTintColor = newValue;
    };
    SliderStyler.resetBackgroundColorProperty = function (view, nativeValue) {
        var bar = view.ios;
        bar.minimumTrackTintColor = nativeValue;
    };
    SliderStyler.getBackgroundColorProperty = function (view) {
        var bar = view.ios;
        return bar.minimumTrackTintColor;
    };
    SliderStyler.registerHandlers = function () {
        style.registerHandler(style.colorProperty, new style.StylePropertyChangedHandler(SliderStyler.setColorProperty, SliderStyler.resetColorProperty, SliderStyler.getNativeColorValue), "Slider");
        style.registerHandler(style.backgroundColorProperty, new style.StylePropertyChangedHandler(SliderStyler.setBackgroundColorProperty, SliderStyler.resetBackgroundColorProperty, SliderStyler.getBackgroundColorProperty), "Slider");
        style.registerHandler(style.backgroundInternalProperty, style.ignorePropertyHandler, "Slider");
    };
    return SliderStyler;
}());
exports.SliderStyler = SliderStyler;
SliderStyler.registerHandlers();
//# sourceMappingURL=slider.js.map