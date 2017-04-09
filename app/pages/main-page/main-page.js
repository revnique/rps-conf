"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_view_model_1 = require("./main-view-model");
var page;
var vm = new main_view_model_1.MainViewModel();
function pageLoaded(args) {
    page = args.object;
    page.bindingContext = vm;
    vm.init();
}
exports.pageLoaded = pageLoaded;
;
function toggleFavorite(args) {
    var session = args.view.bindingContext;
    session.toggleFavorite();
}
exports.toggleFavorite = toggleFavorite;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEscURBQStDO0FBRy9DLElBQUksSUFBUyxDQUFDO0FBQ2QsSUFBSSxFQUFFLEdBQUcsSUFBSSwrQkFBYSxFQUFFLENBQUM7QUFFN0Isb0JBQTJCLElBQWU7SUFDdEMsSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7SUFDekIsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2QsQ0FBQztBQUpELGdDQUlDO0FBQUEsQ0FBQztBQUVGLHdCQUErQixJQUFzQjtJQUNqRCxJQUFJLE9BQU8sR0FBc0IsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDMUQsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQzdCLENBQUM7QUFIRCx3Q0FHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnREYXRhLCBPYnNlcnZhYmxlfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSAndWkvcGFnZSc7XHJcbmltcG9ydCB7R2VzdHVyZUV2ZW50RGF0YX0gZnJvbSAndWkvZ2VzdHVyZXMnO1xyXG5cclxuaW1wb3J0e01haW5WaWV3TW9kZWx9IGZyb20gJy4vbWFpbi12aWV3LW1vZGVsJztcclxuaW1wb3J0e1Nlc3Npb25WaWV3TW9kZWx9IGZyb20gJy4uL3Nlc3Npb24tcGFnZS9zZXNzaW9uLXZpZXctbW9kZWwnO1xyXG5cclxudmFyIHBhZ2U6UGFnZTtcclxudmFyIHZtID0gbmV3IE1haW5WaWV3TW9kZWwoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYWdlTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSl7XHJcbiAgICBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XHJcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdm07XHJcbiAgICB2bS5pbml0KCk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlRmF2b3JpdGUoYXJnczogR2VzdHVyZUV2ZW50RGF0YSl7XHJcbiAgICB2YXIgc2Vzc2lvbiA9IDxTZXNzaW9uVmlld01vZGVsPiBhcmdzLnZpZXcuYmluZGluZ0NvbnRleHQ7XHJcbiAgICBzZXNzaW9uLnRvZ2dsZUZhdm9yaXRlKCk7XHJcbn1cclxuIl19