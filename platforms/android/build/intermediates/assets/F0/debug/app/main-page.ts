export function onTap(args){
    var button = args.object;
    button.text = "I was tapped";
    console.log("i was tapped");
}