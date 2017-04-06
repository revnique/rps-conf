"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var session_view_model_1 = require("../session-page/session-view-model");
var MainViewModel = (function (_super) {
    __extends(MainViewModel, _super);
    function MainViewModel() {
        var _this = _super.call(this) || this;
        _this._tempSessions = new Array();
        _this._allSessions = new Array();
        return _this;
    }
    Object.defineProperty(MainViewModel.prototype, "sessions", {
        get: function () {
            return this._allSessions;
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
            },
            {
                id: '2',
                title: 'session 2',
                start: '2016-11-11T11:11:11Z',
                end: '2016-11-11T11:11:11Z',
                room: 'stuff 2',
                roomInfo: {
                    roomId: 'room2',
                    name: 'room 2',
                    url: '',
                    theme: ''
                },
                speakers: [],
                description: 'desc 2',
                descriptionShort: 'short desc 2',
                calendarEventId: '',
                isBreak: false
            }
        ];
        for (var i = 0; i < sessionArray.length; i++) {
            //this._tempSessions.push(sessionArray[i]);
            this._allSessions.push(new session_view_model_1.SessionViewModel(sessionArray[i]));
        }
    };
    return MainViewModel;
}(observable_1.Observable));
exports.MainViewModel = MainViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTJDO0FBRTNDLHlFQUFvRTtBQUVwRTtJQUFtQyxpQ0FBVTtJQUl6QztRQUFBLFlBQ0ksaUJBQU8sU0FDVjtRQUxPLG1CQUFhLEdBQW1CLElBQUksS0FBSyxFQUFXLENBQUM7UUFDckQsa0JBQVksR0FBNEIsSUFBSSxLQUFLLEVBQW9CLENBQUM7O0lBSTlFLENBQUM7SUFDRCxzQkFBSSxtQ0FBUTthQUFaO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFDTSw0QkFBSSxHQUFYO1FBQ0ksSUFBSSxZQUFZLEdBQW1CO1lBQy9CO2dCQUNJLEVBQUUsRUFBQyxHQUFHO2dCQUNOLEtBQUssRUFBQyxXQUFXO2dCQUNqQixLQUFLLEVBQUMsc0JBQXNCO2dCQUM1QixHQUFHLEVBQUMsc0JBQXNCO2dCQUMxQixJQUFJLEVBQUMsT0FBTztnQkFDWixRQUFRLEVBQUM7b0JBQ0wsTUFBTSxFQUFDLE9BQU87b0JBQ2QsSUFBSSxFQUFDLFFBQVE7b0JBQ2IsR0FBRyxFQUFDLEVBQUU7b0JBQ04sS0FBSyxFQUFDLEVBQUU7aUJBQ1g7Z0JBQ0QsUUFBUSxFQUFDLEVBQUU7Z0JBQ1gsV0FBVyxFQUFFLFFBQVE7Z0JBQ3JCLGdCQUFnQixFQUFDLGNBQWM7Z0JBQy9CLGVBQWUsRUFBQyxFQUFFO2dCQUNsQixPQUFPLEVBQUMsS0FBSzthQUNoQjtZQUNEO2dCQUNJLEVBQUUsRUFBQyxHQUFHO2dCQUNOLEtBQUssRUFBQyxXQUFXO2dCQUNqQixLQUFLLEVBQUMsc0JBQXNCO2dCQUM1QixHQUFHLEVBQUMsc0JBQXNCO2dCQUMxQixJQUFJLEVBQUMsU0FBUztnQkFDZCxRQUFRLEVBQUM7b0JBQ0wsTUFBTSxFQUFDLE9BQU87b0JBQ2QsSUFBSSxFQUFDLFFBQVE7b0JBQ2IsR0FBRyxFQUFDLEVBQUU7b0JBQ04sS0FBSyxFQUFDLEVBQUU7aUJBQ1g7Z0JBQ0QsUUFBUSxFQUFDLEVBQUU7Z0JBQ1gsV0FBVyxFQUFFLFFBQVE7Z0JBQ3JCLGdCQUFnQixFQUFDLGNBQWM7Z0JBQy9CLGVBQWUsRUFBQyxFQUFFO2dCQUNsQixPQUFPLEVBQUMsS0FBSzthQUNoQjtTQUNKLENBQUM7UUFDRixHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztZQUN6QywyQ0FBMkM7WUFFM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxxQ0FBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLENBQUM7SUFDTCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBdkRELENBQW1DLHVCQUFVLEdBdUQ1QztBQXZEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcclxuaW1wb3J0IHtTZXNzaW9ufSBmcm9tICcuLi8uLi9zaGFyZWQvaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7U2Vzc2lvblZpZXdNb2RlbH0gZnJvbSAnLi4vc2Vzc2lvbi1wYWdlL3Nlc3Npb24tdmlldy1tb2RlbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFpblZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGV7XHJcbiAgICBwcml2YXRlIF90ZW1wU2Vzc2lvbnM6IEFycmF5PFNlc3Npb24+ID0gbmV3IEFycmF5PFNlc3Npb24+KCk7XHJcbiAgICBwcml2YXRlIF9hbGxTZXNzaW9uczogQXJyYXk8U2Vzc2lvblZpZXdNb2RlbD4gPSBuZXcgQXJyYXk8U2Vzc2lvblZpZXdNb2RlbD4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICBnZXQgc2Vzc2lvbnMoKTpBcnJheTxTZXNzaW9uVmlld01vZGVsPntcclxuICAgICAgICByZXR1cm4gdGhpcy5fYWxsU2Vzc2lvbnM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaW5pdCgpe1xyXG4gICAgICAgIHZhciBzZXNzaW9uQXJyYXk6IEFycmF5PFNlc3Npb24+ID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDonMScsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTonc2Vzc2lvbiAxJyxcclxuICAgICAgICAgICAgICAgIHN0YXJ0OicyMDE2LTExLTExVDExOjExOjExWicsXHJcbiAgICAgICAgICAgICAgICBlbmQ6JzIwMTYtMTEtMTFUMTE6MTE6MTFaJyxcclxuICAgICAgICAgICAgICAgIHJvb206J3N0dWZmJyxcclxuICAgICAgICAgICAgICAgIHJvb21JbmZvOntcclxuICAgICAgICAgICAgICAgICAgICByb29tSWQ6J3Jvb20xJyxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOidyb29tIDEnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDonJyxcclxuICAgICAgICAgICAgICAgICAgICB0aGVtZTonJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNwZWFrZXJzOltdLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdkZXNjIDEnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25TaG9ydDonc2hvcnQgZGVzYyAxJyxcclxuICAgICAgICAgICAgICAgIGNhbGVuZGFyRXZlbnRJZDonJyxcclxuICAgICAgICAgICAgICAgIGlzQnJlYWs6ZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6JzInLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6J3Nlc3Npb24gMicsXHJcbiAgICAgICAgICAgICAgICBzdGFydDonMjAxNi0xMS0xMVQxMToxMToxMVonLFxyXG4gICAgICAgICAgICAgICAgZW5kOicyMDE2LTExLTExVDExOjExOjExWicsXHJcbiAgICAgICAgICAgICAgICByb29tOidzdHVmZiAyJyxcclxuICAgICAgICAgICAgICAgIHJvb21JbmZvOntcclxuICAgICAgICAgICAgICAgICAgICByb29tSWQ6J3Jvb20yJyxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOidyb29tIDInLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDonJyxcclxuICAgICAgICAgICAgICAgICAgICB0aGVtZTonJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNwZWFrZXJzOltdLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdkZXNjIDInLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25TaG9ydDonc2hvcnQgZGVzYyAyJyxcclxuICAgICAgICAgICAgICAgIGNhbGVuZGFyRXZlbnRJZDonJyxcclxuICAgICAgICAgICAgICAgIGlzQnJlYWs6ZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHNlc3Npb25BcnJheS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIC8vdGhpcy5fdGVtcFNlc3Npb25zLnB1c2goc2Vzc2lvbkFycmF5W2ldKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuX2FsbFNlc3Npb25zLnB1c2gobmV3IFNlc3Npb25WaWV3TW9kZWwoc2Vzc2lvbkFycmF5W2ldKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19