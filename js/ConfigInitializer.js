
function initConfig(){
	DOMUtil.setInnerHtml("header-title", HEADER_TITLE);
		
	let targetId = cleanInput(getURLParam());
	if(targetId){
		showResult(targetId);
	}
	else{
		DOMUtil.toggleClass("input-container", "hide"); //remove hide from class
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
		if(data.id==id)
			return data;
	}
}

function showResult(targetId){
	require.config({
		paths:{
			noext: './text'
		}
	});
	require(["noext!../assets/data/data.csv", "js/papaparse.min.js"], function(rawData, Papa){
		rawData = standarizeStructure(rawData);
		let json = Papa.parse(rawData, {header:true});
		let data = getDataById(targetId, json.data);
		process(data);
	});
}

function standarizeStructure(rawData){
	rawData = rawData.replaceAll(DATA_HEADER_NAME, "name");
	rawData = rawData.replaceAll(DATA_HEADER_CLASS, "class");
	rawData = rawData.replaceAll(DATA_HEADER_UID, "id");
	rawData = rawData.replaceAll(DATA_HEADER_STAT, "status");
	return rawData;
}
