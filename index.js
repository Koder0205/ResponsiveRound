//document.writeln("hello world");

var test = navigator.userAgent;
//document.writeln(test);

var test2 = navigator.userAgent.getHighEntropyValues(["model"]).then(ua => {document.writeln(ua)});

document.writeln(test2);
/*
var UserAgent = navigator.userAgent;
var Device    = UserAgent.match(/\((.*?)\)/gi);
var ModelName = Device[0].replace(/[()]/gi, "").split(';')[2];
document.writeln(UserAgent);

var root = document.querySelector(':root');
root.style.setProperty('--roundval', '15px');

*/