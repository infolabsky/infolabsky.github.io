var invalidSymbol = /[:/?#\[\]@!$&'()*+,;="<>%{}|\^`]/g;

function checkInput(){
	let el = document.getElementById("id-input");
	let val = el.value;
	
	
	if(!val.trim()){
		sendFeedback("Formulir harus diisi!");
		return false;
	}
	if(invalidSymbol.test(val)){
		val = cleanInput(val);
		el.value = val;
		if(invalidSymbol.test(val)){
			sendFeedback("Input tidak boleh mengandung simbol!");
			return false;
		}
	}
	return true;
}

function sendFeedback(str){
	DOMUtil.setTextContent("err-feedback", str);
}

function cleanInput(str){
	if(!str)
		return str;
	return str.replaceAll(invalidSymbol, "");
}