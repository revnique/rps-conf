var common = require("./time-picker-common");
var style = require("ui/styling/style");
var utils = require("utils/utils");
function getDate(hour, minute) {
    var comps = NSDateComponents.alloc().init();
    comps.hour = hour;
    comps.minute = minute;
    return utils.ios.getter(NSCalendar, NSCalendar.currentCalendar).dateFromComponents(comps);
}
function getComponents(date) {
    return utils.ios.getter(NSCalendar, NSCalendar.currentCalendar).componentsFromDate(32 | 64, date);
}
global.moduleMerge(common, exports);
var TimePicker = (function (_super) {
    __extends(TimePicker, _super);
    function TimePicker() {
        var _this = _super.call(this) || this;
        _this._ios = UIDatePicker.new();
        _this._ios.datePickerMode = 0;
        _this._changeHandler = UITimePickerChangeHandlerImpl.initWithOwner(new WeakRef(_this));
        _this._ios.addTargetActionForControlEvents(_this._changeHandler, "valueChanged", 4096);
        var comps = getComponents(NSDate.date());
        _this.hour = comps.hour;
        _this.minute = comps.minute;
        return _this;
    }
    Object.defineProperty(TimePicker.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    TimePicker.prototype._setNativeTime = function () {
        if (this.ios) {
            this.ios.date = getDate(this.hour, this.minute);
        }
    };
    TimePicker.prototype._setNativeMinTime = function () {
        if (this.ios) {
            this.ios.minimumDate = getDate(this.minHour, this.minMinute);
        }
    };
    TimePicker.prototype._setNativeMaxTime = function () {
        if (this.ios) {
            this.ios.maximumDate = getDate(this.maxHour, this.maxMinute);
        }
    };
    TimePicker.prototype._setNativeMinuteIntervalTime = function () {
        if (this.ios) {
            this.ios.minuteInterval = this.minuteInterval;
        }
    };
    return TimePicker;
}(common.TimePicker));
exports.TimePicker = TimePicker;
var UITimePickerChangeHandlerImpl = (function (_super) {
    __extends(UITimePickerChangeHandlerImpl, _super);
    function UITimePickerChangeHandlerImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UITimePickerChangeHandlerImpl.initWithOwner = function (owner) {
        var handler = UITimePickerChangeHandlerImpl.new();
        handler._owner = owner;
        return handler;
    };
    UITimePickerChangeHandlerImpl.prototype.valueChanged = function (sender) {
        var owner = this._owner.get();
        if (!owner) {
            return;
        }
        var comps = getComponents(sender.date);
        var timeChanged = false;
        if (comps.hour !== owner.hour) {
            owner._onPropertyChangedFromNative(common.TimePicker.hourProperty, comps.hour);
            timeChanged = true;
        }
        if (comps.minute !== owner.minute) {
            owner._onPropertyChangedFromNative(common.TimePicker.minuteProperty, comps.minute);
            timeChanged = true;
        }
        if (timeChanged) {
            owner._onPropertyChangedFromNative(common.TimePicker.timeProperty, new Date(0, 0, 0, comps.hour, comps.minute));
        }
    };
    return UITimePickerChangeHandlerImpl;
}(NSObject));
UITimePickerChangeHandlerImpl.ObjCExposedMethods = {
    'valueChanged': { returns: interop.types.void, params: [UIDatePicker] }
};
var TimePickerStyler = (function () {
    function TimePickerStyler() {
    }
    TimePickerStyler.setColorProperty = function (view, newValue) {
        var picker = view._nativeView;
        picker.setValueForKey(newValue, "textColor");
    };
    TimePickerStyler.resetColorProperty = function (view, nativeValue) {
        var picker = view._nativeView;
        picker.setValueForKey(nativeValue, "textColor");
    };
    TimePickerStyler.getColorProperty = function (view) {
        var picker = view._nativeView;
        return picker.valueForKey("textColor");
    };
    TimePickerStyler.registerHandlers = function () {
        style.registerHandler(style.colorProperty, new style.StylePropertyChangedHandler(TimePickerStyler.setColorProperty, TimePickerStyler.resetColorProperty, TimePickerStyler.getColorProperty), "TimePicker");
    };
    return TimePickerStyler;
}());
exports.TimePickerStyler = TimePickerStyler;
TimePickerStyler.registerHandlers();
//# sourceMappingURL=time-picker.js.map