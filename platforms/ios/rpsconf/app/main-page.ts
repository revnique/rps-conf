import {Observable} from "data/observable";

exports.loaded = function(args){
    var page = args.object;
    page.bindingContext = new Observable({
        name:"Dtown"
    });
};
export function onTap(args){
    var button = args.object;
    button.text = "I was tapped";
    console.log("i was tapped");
};