"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var MainViewModel = (function (_super) {
    __extends(MainViewModel, _super);
    function MainViewModel() {
        var _this = _super.call(this) || this;
        _this._tempSessions = new Array();
        return _this;
    }
    Object.defineProperty(MainViewModel.prototype, "sessions", {
        get: function () {
            return this._tempSessions;
        },
        enumerable: true,
        configurable: true
    });
    MainViewModel.prototype.init = function () {
        var sessionArray = [
            {
                id: '1',
                title: 'session 1',
                start: '2016-11-11T11:11:11Z',
                end: '2016-11-11T11:11:11Z',
                room: 'stuff',
                roomInfo: {
                    roomId: 'room1',
                    name: 'room 1',
                    url: '',
                    theme: ''
                },
                speakers: [],
                description: 'desc 1',
                descriptionShort: 'short desc 1',
                calendarEventId: '',
                isBreak: false
            }
        ];
        for (var i = 0; i < sessionArray.length; i++) {
            this._tempSessions.push(sessionArray[i]);
        }
    };
    return MainViewModel;
}(observable_1.Observable));
exports.MainViewModel = MainViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTJDO0FBRzNDO0lBQW1DLGlDQUFVO0lBR3pDO1FBQUEsWUFDSSxpQkFBTyxTQUNWO1FBSk8sbUJBQWEsR0FBbUIsSUFBSSxLQUFLLEVBQVcsQ0FBQzs7SUFJN0QsQ0FBQztJQUNELHNCQUFJLG1DQUFRO2FBQVo7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUNNLDRCQUFJLEdBQVg7UUFDSSxJQUFJLFlBQVksR0FBbUI7WUFDL0I7Z0JBQ0ksRUFBRSxFQUFDLEdBQUc7Z0JBQ04sS0FBSyxFQUFDLFdBQVc7Z0JBQ2pCLEtBQUssRUFBQyxzQkFBc0I7Z0JBQzVCLEdBQUcsRUFBQyxzQkFBc0I7Z0JBQzFCLElBQUksRUFBQyxPQUFPO2dCQUNaLFFBQVEsRUFBQztvQkFDTCxNQUFNLEVBQUMsT0FBTztvQkFDZCxJQUFJLEVBQUMsUUFBUTtvQkFDYixHQUFHLEVBQUMsRUFBRTtvQkFDTixLQUFLLEVBQUMsRUFBRTtpQkFDWDtnQkFDRCxRQUFRLEVBQUMsRUFBRTtnQkFDWCxXQUFXLEVBQUUsUUFBUTtnQkFDckIsZ0JBQWdCLEVBQUMsY0FBYztnQkFDL0IsZUFBZSxFQUFDLEVBQUU7Z0JBQ2xCLE9BQU8sRUFBQyxLQUFLO2FBQ2hCO1NBQ0osQ0FBQztRQUNGLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdDLENBQUM7SUFDTCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBbENELENBQW1DLHVCQUFVLEdBa0M1QztBQWxDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcclxuaW1wb3J0IHtTZXNzaW9ufSBmcm9tICcuLi8uLi9zaGFyZWQvaW50ZXJmYWNlcydcclxuXHJcbmV4cG9ydCBjbGFzcyBNYWluVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZXtcclxuICAgIHByaXZhdGUgX3RlbXBTZXNzaW9uczogQXJyYXk8U2Vzc2lvbj4gPSBuZXcgQXJyYXk8U2Vzc2lvbj4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICBnZXQgc2Vzc2lvbnMoKTpBcnJheTxTZXNzaW9uPntcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGVtcFNlc3Npb25zO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGluaXQoKXtcclxuICAgICAgICB2YXIgc2Vzc2lvbkFycmF5OiBBcnJheTxTZXNzaW9uPiA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6JzEnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6J3Nlc3Npb24gMScsXHJcbiAgICAgICAgICAgICAgICBzdGFydDonMjAxNi0xMS0xMVQxMToxMToxMVonLFxyXG4gICAgICAgICAgICAgICAgZW5kOicyMDE2LTExLTExVDExOjExOjExWicsXHJcbiAgICAgICAgICAgICAgICByb29tOidzdHVmZicsXHJcbiAgICAgICAgICAgICAgICByb29tSW5mbzp7XHJcbiAgICAgICAgICAgICAgICAgICAgcm9vbUlkOidyb29tMScsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZToncm9vbSAxJyxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbWU6JydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzcGVha2VyczpbXSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZGVzYyAxJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uU2hvcnQ6J3Nob3J0IGRlc2MgMScsXHJcbiAgICAgICAgICAgICAgICBjYWxlbmRhckV2ZW50SWQ6JycsXHJcbiAgICAgICAgICAgICAgICBpc0JyZWFrOmZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBzZXNzaW9uQXJyYXkubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLl90ZW1wU2Vzc2lvbnMucHVzaChzZXNzaW9uQXJyYXlbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==