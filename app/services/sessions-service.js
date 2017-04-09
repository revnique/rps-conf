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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbnMtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlc3Npb25zLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwyREFBNkQ7QUFFN0Q7SUFBQTtRQUVZLG9CQUFlLEdBQVksS0FBSyxDQUFDO0lBNkI3QyxDQUFDO0lBM0JVLHNDQUFZLEdBQW5CO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBSyxDQUFDO1FBQ3pDLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUssQ0FBQztRQUMxQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLDZDQUFtQixHQUEzQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBSSxjQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzlCLHFCQUFxQjtRQUNyQixnSUFBZ0k7UUFDaEkscUJBQXFCO1FBQ3JCLG9EQUFvRDtRQUNwRCxLQUFLO1FBQ0wsMkNBQTJDO0lBQy9DLENBQUM7SUFFTyw4Q0FBb0IsR0FBNUI7UUFDSSxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUksVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNsQyxJQUFJLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3hELElBQUksU0FBUyxHQUFHLHFCQUFxQixDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDMUQsSUFBSSxRQUFRLEdBQVEscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ2hGLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUEvQkQsSUErQkM7QUEvQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0ICogYXMgZmFrZURhdGFTZXJ2aWNlTW9kdWxlIGZyb20gJy4vZmFrZS1kYXRhLXNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlc3Npb25zU2VydmljZSB7XHJcbiAgICBcclxuICAgIHByaXZhdGUgX3VzZUh0dHBTZXJ2aWNlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBcclxuICAgIHB1YmxpYyBsb2FkU2Vzc2lvbnM8VD4oKSA6IFByb21pc2U8VD4ge1xyXG4gICAgICAgIGlmICh0aGlzLl91c2VIdHRwU2VydmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkU2Vzc2lvbnNWaWFIdHRwPFQ+KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkU2Vzc2lvbnNWaWFGYWtlcjxUPigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBsb2FkU2Vzc2lvbnNWaWFIdHRwPFQ+KCkgOiBQcm9taXNlPFQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8VD4oKCk9Pnt9KTtcclxuICAgICAgICAvLyAgdmFyIHJlcVBhcmFtcyA9IHtcclxuICAgICAgICAvLyAgICAgdXJsOiBjb25zdGFudHNNb2R1bGUuQVpVUkVfVVJMICsgY29uc3RhbnRzTW9kdWxlLkFaVVJFX1RBQkxFX1BBVEggKyBjb25zdGFudHNNb2R1bGUuQVpVUkVfVEFCTEVfTkFNRSArICc/JG9yZGVyYnk9c3RhcnQnLFxyXG4gICAgICAgIC8vICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIC8vICAgICBoZWFkZXJzOiBjb25zdGFudHNNb2R1bGUuQVpVUkVfVkVSU0lPTl9IRUFERVJcclxuICAgICAgICAvLyB9O1xyXG4gICAgICAgIC8vIHJldHVybiBodHRwTW9kdWxlLmdldEpTT048VD4ocmVxUGFyYW1zKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBsb2FkU2Vzc2lvbnNWaWFGYWtlcjxUPigpIDogUHJvbWlzZTxUPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpPT57XHJcbiAgICAgICAgICAgIGxldCBzcGVha2VycyA9IGZha2VEYXRhU2VydmljZU1vZHVsZS5nZW5lcmF0ZVNwZWFrZXJzKCk7XHJcbiAgICAgICAgICAgIGxldCByb29tSW5mb3MgPSBmYWtlRGF0YVNlcnZpY2VNb2R1bGUuZ2VuZXJhdGVSb29tSW5mb3MoKTtcclxuICAgICAgICAgICAgbGV0IHNlc3Npb25zID0gPGFueT5mYWtlRGF0YVNlcnZpY2VNb2R1bGUuZ2VuZXJhdGVTZXNzaW9ucyhzcGVha2Vycywgcm9vbUluZm9zKTtcclxuICAgICAgICAgICAgcmVzb2x2ZShzZXNzaW9ucyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=