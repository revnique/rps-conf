"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var SessionViewModel = (function (_super) {
    __extends(SessionViewModel, _super);
    function SessionViewModel(source) {
        var _this = _super.call(this) || this;
        if (source) {
            _this._session = source;
        }
        return _this;
    }
    Object.defineProperty(SessionViewModel.prototype, "id", {
        get: function () {
            return this._session.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "title", {
        get: function () {
            return this._session.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "roomInfo", {
        get: function () {
            return this._session.roomInfo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "room", {
        get: function () {
            if (this._session.room) {
                return this._session.room;
            }
            if (this._session.roomInfo) {
                return this._session.roomInfo.name;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "start", {
        get: function () {
            return this._session.start;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "end", {
        get: function () {
            return this._session.end;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "speakers", {
        get: function () {
            return this._session.speakers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "isBreak", {
        get: function () {
            return this._session.isBreak;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "description", {
        get: function () {
            return this._session.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "descriptionShort", {
        get: function () {
            if (this.description.length > 160) {
                return this.description.substr(0, 157) + '...';
            }
            else {
                return this.description;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "calandarEventId", {
        get: function () {
            return this._session.calendarEventId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "favorite", {
        get: function () {
            return this._favorite;
        },
        set: function (value) {
            if (this._favorite !== value && !this._session.isBreak) {
                this._favorite = value;
                this.notify({ object: this, eventName: observable_1.Observable.propertyChangeEvent, propertyName: 'favorite', value: this._favorite });
            }
        },
        enumerable: true,
        configurable: true
    });
    SessionViewModel.prototype.toggleFavourite = function () {
        this.favorite = !this.favorite;
    };
    return SessionViewModel;
}(observable_1.Observable));
exports.SessionViewModel = SessionViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2Vzc2lvbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTJDO0FBRzNDO0lBQXNDLG9DQUFVO0lBSTVDLDBCQUFZLE1BQWdCO1FBQTVCLFlBQ0ksaUJBQU8sU0FLVjtRQUhHLEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUM7WUFDUCxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUMzQixDQUFDOztJQUNMLENBQUM7SUFFRCxzQkFBSSxnQ0FBRTthQUFOO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksbUNBQUs7YUFBVDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQUNELHNCQUFJLHNDQUFRO2FBQVo7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxrQ0FBSTthQUFSO1lBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDO2dCQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDOUIsQ0FBQztZQUNELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUEsQ0FBQztnQkFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUN2QyxDQUFDO1lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDOzs7T0FBQTtJQUNELHNCQUFJLG1DQUFLO2FBQVQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxpQ0FBRzthQUFQO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBSUQsc0JBQUksc0NBQVE7YUFBWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLHFDQUFPO2FBQVg7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSx5Q0FBVzthQUFmO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQ3JDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksOENBQWdCO2FBQXBCO1lBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUEsQ0FBQztnQkFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDbEQsQ0FBQztZQUFBLElBQUksQ0FBQSxDQUFDO2dCQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQzVCLENBQUM7UUFDTCxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLDZDQUFlO2FBQW5CO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDO1FBQ3pDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksc0NBQVE7YUFBWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFDRCxVQUFhLEtBQWE7WUFDdEIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsdUJBQVUsQ0FBQyxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBQyxJQUFJLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQTtZQUN2SCxDQUFDO1FBQ0wsQ0FBQzs7O09BTkE7SUFPTSwwQ0FBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ25DLENBQUM7SUFFTCx1QkFBQztBQUFELENBQUMsQUF2RUQsQ0FBc0MsdUJBQVUsR0F1RS9DO0FBdkVZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcclxuaW1wb3J0IHtTZXNzaW9uLCBTcGVha2VyLCBSb29tSW5mbyB9IGZyb20gJy4uLy4uL3NoYXJlZC9pbnRlcmZhY2VzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXNzaW9uVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZXtcclxuICAgIHByaXZhdGUgX3Nlc3Npb246IFNlc3Npb247XHJcbiAgICBwcml2YXRlIF9mYXZvcml0ZTogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihzb3VyY2U/OiBTZXNzaW9uKXtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICBpZihzb3VyY2Upe1xyXG4gICAgICAgICAgICB0aGlzLl9zZXNzaW9uID0gc291cmNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgaWQoKTogc3RyaW5ne1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXNzaW9uLmlkO1xyXG4gICAgfVxyXG4gICAgZ2V0IHRpdGxlKCk6IHN0cmluZ3tcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbi50aXRsZTtcclxuICAgIH1cclxuICAgIGdldCByb29tSW5mbygpOiBSb29tSW5mb3tcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbi5yb29tSW5mbztcclxuICAgIH1cclxuICAgIGdldCByb29tKCk6IHN0cmluZ3tcclxuICAgICAgICBpZih0aGlzLl9zZXNzaW9uLnJvb20pe1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbi5yb29tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLl9zZXNzaW9uLnJvb21JbmZvKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Nlc3Npb24ucm9vbUluZm8ubmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBnZXQgc3RhcnQoKTogc3RyaW5ne1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXNzaW9uLnN0YXJ0O1xyXG4gICAgfVxyXG4gICAgZ2V0IGVuZCgpOiBzdHJpbmd7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nlc3Npb24uZW5kO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgZ2V0IHNwZWFrZXJzKCk6IEFycmF5PFNwZWFrZXI+e1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXNzaW9uLnNwZWFrZXJzO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzQnJlYWsoKTogYm9vbGVhbntcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbi5pc0JyZWFrO1xyXG4gICAgfVxyXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCk6IHN0cmluZ3tcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbi5kZXNjcmlwdGlvbjtcclxuICAgIH1cclxuICAgIGdldCBkZXNjcmlwdGlvblNob3J0KCk6IHN0cmluZ3tcclxuICAgICAgICBpZih0aGlzLmRlc2NyaXB0aW9uLmxlbmd0aCA+IDE2MCl7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uLnN1YnN0cigwLDE1NykgKyAnLi4uJztcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IGNhbGFuZGFyRXZlbnRJZCgpOiBzdHJpbmd7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nlc3Npb24uY2FsZW5kYXJFdmVudElkO1xyXG4gICAgfVxyXG4gICAgZ2V0IGZhdm9yaXRlKCk6IGJvb2xlYW57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Zhdm9yaXRlO1xyXG4gICAgfVxyXG4gICAgc2V0IGZhdm9yaXRlKHZhbHVlOmJvb2xlYW4pe1xyXG4gICAgICAgIGlmKHRoaXMuX2Zhdm9yaXRlICE9PSB2YWx1ZSAmJiAhdGhpcy5fc2Vzc2lvbi5pc0JyZWFrKXtcclxuICAgICAgICAgICAgdGhpcy5fZmF2b3JpdGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZnkoe29iamVjdDp0aGlzLGV2ZW50TmFtZTpPYnNlcnZhYmxlLnByb3BlcnR5Q2hhbmdlRXZlbnQsIHByb3BlcnR5TmFtZTogJ2Zhdm9yaXRlJywgdmFsdWU6dGhpcy5fZmF2b3JpdGV9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyB0b2dnbGVGYXZvdXJpdGUoKXtcclxuICAgICAgICB0aGlzLmZhdm9yaXRlID0gIXRoaXMuZmF2b3JpdGU7XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ==