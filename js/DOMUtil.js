
class DOMUtil{
	static redoLimit = 100;
	
	static setInnerHtml(elId, content){
		this.#reDo(this.redoLimit, ()=>{
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
		this.#reDo(this.redoLimit, ()=>{
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
		this.#reDo(this.redoLimit, ()=>{
			let el = document.getElementById(elId);
			if(el!=null){
				el.classList.toggle(className);
				return true;
			}
			return false;
		}, 
		0);
	}
	
	static setColor(elId, color){
		this.#reDo(this.redoLimit, ()=>{
			let el = document.getElementById(elId);
			if(el!=null){
				el.style.color = color;
				return true;
			}
			return false;
		}, 
		0);
	}
	
	static #reDo(limitTimes, fn, currentTime){
		if(currentTime>limitTimes)
			return;
		if(currentTime>0){
			setTimeout(()=>{
				this.#executeFunction(limitTimes, fn, currentTime);
			}, 25);
		}
		else{
			this.#executeFunction(limitTimes, fn, currentTime);
		}
	}
	
	static #executeFunction(limitTimes, fn, currentTime){
		let isSuccess = fn();
		if(!isSuccess){
			currentTime += 1;
			this.#reDo(limitTimes, fn, currentTime);
		}
	}
}