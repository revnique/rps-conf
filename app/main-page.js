"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
exports.loaded = function (args) {
    var page = args.object;
    page.bindingContext = new observable_1.Observable({
        name: "Dtown"
    });
};
function onTap(args) {
    var button = args.object;
    button.text = "I was tapped";
    console.log("i was tapped");
}
exports.onTap = onTap;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTJDO0FBRTNDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsVUFBUyxJQUFJO0lBQzFCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLHVCQUFVLENBQUM7UUFDakMsSUFBSSxFQUFDLE9BQU87S0FDZixDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFDRixlQUFzQixJQUFJO0lBQ3RCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDekIsTUFBTSxDQUFDLElBQUksR0FBRyxjQUFjLENBQUM7SUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNoQyxDQUFDO0FBSkQsc0JBSUM7QUFBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5cbmV4cG9ydHMubG9hZGVkID0gZnVuY3Rpb24oYXJncyl7XG4gICAgdmFyIHBhZ2UgPSBhcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IE9ic2VydmFibGUoe1xuICAgICAgICBuYW1lOlwiRHRvd25cIlxuICAgIH0pO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBvblRhcChhcmdzKXtcbiAgICB2YXIgYnV0dG9uID0gYXJncy5vYmplY3Q7XG4gICAgYnV0dG9uLnRleHQgPSBcIkkgd2FzIHRhcHBlZFwiO1xuICAgIGNvbnNvbGUubG9nKFwiaSB3YXMgdGFwcGVkXCIpO1xufTsiXX0=