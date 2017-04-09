"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fakeDataServiceModule = require("./fake-data-service");
var SessionsService = (function () {
    function SessionsService() {
        this._useHttpService = false;
    }
    SessionsService.prototype.loadSessions = function () {
        if (this._useHttpService) {
            return this.loadSessionsViaHttp();
        }
        else {
            return this.loadSessionsViaFaker();
        }
    };
    SessionsService.prototype.loadSessionsViaHttp = function () {
        return new Promise(function () { });
        //  var reqParams = {
        //     url: constantsModule.AZURE_URL + constantsModule.AZURE_TABLE_PATH + constantsModule.AZURE_TABLE_NAME + '?$orderby=start',
        //     method: 'GET',
        //     headers: constantsModule.AZURE_VERSION_HEADER
        // };
        // return httpModule.getJSON<T>(reqParams);
    };
    SessionsService.prototype.loadSessionsViaFaker = function () {
        return new Promise(function (resolve, reject) {
            var speakers = fakeDataServiceModule.generateSpeakers();
            var roomInfos = fakeDataServiceModule.generateRoomInfos();
            var sessions = fakeDataServiceModule.generateSessions(speakers, roomInfos);
            resolve(sessions);
        });
    };
    return SessionsService;
}());
exports.SessionsService = SessionsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbnMtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlc3Npb25zLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwyREFBNkQ7QUFFN0Q7SUFBQTtRQUVZLG9CQUFlLEdBQVksS0FBSyxDQUFDO0lBNkI3QyxDQUFDO0lBM0JVLHNDQUFZLEdBQW5CO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBSyxDQUFDO1FBQ3pDLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUssQ0FBQztRQUMxQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLDZDQUFtQixHQUEzQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBSSxjQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzlCLHFCQUFxQjtRQUNyQixnSUFBZ0k7UUFDaEkscUJBQXFCO1FBQ3JCLG9EQUFvRDtRQUNwRCxLQUFLO1FBQ0wsMkNBQTJDO0lBQy9DLENBQUM7SUFFTyw4Q0FBb0IsR0FBNUI7UUFDSSxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUksVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNsQyxJQUFJLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3hELElBQUksU0FBUyxHQUFHLHFCQUFxQixDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDMUQsSUFBSSxRQUFRLEdBQVEscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ2hGLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUEvQkQsSUErQkM7QUEvQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCAqIGFzIGZha2VEYXRhU2VydmljZU1vZHVsZSBmcm9tICcuL2Zha2UtZGF0YS1zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIFNlc3Npb25zU2VydmljZSB7XG4gICAgXG4gICAgcHJpdmF0ZSBfdXNlSHR0cFNlcnZpY2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBcbiAgICBwdWJsaWMgbG9hZFNlc3Npb25zPFQ+KCkgOiBQcm9taXNlPFQ+IHtcbiAgICAgICAgaWYgKHRoaXMuX3VzZUh0dHBTZXJ2aWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkU2Vzc2lvbnNWaWFIdHRwPFQ+KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkU2Vzc2lvbnNWaWFGYWtlcjxUPigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgbG9hZFNlc3Npb25zVmlhSHR0cDxUPigpIDogUHJvbWlzZTxUPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxUPigoKT0+e30pO1xuICAgICAgICAvLyAgdmFyIHJlcVBhcmFtcyA9IHtcbiAgICAgICAgLy8gICAgIHVybDogY29uc3RhbnRzTW9kdWxlLkFaVVJFX1VSTCArIGNvbnN0YW50c01vZHVsZS5BWlVSRV9UQUJMRV9QQVRIICsgY29uc3RhbnRzTW9kdWxlLkFaVVJFX1RBQkxFX05BTUUgKyAnPyRvcmRlcmJ5PXN0YXJ0JyxcbiAgICAgICAgLy8gICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIC8vICAgICBoZWFkZXJzOiBjb25zdGFudHNNb2R1bGUuQVpVUkVfVkVSU0lPTl9IRUFERVJcbiAgICAgICAgLy8gfTtcbiAgICAgICAgLy8gcmV0dXJuIGh0dHBNb2R1bGUuZ2V0SlNPTjxUPihyZXFQYXJhbXMpO1xuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIGxvYWRTZXNzaW9uc1ZpYUZha2VyPFQ+KCkgOiBQcm9taXNlPFQ+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICBsZXQgc3BlYWtlcnMgPSBmYWtlRGF0YVNlcnZpY2VNb2R1bGUuZ2VuZXJhdGVTcGVha2VycygpO1xuICAgICAgICAgICAgbGV0IHJvb21JbmZvcyA9IGZha2VEYXRhU2VydmljZU1vZHVsZS5nZW5lcmF0ZVJvb21JbmZvcygpO1xuICAgICAgICAgICAgbGV0IHNlc3Npb25zID0gPGFueT5mYWtlRGF0YVNlcnZpY2VNb2R1bGUuZ2VuZXJhdGVTZXNzaW9ucyhzcGVha2Vycywgcm9vbUluZm9zKTtcbiAgICAgICAgICAgIHJlc29sdmUoc2Vzc2lvbnMpO1xuICAgICAgICB9KTtcbiAgICB9XG59Il19