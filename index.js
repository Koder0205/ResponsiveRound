//document.writeln("hello world");

var test = navigator.userAgent;
//document.writeln(test);

var UserAgent = navigator.userAgent.match(/\((.*?)\)/gi)[0];
var ModelName = UserAgent.replace(/[()]/gi, "").split(';')[2];
document.writeln(ModelName);

var root = document.querySelector(':root');
root.style.setProperty('--roundval', '15px');