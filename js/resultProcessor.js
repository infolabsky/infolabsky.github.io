
function process(studentInfo){
	if(!studentInfo){
		DOMUtil.toggleClass("id-not-found", "hide");
		return;
	}
	DOMUtil.toggleClass("result-container", "hide");
	let pass = studentInfo.pass;
	if(pass)
		renderPass(studentInfo);
	else
		renderNotPass(studentInfo);
}

function renderPass(studentInfo){
	DOMUtil.setTextContent("intro-text", "Selamat untuk");
	DOMUtil.setTextContent("student-name", studentInfo.name);
	DOMUtil.setTextContent("student-class", studentInfo.class);
	DOMUtil.setTextContent("student-result", "LULUS");
	DOMUtil.setInnerHtml("outtro-text", "menempuh pendidikan di<br>SMA LABSCHOOL<br>KEBAYORAN");
	DOMUtil.setTextContent("additional-text", "SELAMAT DAN SEMOGA SUKSES!");
}

function renderNotPass(studentInfo){
	DOMUtil.setTextContent("intro-text", "Mohon maaf");
	DOMUtil.setTextContent("student-name", studentInfo.name);
	DOMUtil.setTextContent("student-class", studentInfo.class);
	DOMUtil.setTextContent("student-result", "TIDAK LULUS");
	DOMUtil.setInnerHtml("outtro-text", "dari pendidikan di<br>SMA LABSCHOOL<br>KEBAYORAN");
}