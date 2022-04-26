
function process(studentInfo){
	if(!studentInfo){
		DOMUtil.toggleClass("id-not-found", "hide");
		return;
	}
	DOMUtil.toggleClass("result-container", "hide");
	let status = studentInfo.status;
	if(status==STATUS_PASS)
		renderPass(studentInfo);
	else if(status==STATUS_NOT_PASS)
		renderNotPass(studentInfo);
	else 
		renderUnknown(studentInfo);
}

function renderPass(studentInfo){
	DOMUtil.setTextContent("intro-text", "Selamat untuk");
	DOMUtil.setTextContent("student-name", studentInfo.name);
	DOMUtil.setTextContent("student-class", studentInfo.class);
	DOMUtil.setTextContent("intro-text-end", "dinyatakan:");
	DOMUtil.setTextContent("student-result", studentInfo.status.toUpperCase());
	DOMUtil.setInnerHtml("outtro-text", "menempuh pendidikan di<br>SMA LABSCHOOL<br>KEBAYORAN");
	DOMUtil.setTextContent("additional-text", "SELAMAT DAN SEMOGA SUKSES!");
}

function renderNotPass(studentInfo){
	DOMUtil.setTextContent("intro-text", "Mohon maaf");
	DOMUtil.setTextContent("student-name", studentInfo.name);
	DOMUtil.setTextContent("student-class", studentInfo.class);
	DOMUtil.setTextContent("intro-text-end", "dinyatakan:");
	DOMUtil.setTextContent("student-result", studentInfo.status.toUpperCase());
	DOMUtil.setInnerHtml("outtro-text", "dari pendidikan di<br>SMA LABSCHOOL<br>KEBAYORAN");
}

function renderUnknown(studentInfo){
	DOMUtil.setTextContent("student-name", studentInfo.name);
	DOMUtil.setTextContent("student-class", studentInfo.class);
	DOMUtil.setTextContent("intro-text-end", "hasil:");
	DOMUtil.setTextContent("student-result", studentInfo.status.toUpperCase());
}