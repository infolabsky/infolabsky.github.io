
function process(studentInfo){
	if(!studentInfo){
		DOMUtil.toggleClass("id-not-found", "hide");
		return;
	}
	DOMUtil.toggleClass("result-container", "hide");
	let status = studentInfo.status;
	if(status==STATUS_PASSED)
		renderPassed(studentInfo);
	else if(status==STATUS_FAILED)
		renderFailed(studentInfo);
	else 
		renderUnknown(studentInfo);
}

function renderPassed(studentInfo){
	DOMUtil.setTextContent("intro-text", INTRO_TEXT_PASS);
	DOMUtil.setTextContent("student-name", studentInfo.name.toUpperCase());
	DOMUtil.setTextContent("student-class", studentInfo.class);
	DOMUtil.setTextContent("intro-text-end", INTRO_TEXT_END_PASS);
	DOMUtil.setTextContent("student-result", studentInfo.status.toUpperCase());
	DOMUtil.setInnerHtml("outtro-text", OUTTRO_TEXT_PASS);
	DOMUtil.setTextContent("additional-text", ADDITIONAL_TEXT_PASS);
}

function renderFailed(studentInfo){
	DOMUtil.setTextContent("intro-text", INTRO_TEXT_FAIL);
	DOMUtil.setTextContent("student-name", studentInfo.name.toUpperCase());
	DOMUtil.setTextContent("student-class", studentInfo.class);
	DOMUtil.setTextContent("intro-text-end", INTRO_TEXT_END_FAIL);
	DOMUtil.setColor("student-result", "red");
	DOMUtil.setTextContent("student-result", studentInfo.status.toUpperCase());
	DOMUtil.setInnerHtml("outtro-text", OUTTRO_TEXT_FAIL);
}

function renderUnknown(studentInfo){
	DOMUtil.setTextContent("student-name", studentInfo.name.toUpperCase());
	DOMUtil.setTextContent("student-class", studentInfo.class);
	DOMUtil.setTextContent("intro-text-end", INTRO_TEXT_END_UNKNOWN);
	DOMUtil.setTextContent("student-result", standarizeOutput(studentInfo.status.toUpperCase()));
	DOMUtil.setTextContent("student-result-2", standarizeOutput(studentInfo.status2.toUpperCase()));
}

function standarizeOutput(text){
	let splitted = text.split(" ");
	if(splitted.length!=2) return text;
	let number = splitted[0];
	let alph = splitted[1];
	number = standarizeNumber(number);
	text = number + " " + alph;
	return text;
}

function standarizeNumber(num){
	if(num.length==3) return num;
	for(let i=num.length; i<3; i++){
		num = "0" + num;
	}
	return num;
}