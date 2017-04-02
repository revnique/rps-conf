"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var page;
var tempSessions = [
    {
        id: '0',
        title: 'session 1'
    },
    {
        id: '1',
        title: 'session 2'
    },
    {
        id: '2',
        title: 'session 3'
    }
];
function pageLoaded(args) {
    page = args.object;
    page.bindingContext = new observable_1.Observable({
        sessions: tempSessions
    });
}
exports.pageLoaded = pageLoaded;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQXNEO0FBR3RELElBQUksSUFBUyxDQUFDO0FBQ2QsSUFBSSxZQUFZLEdBQUc7SUFDZjtRQUNJLEVBQUUsRUFBRSxHQUFHO1FBQ1AsS0FBSyxFQUFFLFdBQVc7S0FDckI7SUFDRDtRQUNJLEVBQUUsRUFBRSxHQUFHO1FBQ1AsS0FBSyxFQUFFLFdBQVc7S0FDckI7SUFDRDtRQUNJLEVBQUUsRUFBRSxHQUFHO1FBQ1AsS0FBSyxFQUFFLFdBQVc7S0FDckI7Q0FDSixDQUFDO0FBQ0Ysb0JBQTJCLElBQWU7SUFDdEMsSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLHVCQUFVLENBQUM7UUFDakMsUUFBUSxFQUFDLFlBQVk7S0FDeEIsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUxELGdDQUtDO0FBQUEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnREYXRhLCBPYnNlcnZhYmxlfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSAndWkvcGFnZSc7XHJcblxyXG52YXIgcGFnZTpQYWdlO1xyXG52YXIgdGVtcFNlc3Npb25zID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAnMCcsXHJcbiAgICAgICAgdGl0bGU6ICdzZXNzaW9uIDEnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnMScsXHJcbiAgICAgICAgdGl0bGU6ICdzZXNzaW9uIDInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnMicsXHJcbiAgICAgICAgdGl0bGU6ICdzZXNzaW9uIDMnXHJcbiAgICB9XHJcbl07XHJcbmV4cG9ydCBmdW5jdGlvbiBwYWdlTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSl7XHJcbiAgICBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XHJcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IE9ic2VydmFibGUoe1xyXG4gICAgICAgIHNlc3Npb25zOnRlbXBTZXNzaW9uc1xyXG4gICAgfSk7XHJcbn07Il19