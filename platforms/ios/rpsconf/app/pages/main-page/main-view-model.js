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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTJDO0FBRTNDLHlFQUFvRTtBQUNwRSxvRUFBK0Q7QUFFL0Q7SUFBbUMsaUNBQVU7SUFLekM7UUFBQSxZQUNJLGlCQUFPLFNBR1Y7UUFSTyxrQkFBWSxHQUE0QixJQUFJLEtBQUssRUFBb0IsQ0FBQztRQU0xRSxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxrQ0FBZSxFQUFFLENBQUM7UUFDOUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7O0lBQ2hDLENBQUM7SUFDRCxzQkFBSSxtQ0FBUTthQUFaO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFDTSw0QkFBSSxHQUFYO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFrQjthQUMvQyxJQUFJLENBQUMsVUFBQyxNQUFxQjtZQUN4QixLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFCLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDTyxvQ0FBWSxHQUFwQixVQUFxQixtQkFBa0M7UUFDbkQsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztZQUNoRCxJQUFJLFVBQVUsR0FBRyxJQUFJLHFDQUFnQixDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkMsQ0FBQztJQUVMLENBQUM7SUFFTyxvQ0FBWSxHQUFwQjtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBQ08sOEJBQU0sR0FBZDtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsdUJBQVUsQ0FBQyxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBQyxJQUFJLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQTtJQUN2SCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBcENELENBQW1DLHVCQUFVLEdBb0M1QztBQXBDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7U2Vzc2lvbn0gZnJvbSAnLi4vLi4vc2hhcmVkL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtTZXNzaW9uVmlld01vZGVsfSBmcm9tICcuLi9zZXNzaW9uLXBhZ2Uvc2Vzc2lvbi12aWV3LW1vZGVsJztcbmltcG9ydHtTZXNzaW9uc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Nlc3Npb25zLXNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgTWFpblZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGV7XG4gICAgcHJpdmF0ZSBfYWxsU2Vzc2lvbnM6IEFycmF5PFNlc3Npb25WaWV3TW9kZWw+ID0gbmV3IEFycmF5PFNlc3Npb25WaWV3TW9kZWw+KCk7XG4gICAgcHJpdmF0ZSBfc2Vzc2lvbnM6IEFycmF5PFNlc3Npb25WaWV3TW9kZWw+O1xuICAgIHByaXZhdGUgX3Nlc3Npb25zU2VydmljZTogU2Vzc2lvbnNTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fc2Vzc2lvbnNTZXJ2aWNlID0gbmV3IFNlc3Npb25zU2VydmljZSgpO1xuICAgICAgICB0aGlzLnNldCgnaXNMb2FkaW5nJywgdHJ1ZSk7XG4gICAgfVxuICAgIGdldCBzZXNzaW9ucygpOkFycmF5PFNlc3Npb25WaWV3TW9kZWw+e1xuICAgICAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbnM7XG4gICAgfVxuICAgIHB1YmxpYyBpbml0KCl7XG4gICAgICAgIHRoaXMuX3Nlc3Npb25zU2VydmljZS5sb2FkU2Vzc2lvbnM8QXJyYXk8U2Vzc2lvbj4+KClcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQ6QXJyYXk8U2Vzc2lvbj4pPT57XG4gICAgICAgICAgICAgICAgdGhpcy5wdXNoU2Vzc2lvbnMocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uRGF0YUxvYWRlZCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIHByaXZhdGUgcHVzaFNlc3Npb25zKHNlc3Npb25zRnJvbVNlcnZpY2U6QXJyYXk8U2Vzc2lvbj4pe1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgc2Vzc2lvbnNGcm9tU2VydmljZS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICB2YXIgbmV3U2Vzc2lvbiA9IG5ldyBTZXNzaW9uVmlld01vZGVsKHNlc3Npb25zRnJvbVNlcnZpY2VbaV0pO1xuICAgICAgICAgICAgdGhpcy5fYWxsU2Vzc2lvbnMucHVzaChuZXdTZXNzaW9uKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRhdGFMb2FkZWQoKXtcbiAgICAgICAgdGhpcy5zZXQoJ2lzTG9hZGluZycsZmFsc2UpO1xuICAgICAgICB0aGlzLmZpbHRlcigpO1xuICAgIH1cbiAgICBwcml2YXRlIGZpbHRlcigpe1xuICAgICAgICB0aGlzLl9zZXNzaW9ucyA9IHRoaXMuX2FsbFNlc3Npb25zO1xuICAgICAgICB0aGlzLm5vdGlmeSh7b2JqZWN0OnRoaXMsZXZlbnROYW1lOk9ic2VydmFibGUucHJvcGVydHlDaGFuZ2VFdmVudCwgcHJvcGVydHlOYW1lOiAnc2Vzc2lvbnMnLCB2YWx1ZTp0aGlzLl9zZXNzaW9uc30pXG4gICAgfVxufSJdfQ==