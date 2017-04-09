"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var session_view_model_1 = require("../session-page/session-view-model");
var sessions_service_1 = require("../../services/sessions-service");
var MainViewModel = (function (_super) {
    __extends(MainViewModel, _super);
    function MainViewModel() {
        var _this = _super.call(this) || this;
        _this._allSessions = new Array();
        _this._sessionsService = new sessions_service_1.SessionsService();
        _this.set('isLoading', true);
        return _this;
    }
    Object.defineProperty(MainViewModel.prototype, "sessions", {
        get: function () {
            return this._sessions;
        },
        enumerable: true,
        configurable: true
    });
    MainViewModel.prototype.init = function () {
        var _this = this;
        this._sessionsService.loadSessions()
            .then(function (result) {
            _this.pushSessions(result);
            _this.onDataLoaded();
        });
    };
    MainViewModel.prototype.pushSessions = function (sessionsFromService) {
        for (var i = 0; i < sessionsFromService.length; i++) {
            var newSession = new session_view_model_1.SessionViewModel(sessionsFromService[i]);
            this._allSessions.push(newSession);
        }
    };
    MainViewModel.prototype.onDataLoaded = function () {
        this.set('isLoading', false);
        this.filter();
    };
    MainViewModel.prototype.filter = function () {
        this._sessions = this._allSessions;
        this.notify({ object: this, eventName: observable_1.Observable.propertyChangeEvent, propertyName: 'sessions', value: this._sessions });
    };
    return MainViewModel;
}(observable_1.Observable));
exports.MainViewModel = MainViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTJDO0FBRTNDLHlFQUFvRTtBQUNwRSxvRUFBK0Q7QUFFL0Q7SUFBbUMsaUNBQVU7SUFLekM7UUFBQSxZQUNJLGlCQUFPLFNBR1Y7UUFSTyxrQkFBWSxHQUE0QixJQUFJLEtBQUssRUFBb0IsQ0FBQztRQU0xRSxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxrQ0FBZSxFQUFFLENBQUM7UUFDOUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7O0lBQ2hDLENBQUM7SUFDRCxzQkFBSSxtQ0FBUTthQUFaO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFDTSw0QkFBSSxHQUFYO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFrQjthQUMvQyxJQUFJLENBQUMsVUFBQyxNQUFxQjtZQUN4QixLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFCLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDTyxvQ0FBWSxHQUFwQixVQUFxQixtQkFBa0M7UUFDbkQsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztZQUNoRCxJQUFJLFVBQVUsR0FBRyxJQUFJLHFDQUFnQixDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkMsQ0FBQztJQUVMLENBQUM7SUFFTyxvQ0FBWSxHQUFwQjtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBQ08sOEJBQU0sR0FBZDtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsdUJBQVUsQ0FBQyxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBQyxJQUFJLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQTtJQUN2SCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBcENELENBQW1DLHVCQUFVLEdBb0M1QztBQXBDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcclxuaW1wb3J0IHtTZXNzaW9ufSBmcm9tICcuLi8uLi9zaGFyZWQvaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7U2Vzc2lvblZpZXdNb2RlbH0gZnJvbSAnLi4vc2Vzc2lvbi1wYWdlL3Nlc3Npb24tdmlldy1tb2RlbCc7XHJcbmltcG9ydHtTZXNzaW9uc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Nlc3Npb25zLXNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1haW5WaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxle1xyXG4gICAgcHJpdmF0ZSBfYWxsU2Vzc2lvbnM6IEFycmF5PFNlc3Npb25WaWV3TW9kZWw+ID0gbmV3IEFycmF5PFNlc3Npb25WaWV3TW9kZWw+KCk7XHJcbiAgICBwcml2YXRlIF9zZXNzaW9uczogQXJyYXk8U2Vzc2lvblZpZXdNb2RlbD47XHJcbiAgICBwcml2YXRlIF9zZXNzaW9uc1NlcnZpY2U6IFNlc3Npb25zU2VydmljZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fc2Vzc2lvbnNTZXJ2aWNlID0gbmV3IFNlc3Npb25zU2VydmljZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0KCdpc0xvYWRpbmcnLCB0cnVlKTtcclxuICAgIH1cclxuICAgIGdldCBzZXNzaW9ucygpOkFycmF5PFNlc3Npb25WaWV3TW9kZWw+e1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXNzaW9ucztcclxuICAgIH1cclxuICAgIHB1YmxpYyBpbml0KCl7XHJcbiAgICAgICAgdGhpcy5fc2Vzc2lvbnNTZXJ2aWNlLmxvYWRTZXNzaW9uczxBcnJheTxTZXNzaW9uPj4oKVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0OkFycmF5PFNlc3Npb24+KT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wdXNoU2Vzc2lvbnMocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25EYXRhTG9hZGVkKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBwdXNoU2Vzc2lvbnMoc2Vzc2lvbnNGcm9tU2VydmljZTpBcnJheTxTZXNzaW9uPil7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHNlc3Npb25zRnJvbVNlcnZpY2UubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB2YXIgbmV3U2Vzc2lvbiA9IG5ldyBTZXNzaW9uVmlld01vZGVsKHNlc3Npb25zRnJvbVNlcnZpY2VbaV0pO1xyXG4gICAgICAgICAgICB0aGlzLl9hbGxTZXNzaW9ucy5wdXNoKG5ld1Nlc3Npb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkRhdGFMb2FkZWQoKXtcclxuICAgICAgICB0aGlzLnNldCgnaXNMb2FkaW5nJyxmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5maWx0ZXIoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZmlsdGVyKCl7XHJcbiAgICAgICAgdGhpcy5fc2Vzc2lvbnMgPSB0aGlzLl9hbGxTZXNzaW9ucztcclxuICAgICAgICB0aGlzLm5vdGlmeSh7b2JqZWN0OnRoaXMsZXZlbnROYW1lOk9ic2VydmFibGUucHJvcGVydHlDaGFuZ2VFdmVudCwgcHJvcGVydHlOYW1lOiAnc2Vzc2lvbnMnLCB2YWx1ZTp0aGlzLl9zZXNzaW9uc30pXHJcbiAgICB9XHJcbn0iXX0=