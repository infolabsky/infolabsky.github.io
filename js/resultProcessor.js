
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
	DOMUtil.setTextContent("student-name", studentInfo.name);
	DOMUtil.setTextContent("student-class", studentInfo.class);
	DOMUtil.setTextContent("intro-text-end", INTRO_TEXT_END_PASS);
	DOMUtil.setTextContent("student-result", studentInfo.status.toUpperCase());
	DOMUtil.setInnerHtml("outtro-text", OUTTRO_TEXT_PASS + " " + studentInfo.position);
	DOMUtil.setTextContent("additional-text", ADDITIONAL_TEXT_PASS);
}

function renderFailed(studentInfo){
	DOMUtil.setTextContent("intro-text", INTRO_TEXT_FAIL);
	DOMUtil.setTextContent("student-name", studentInfo.name);
	DOMUtil.setTextContent("student-class", studentInfo.class);
	DOMUtil.setTextContent("intro-text-end", INTRO_TEXT_END_FAIL);
	DOMUtil.setColor("student-result", "red");
	DOMUtil.setTextContent("student-result", studentInfo.status.toUpperCase());
	DOMUtil.setInnerHtml("outtro-text", OUTTRO_TEXT_FAIL + " " + studentInfo.position);
}

function renderUnknown(studentInfo){
	DOMUtil.setTextContent("student-name", studentInfo.name);
	DOMUtil.setTextContent("student-class", studentInfo.class);
	DOMUtil.setTextContent("intro-text-end", INTRO_TEXT_END_UNKNOWN);
	DOMUtil.setTextContent("student-result", studentInfo.status.toUpperCase());
}