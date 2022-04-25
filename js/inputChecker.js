var format = /[ °´`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

function checkInput(){
	let el = document.getElementById("id-input");
	let val = el.value;
	if(!val.trim()){
		sendFeedback("Formulir harus diisi!");
		return false;
	}
	if(format.test(val)){
		sendFeedback("Input tidak boleh mengandung simbol!");
		return false;
	}
	return true;
}

function sendFeedback(str){
	require(["js/DOMUtil.js"], function(){
		DOMUtil.setTextContent("err-feedback", str);
	})
}