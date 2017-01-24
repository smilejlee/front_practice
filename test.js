
function ajaxtest(url){
	function reqListener () {
  		console.log(JSON.parse(this.responseText).title);
  		//console.log(typeof(this.responseText));
  		var ourdiv=document.querySelector("#ourdiv");
		ourdiv.innerHTML = JSON.parse(this.responseText).title;
	}


	var oReq = new XMLHttpRequest();
	oReq.addEventListener("load", reqListener);
	oReq.open("GET", url);
	oReq.send();
}


function registerEvent()
{
var mydiv=document.querySelector("#mydiv");

//mydiv.addEventListener("mouseup",function(evt){
//	console.log("oh mouseup fired!");
//	console.log("click target is " +evt.target)
	mydiv.addEventListener("click",showEventType);
	mydiv.addEventListener("mousedown",showEventType);
}

function showEventType(evt)
{
	var sendURL = "http://jsonplaceholder.typicode.com/posts/1";
	if(evt.type=="click")
	{
		ajaxtest(sendURL);
	}
	console.log("event type is "+evt.type);
}

//in jquery, use $(docuemnt).ready()

	document.addEventListener("DOMContentLoaded",function(){
	console.log("complete load dom");
	registerEvent();
});
