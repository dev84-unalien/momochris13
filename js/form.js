let mail = $('#login');
let pass = $('#password');
let submit = $('#log');






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

	console.log(result.message);


}


}


submit.click(function(){
	sendData();
})