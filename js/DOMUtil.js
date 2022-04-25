
class DOMUtil{
	static setInnerHtml(elId, content){
		this.#reDo(50, ()=>{
			let el = document.getElementById(elId);
			if(el!=null){
				el.innerHTML = content;
				return true;
			}
			return false;
		}, 
		0);
	}
	
	static setTextContent(elId, text){
		this.#reDo(50, ()=>{
			let el = document.getElementById(elId);
			if(el!=null){
				el.textContent = text;
				return true;
			}
			return false;
		}, 
		0);
	}
	
	static toggleClass(elId, className){
		this.#reDo(50, ()=>{
			let el = document.getElementById(elId);
			if(el!=null){
				el.classList.toggle(className);
				return true;
			}
			return false;
		}, 
		0);
	}
	
	static #reDo(limitTimes, fn, currentTime){
		if(currentTime>limitTimes)
			return;
		setTimeout(()=>{
			let isSuccess = fn();
			if(!isSuccess){
				currentTime += 1;
				this.#reDo(limitTimes, fn, currentTime);
			}
		}, 50);
	}
}