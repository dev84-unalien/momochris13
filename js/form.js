let mail = $('#login');
let pass = $('#password');
let submit = $('#log');
let fbk = $("#facebook");






function sendData(){

	$.ajax({

	url : " http://192.168.1.112:8001/login",
	type : "POST",
	data : {email : mail.val() , password: pass.val() },
	success : monHandler,

	error:function(){

		alert("dtc");
	}
});

function monHandler(result){

	alert(result.message);


}


}

function logFacebook(){

	$.ajax({

	url : " http://192.168.1.112:8001/facebook",
	type : "POST",
	data : {email : mail.val() , password: pass.val() },
	success : monHandlerFbk,

	error:function(){

		alert("dtc");
	}
});

function monHandlerFbk(result){

	alert(result.message);


}


}



submit.click(function(){
	sendData();
});

fbk.click(function(){
	sendData();
});