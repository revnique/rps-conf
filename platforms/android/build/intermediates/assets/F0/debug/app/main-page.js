"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function onTap(args) {
    var button = args.object;
    button.text = "I was tapped";
    console.log("i was not tapped");
}
exports.onTap = onTap;
