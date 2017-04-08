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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2Vzc2lvbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTJDO0FBRzNDO0lBQXNDLG9DQUFVO0lBTTVDLDBCQUFZLE1BQWdCO1FBQTVCLFlBQ0ksaUJBQU8sU0FRVjtRQUxHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDVCxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztZQUN2QixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDckQsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JELENBQUM7O0lBQ0wsQ0FBQztJQUVELHNCQUFJLGdDQUFFO2FBQU47WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxtQ0FBSzthQUFUO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksc0NBQVE7YUFBWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLGtDQUFJO2FBQVI7WUFDSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUM7Z0JBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUM5QixDQUFDO1lBQ0QsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEs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LFdBQVcsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUNsSixDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDLEFBcEdELENBQXNDLHVCQUFVLEdBb0cvQztBQXBHWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGV9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQge1Nlc3Npb24sIFNwZWFrZXIsIFJvb21JbmZvIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgY2xhc3MgU2Vzc2lvblZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGV7XG4gICAgcHJpdmF0ZSBfc2Vzc2lvbjogU2Vzc2lvbjtcbiAgICBwcml2YXRlIF9mYXZvcml0ZTogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9zdGFydER0OiBEYXRlO1xuICAgIHByaXZhdGUgX2VuZER0OiBEYXRlO1xuXG4gICAgY29uc3RydWN0b3Ioc291cmNlPzogU2Vzc2lvbil7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICBcbiAgICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICAgICAgdGhpcy5fc2Vzc2lvbiA9IHNvdXJjZTtcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0RHQgPSB0aGlzLmZpeERhdGUobmV3IERhdGUoc291cmNlLnN0YXJ0KSk7XG4gICAgICAgICAgICB0aGlzLl9lbmREdCA9IHRoaXMuZml4RGF0ZShuZXcgRGF0ZShzb3VyY2UuZW5kKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgaWQoKTogc3RyaW5ne1xuICAgICAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbi5pZDtcbiAgICB9XG4gICAgZ2V0IHRpdGxlKCk6IHN0cmluZ3tcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nlc3Npb24udGl0bGU7XG4gICAgfVxuICAgIGdldCByb29tSW5mbygpOiBSb29tSW5mb3tcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nlc3Npb24ucm9vbUluZm87XG4gICAgfVxuICAgIGdldCByb29tKCk6IHN0cmluZ3tcbiAgICAgICAgaWYodGhpcy5fc2Vzc2lvbi5yb29tKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zZXNzaW9uLnJvb207XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5fc2Vzc2lvbi5yb29tSW5mbyl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbi5yb29tSW5mby5uYW1lO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBnZXQgc3RhcnQoKTogc3RyaW5ne1xuICAgICAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbi5zdGFydDtcbiAgICB9XG4gICAgZ2V0IGVuZCgpOiBzdHJpbmd7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXNzaW9uLmVuZDtcbiAgICB9XG5cbiAgICBnZXQgc3RhcnREdCgpOiBEYXRlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXJ0RHQ7XG4gICAgfVxuXG4gICAgZ2V0IGVuZER0KCk6IERhdGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fZW5kRHQ7XG4gICAgfVxuICAgIFxuICAgIGdldCByYW5nZSgpOiBzdHJpbmcge1xuICAgICAgICB2YXIgc3RhcnRNaW51dGVzID0gdGhpcy5zdGFydER0LmdldE1pbnV0ZXMoKSArICcnO1xuICAgICAgICB2YXIgZW5kTWludXRlcyA9IHRoaXMuZW5kRHQuZ2V0TWludXRlcygpICsgJyc7XG4gICAgICAgIHZhciBzdGFydEFNID0gdGhpcy5zdGFydER0LmdldEhvdXJzKCkgPCAxMiA/ICdhbScgOiAncG0nO1xuICAgICAgICB2YXIgZW5kQU0gPSB0aGlzLmVuZER0LmdldEhvdXJzKCkgPCAxMiA/ICdhbScgOiAncG0nO1xuXG4gICAgICAgIHZhciBzdGFydEhvdXJzID0gKHRoaXMuc3RhcnREdC5nZXRIb3VycygpIDw9IDEyID8gdGhpcy5zdGFydER0LmdldEhvdXJzKCkgOiB0aGlzLnN0YXJ0RHQuZ2V0SG91cnMoKSAtIDEyKSArICcnO1xuICAgICAgICB2YXIgZW5kSG91cnMgPSAodGhpcy5lbmREdC5nZXRIb3VycygpIDw9IDEyID8gdGhpcy5lbmREdC5nZXRIb3VycygpIDogdGhpcy5lbmREdC5nZXRIb3VycygpIC0gMTIpICsgJyc7XG5cbiAgICAgICAgcmV0dXJuIChzdGFydEhvdXJzLmxlbmd0aCA9PT0gMSA/ICcwJyArIHN0YXJ0SG91cnMgOiBzdGFydEhvdXJzKSArICc6JyArIChzdGFydE1pbnV0ZXMubGVuZ3RoID09PSAxID8gJzAnICsgc3RhcnRNaW51dGVzIDogc3RhcnRNaW51dGVzKSArIHN0YXJ0QU0gK1xuICAgICAgICAgICAgJyAtICcgKyAoZW5kSG91cnMubGVuZ3RoID09PSAxID8gJzAnICsgZW5kSG91cnMgOiBlbmRIb3VycykgKyAnOicgKyAoZW5kTWludXRlcy5sZW5ndGggPT09IDEgPyAnMCcgKyBlbmRNaW51dGVzIDogZW5kTWludXRlcykgKyBlbmRBTTtcbiAgICB9XG4gICAgXG5cblxuICAgIGdldCBzcGVha2VycygpOiBBcnJheTxTcGVha2VyPntcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nlc3Npb24uc3BlYWtlcnM7XG4gICAgfVxuICAgIGdldCBpc0JyZWFrKCk6IGJvb2xlYW57XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXNzaW9uLmlzQnJlYWs7XG4gICAgfVxuICAgIGdldCBkZXNjcmlwdGlvbigpOiBzdHJpbmd7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXNzaW9uLmRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBnZXQgZGVzY3JpcHRpb25TaG9ydCgpOiBzdHJpbmd7XG4gICAgICAgIGlmKHRoaXMuZGVzY3JpcHRpb24ubGVuZ3RoID4gMTYwKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uLnN1YnN0cigwLDE1NykgKyAnLi4uJztcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgY2FsYW5kYXJFdmVudElkKCk6IHN0cmluZ3tcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nlc3Npb24uY2FsZW5kYXJFdmVudElkO1xuICAgIH1cbiAgICBnZXQgZmF2b3JpdGUoKTogYm9vbGVhbntcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Zhdm9yaXRlO1xuICAgIH1cbiAgICBzZXQgZmF2b3JpdGUodmFsdWU6Ym9vbGVhbil7XG4gICAgICAgIGlmKHRoaXMuX2Zhdm9yaXRlICE9PSB2YWx1ZSAmJiAhdGhpcy5fc2Vzc2lvbi5pc0JyZWFrKXtcbiAgICAgICAgICAgIHRoaXMuX2Zhdm9yaXRlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh7b2JqZWN0OnRoaXMsZXZlbnROYW1lOk9ic2VydmFibGUucHJvcGVydHlDaGFuZ2VFdmVudCwgcHJvcGVydHlOYW1lOiAnZmF2b3JpdGUnLCB2YWx1ZTp0aGlzLl9mYXZvcml0ZX0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHRvZ2dsZUZhdm9yaXRlKCl7XG4gICAgICAgIHRoaXMuZmF2b3JpdGUgPSAhdGhpcy5mYXZvcml0ZTtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBmaXhEYXRlKGRhdGU6IERhdGUpOiBEYXRlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0VVRDRnVsbFllYXIoKSwgZGF0ZS5nZXRVVENNb250aCgpLCBkYXRlLmdldFVUQ0RhdGUoKSwgZGF0ZS5nZXRVVENIb3VycygpLCBkYXRlLmdldFVUQ01pbnV0ZXMoKSwgZGF0ZS5nZXRVVENTZWNvbmRzKCkpO1xuICAgIH1cbn0iXX0=