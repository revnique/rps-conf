"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function onTap(args) {
    var button = args.object;
    button.text = "I was tapped";
    console.log("i was tapped");
}
exports.onTap = onTap;
