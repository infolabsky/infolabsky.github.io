
//----Configurable variables----
const HEADER_TITLE = "PENGUMUMAN KELULUSAN<br>SMA LABSCHOOL KEBAYORAN<br>TA 2021-2022";
//------------------------------

function initConfig(){
	require(["js/DOMUtil.js"], function (){
		DOMUtil.setInnerHtml("header-title", HEADER_TITLE);
		
		let targetId = getURLParam();
		if(targetId){
			showResult(targetId);
		}
		else{
			DOMUtil.toggleClass("input-container", "hide"); //remove hide from class
		}
	});
}

function getURLParam(){
	let queryStr = window.location.search;
	let params = new URLSearchParams(queryStr);
	if(params && params.has("id"))
		return params.get("id");
}

function getDataById(id, allData){
	for(let data of allData.dataArr){
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
	require(["noext!../assets/data/data.json", "js/resultProcessor.js"], function(rawData){
		let json = JSON.parse(rawData);
		let data = getDataById(targetId, json);
		process(data);
	});
}
