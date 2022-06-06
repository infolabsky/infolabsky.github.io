
function initConfig(){
	DOMUtil.setInnerHtml("header-title", HEADER_TITLE);
		
	let targetId = cleanInput(getURLParam());
	let currentPath = window.location.pathname;
	if(targetId==null)
		targetId = "404-not found!";
	if(targetId && currentPath == RESULT_PATH){
		showResult(targetId);
	}
	else if(currentPath == HOME_PATH){
		showInputField();
	}
}

function getURLParam(){
	let queryStr = window.location.search;
	let params = new URLSearchParams(queryStr);
	if(params && params.has("id"))
		return cleanInput(params.get("id"));
}

function getDataById(id, allData){
	for(let data of allData){
		console.log(data.id);
		if(data.id.toUpperCase()==id.toUpperCase())
			return data;
	}
}

function showResult(targetId){
	require.config({
		paths:{
			noext: './text'
		}
	});
	let dataPath = "noext!/assets/data/" + DATA_FILE_NAME;
	require([dataPath, "/js/papaparse.min.js"], function(rawData, Papa){
		rawData = standarizeStructure(rawData);
		let json = Papa.parse(rawData, {header:true});
		let data = getDataById(targetId, json.data);
		process(data);
	});
}

function standarizeStructure(rawData){
	rawData = rawData.replace(DATA_HEADER_NAME, "name");
	rawData = rawData.replace(DATA_HEADER_CLASS, "class");
	rawData = rawData.replace(DATA_HEADER_UID, "id");
	rawData = rawData.replace(DATA_HEADER_STAT, "status");
	rawData = rawData.replace(DATA_HEADER_STAT_2, "status2");
	return rawData;
}

function showInputField(){
	DOMUtil.setTextContent("input-label", INPUT_LABEL);
	DOMUtil.toggleClass("input-container", "hide"); //remove hide from class
	setTimeout(()=>{
	DOMUtil.toggleClass("home-img", "hide");		
	}, 100);
}
