"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var SessionViewModel = (function (_super) {
    __extends(SessionViewModel, _super);
    function SessionViewModel(source) {
        var _this = _super.call(this) || this;
        if (source) {
            _this._session = source;
            _this._startDt = _this.fixDate(new Date(source.start));
            _this._endDt = _this.fixDate(new Date(source.end));
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
    Object.defineProperty(SessionViewModel.prototype, "startDt", {
        get: function () {
            return this._startDt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "endDt", {
        get: function () {
            return this._endDt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionViewModel.prototype, "range", {
        get: function () {
            var startMinutes = this.startDt.getMinutes() + '';
            var endMinutes = this.endDt.getMinutes() + '';
            var startAM = this.startDt.getHours() < 12 ? 'am' : 'pm';
            var endAM = this.endDt.getHours() < 12 ? 'am' : 'pm';
            var startHours = (this.startDt.getHours() <= 12 ? this.startDt.getHours() : this.startDt.getHours() - 12) + '';
            var endHours = (this.endDt.getHours() <= 12 ? this.endDt.getHours() : this.endDt.getHours() - 12) + '';
            return (startHours.length === 1 ? '0' + startHours : startHours) + ':' + (startMinutes.length === 1 ? '0' + startMinutes : startMinutes) + startAM +
                ' - ' + (endHours.length === 1 ? '0' + endHours : endHours) + ':' + (endMinutes.length === 1 ? '0' + endMinutes : endMinutes) + endAM;
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
    SessionViewModel.prototype.toggleFavorite = function () {
        this.favorite = !this.favorite;
    };
    SessionViewModel.prototype.fixDate = function (date) {
        return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
    };
    return SessionViewModel;
}(observable_1.Observable));
exports.SessionViewModel = SessionViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2Vzc2lvbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTJDO0FBRzNDO0lBQXNDLG9DQUFVO0lBTTVDLDBCQUFZLE1BQWdCO1FBQTVCLFlBQ0ksaUJBQU8sU0FRVjtRQUxHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDVCxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztZQUN2QixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDckQsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JELENBQUM7O0lBQ0wsQ0FBQztJQUVELHNCQUFJLGdDQUFFO2FBQU47WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxtQ0FBSzthQUFUO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksc0NBQVE7YUFBWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLGtDQUFJO2FBQVI7WUFDSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUM7Z0JBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUM5QixDQUFDO1lBQ0QsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEs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LFdBQVcsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUNsSixDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDLEFBcEdELENBQXNDLHVCQUFVLEdBb0cvQztBQXBHWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGV9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7U2Vzc2lvbiwgU3BlYWtlciwgUm9vbUluZm8gfSBmcm9tICcuLi8uLi9zaGFyZWQvaW50ZXJmYWNlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2Vzc2lvblZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGV7XHJcbiAgICBwcml2YXRlIF9zZXNzaW9uOiBTZXNzaW9uO1xyXG4gICAgcHJpdmF0ZSBfZmF2b3JpdGU6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9zdGFydER0OiBEYXRlO1xyXG4gICAgcHJpdmF0ZSBfZW5kRHQ6IERhdGU7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc291cmNlPzogU2Vzc2lvbil7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICBcclxuICAgICAgICBpZiAoc291cmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nlc3Npb24gPSBzb3VyY2U7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0RHQgPSB0aGlzLmZpeERhdGUobmV3IERhdGUoc291cmNlLnN0YXJ0KSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2VuZER0ID0gdGhpcy5maXhEYXRlKG5ldyBEYXRlKHNvdXJjZS5lbmQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlkKCk6IHN0cmluZ3tcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbi5pZDtcclxuICAgIH1cclxuICAgIGdldCB0aXRsZSgpOiBzdHJpbmd7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nlc3Npb24udGl0bGU7XHJcbiAgICB9XHJcbiAgICBnZXQgcm9vbUluZm8oKTogUm9vbUluZm97XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nlc3Npb24ucm9vbUluZm87XHJcbiAgICB9XHJcbiAgICBnZXQgcm9vbSgpOiBzdHJpbmd7XHJcbiAgICAgICAgaWYodGhpcy5fc2Vzc2lvbi5yb29tKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Nlc3Npb24ucm9vbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5fc2Vzc2lvbi5yb29tSW5mbyl7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zZXNzaW9uLnJvb21JbmZvLm5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgZ2V0IHN0YXJ0KCk6IHN0cmluZ3tcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbi5zdGFydDtcclxuICAgIH1cclxuICAgIGdldCBlbmQoKTogc3RyaW5ne1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXNzaW9uLmVuZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RhcnREdCgpOiBEYXRlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhcnREdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZW5kRHQoKTogRGF0ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VuZER0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgcmFuZ2UoKTogc3RyaW5nIHtcclxuICAgICAgICB2YXIgc3RhcnRNaW51dGVzID0gdGhpcy5zdGFydER0LmdldE1pbnV0ZXMoKSArICcnO1xyXG4gICAgICAgIHZhciBlbmRNaW51dGVzID0gdGhpcy5lbmREdC5nZXRNaW51dGVzKCkgKyAnJztcclxuICAgICAgICB2YXIgc3RhcnRBTSA9IHRoaXMuc3RhcnREdC5nZXRIb3VycygpIDwgMTIgPyAnYW0nIDogJ3BtJztcclxuICAgICAgICB2YXIgZW5kQU0gPSB0aGlzLmVuZER0LmdldEhvdXJzKCkgPCAxMiA/ICdhbScgOiAncG0nO1xyXG5cclxuICAgICAgICB2YXIgc3RhcnRIb3VycyA9ICh0aGlzLnN0YXJ0RHQuZ2V0SG91cnMoKSA8PSAxMiA/IHRoaXMuc3RhcnREdC5nZXRIb3VycygpIDogdGhpcy5zdGFydER0LmdldEhvdXJzKCkgLSAxMikgKyAnJztcclxuICAgICAgICB2YXIgZW5kSG91cnMgPSAodGhpcy5lbmREdC5nZXRIb3VycygpIDw9IDEyID8gdGhpcy5lbmREdC5nZXRIb3VycygpIDogdGhpcy5lbmREdC5nZXRIb3VycygpIC0gMTIpICsgJyc7XHJcblxyXG4gICAgICAgIHJldHVybiAoc3RhcnRIb3Vycy5sZW5ndGggPT09IDEgPyAnMCcgKyBzdGFydEhvdXJzIDogc3RhcnRIb3VycykgKyAnOicgKyAoc3RhcnRNaW51dGVzLmxlbmd0aCA9PT0gMSA/ICcwJyArIHN0YXJ0TWludXRlcyA6IHN0YXJ0TWludXRlcykgKyBzdGFydEFNICtcclxuICAgICAgICAgICAgJyAtICcgKyAoZW5kSG91cnMubGVuZ3RoID09PSAxID8gJzAnICsgZW5kSG91cnMgOiBlbmRIb3VycykgKyAnOicgKyAoZW5kTWludXRlcy5sZW5ndGggPT09IDEgPyAnMCcgKyBlbmRNaW51dGVzIDogZW5kTWludXRlcykgKyBlbmRBTTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuXHJcbiAgICBnZXQgc3BlYWtlcnMoKTogQXJyYXk8U3BlYWtlcj57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nlc3Npb24uc3BlYWtlcnM7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNCcmVhaygpOiBib29sZWFue1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXNzaW9uLmlzQnJlYWs7XHJcbiAgICB9XHJcbiAgICBnZXQgZGVzY3JpcHRpb24oKTogc3RyaW5ne1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXNzaW9uLmRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG4gICAgZ2V0IGRlc2NyaXB0aW9uU2hvcnQoKTogc3RyaW5ne1xyXG4gICAgICAgIGlmKHRoaXMuZGVzY3JpcHRpb24ubGVuZ3RoID4gMTYwKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb24uc3Vic3RyKDAsMTU3KSArICcuLi4nO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgY2FsYW5kYXJFdmVudElkKCk6IHN0cmluZ3tcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbi5jYWxlbmRhckV2ZW50SWQ7XHJcbiAgICB9XHJcbiAgICBnZXQgZmF2b3JpdGUoKTogYm9vbGVhbntcclxuICAgICAgICByZXR1cm4gdGhpcy5fZmF2b3JpdGU7XHJcbiAgICB9XHJcbiAgICBzZXQgZmF2b3JpdGUodmFsdWU6Ym9vbGVhbil7XHJcbiAgICAgICAgaWYodGhpcy5fZmF2b3JpdGUgIT09IHZhbHVlICYmICF0aGlzLl9zZXNzaW9uLmlzQnJlYWspe1xyXG4gICAgICAgICAgICB0aGlzLl9mYXZvcml0ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh7b2JqZWN0OnRoaXMsZXZlbnROYW1lOk9ic2VydmFibGUucHJvcGVydHlDaGFuZ2VFdmVudCwgcHJvcGVydHlOYW1lOiAnZmF2b3JpdGUnLCB2YWx1ZTp0aGlzLl9mYXZvcml0ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHRvZ2dsZUZhdm9yaXRlKCl7XHJcbiAgICAgICAgdGhpcy5mYXZvcml0ZSA9ICF0aGlzLmZhdm9yaXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIGZpeERhdGUoZGF0ZTogRGF0ZSk6IERhdGUge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldFVUQ0Z1bGxZZWFyKCksIGRhdGUuZ2V0VVRDTW9udGgoKSwgZGF0ZS5nZXRVVENEYXRlKCksIGRhdGUuZ2V0VVRDSG91cnMoKSwgZGF0ZS5nZXRVVENNaW51dGVzKCksIGRhdGUuZ2V0VVRDU2Vjb25kcygpKTtcclxuICAgIH1cclxufSJdfQ==