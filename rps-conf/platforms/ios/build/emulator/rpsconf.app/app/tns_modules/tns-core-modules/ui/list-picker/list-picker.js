var common = require("./list-picker-common");
var types = require("utils/types");
var style_1 = require("ui/styling/style");
global.moduleMerge(common, exports);
var ListPicker = (function (_super) {
    __extends(ListPicker, _super);
    function ListPicker() {
        var _this = _super.call(this) || this;
        _this._ios = UIPickerView.new();
        _this._ios.dataSource = _this._dataSource = ListPickerDataSource.initWithOwner(new WeakRef(_this));
        _this._delegate = ListPickerDelegateImpl.initWithOwner(new WeakRef(_this));
        return _this;
    }
    ListPicker.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        this._ios.delegate = this._delegate;
    };
    ListPicker.prototype.onUnloaded = function () {
        this._ios.delegate = null;
        _super.prototype.onUnloaded.call(this);
    };
    Object.defineProperty(ListPicker.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    ListPicker.prototype._onSelectedIndexPropertyChanged = function (data) {
        _super.prototype._onSelectedIndexPropertyChanged.call(this, data);
        if (this.ios && types.isNumber(data.newValue)) {
            this.ios.selectRowInComponentAnimated(data.newValue, 0, false);
        }
    };
    ListPicker.prototype._onItemsPropertyChanged = function (data) {
        if (this.ios) {
            this.ios.reloadAllComponents();
        }
        this._updateSelectedIndexOnItemsPropertyChanged(data.newValue);
    };
    return ListPicker;
}(common.ListPicker));
exports.ListPicker = ListPicker;
var ListPickerDataSource = (function (_super) {
    __extends(ListPickerDataSource, _super);
    function ListPickerDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListPickerDataSource.initWithOwner = function (owner) {
        var dataSource = ListPickerDataSource.new();
        dataSource._owner = owner;
        return dataSource;
    };
    ListPickerDataSource.prototype.numberOfComponentsInPickerView = function (pickerView) {
        return 1;
    };
    ListPickerDataSource.prototype.pickerViewNumberOfRowsInComponent = function (pickerView, component) {
        var owner = this._owner.get();
        return (owner && owner.items) ? owner.items.length : 0;
    };
    return ListPickerDataSource;
}(NSObject));
ListPickerDataSource.ObjCProtocols = [UIPickerViewDataSource];
var ListPickerDelegateImpl = (function (_super) {
    __extends(ListPickerDelegateImpl, _super);
    function ListPickerDelegateImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListPickerDelegateImpl.initWithOwner = function (owner) {
        var delegate = ListPickerDelegateImpl.new();
        delegate._owner = owner;
        return delegate;
    };
    ListPickerDelegateImpl.prototype.pickerViewAttributedTitleForRowForComponent = function (pickerView, row, component) {
        var owner = this._owner.get();
        if (owner) {
            var title = NSAttributedString.alloc().initWithStringAttributes(owner._getItemAsString(row), (_a = {}, _a[NSForegroundColorAttributeName] = pickerView.tintColor, _a));
            return title;
        }
        return NSAttributedString.alloc().initWithStringAttributes(row.toString(), (_b = {}, _b[NSForegroundColorAttributeName] = pickerView.tintColor, _b));
        var _a, _b;
    };
    ListPickerDelegateImpl.prototype.pickerViewDidSelectRowInComponent = function (pickerView, row, component) {
        var owner = this._owner.get();
        if (owner) {
            owner._onPropertyChangedFromNative(common.ListPicker.selectedIndexProperty, row);
        }
    };
    return ListPickerDelegateImpl;
}(NSObject));
ListPickerDelegateImpl.ObjCProtocols = [UIPickerViewDelegate];
var ListPickerStyler = (function () {
    function ListPickerStyler() {
    }
    ListPickerStyler.setBackgroundColorProperty = function (view, newValue) {
        var picker = view._nativeView;
        picker.backgroundColor = newValue;
    };
    ListPickerStyler.resetBackgroundColorProperty = function (view, nativeValue) {
        var picker = view._nativeView;
        picker.backgroundColor = nativeValue;
    };
    ListPickerStyler.getBackgroundColorProperty = function (view) {
        var picker = view._nativeView;
        return picker.backgroundColor;
    };
    ListPickerStyler.setColorProperty = function (view, newValue) {
        var picker = view._nativeView;
        picker.tintColor = newValue;
    };
    ListPickerStyler.resetColorProperty = function (view, nativeValue) {
        var picker = view._nativeView;
        picker.tintColor = nativeValue;
    };
    ListPickerStyler.getColorProperty = function (view) {
        var picker = view._nativeView;
        return picker.tintColor;
    };
    ListPickerStyler.registerHandlers = function () {
        style_1.registerHandler(style_1.backgroundColorProperty, new style_1.StylePropertyChangedHandler(ListPickerStyler.setBackgroundColorProperty, ListPickerStyler.resetBackgroundColorProperty, ListPickerStyler.getBackgroundColorProperty), "ListPicker");
        style_1.registerHandler(style_1.colorProperty, new style_1.StylePropertyChangedHandler(ListPickerStyler.setColorProperty, ListPickerStyler.resetColorProperty, ListPickerStyler.getColorProperty), "ListPicker");
    };
    return ListPickerStyler;
}());
exports.ListPickerStyler = ListPickerStyler;
ListPickerStyler.registerHandlers();
//# sourceMappingURL=list-picker.js.map