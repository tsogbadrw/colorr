//var a = 5;
//var too = [50,456,1,65];
//var word = ["text1","text2","text3"];
//var any = [50,"hi",null,true];
//console.log(too);
//console.log(too[0]);
//console.log(too[3]);
// .length --> elementiin urt buyu too shirheg
//console.log(too.length);
//console.log(too[too.length-1]);
//for(var i=0; i<=too.length-1;i++){
//	console.log(word[i]);
///}
var body = document.getElementsByTagName('body')[0];
var btn = document.getElementsByTagName('button')[0];
console.log(body);
var color = ['brown','aqua','green','red','purple','yellow',];
var i=-1;
function change(){
	random = Math.floor(Math.random()*(color.length-1));
	i++;
	body.style.backgroundColor=color[i];
	btn.innerText=color[i];
	if(i>color.length-1){
		i=-1;
	}
}
	