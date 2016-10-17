var selection = {
	len: 0,
	getText : function(event) {
		var txt = '';
		if(txt = window.getSelection){ // Not IE, 
			var reg = /^([a-z-]+)$/i;
			var regS = /\n/g;///^([\s]+)$/i;
			txt = window.getSelection().toString();
			txt = txt.replace(regS,' ');
			txt = txt.split(' ');
			if(txt.length > 1 && !txt[0]) txt = txt[1];
			else txt = txt[0];
			if(!txt || txt == ' ') return false;
			var sel = window.getSelection(), range;
            range = sel.getRangeAt(0);
			var startRangeNode = range.startContainer;
			var startIndx = range.startOffset;
			var nextNode;
			if(startRangeNode.nodeValue.length != startIndx && (!startRangeNode.nodeValue[startIndx] || !reg.test(startRangeNode.nodeValue[startIndx]))){
				for(var i = startIndx; i < (range.startOffset + range.endOffset); i++){
					if(startRangeNode.nodeValue[startIndx] == 'undefined' || !startRangeNode.nodeValue[startIndx] || !reg.test(startRangeNode.nodeValue[startIndx])){
						startIndx++;
					}
					else break;
					if(startRangeNode.nodeValue.length == startIndx){
						break;
					}
				}
			}
			if(startRangeNode.nodeValue.length == startIndx && (!startRangeNode.nodeValue[startIndx] || !reg.test(startRangeNode.nodeValue[startIndx]))){
				if(startRangeNode == range.endContainer) return false;
				else{
					if(startRangeNode.parentNode.nextSibling){
						nextNode = startRangeNode.parentNode.nextSibling.nextSibling.childNodes[0];//.nextSibling;//.nextSibling;//.childNodes;
						startRangeNode = nextNode;
						startIndx = 4;
						txt = startRangeNode.nodeValue.split(' ');
						for(var k in txt){
							if(txt[k] && !regS.test(txt[k]) && txt[k] != 'undefined'){
								txt = txt[k]; break;
							}
						}
					}
					else
						return false;
				}
			}
			txt = checkEndWord(txt);
			var checkWord = checkStartWord(startRangeNode.nodeValue,startIndx,txt);
			startIndx = checkWord.startIndx;
			txt = checkWord.txt;

			var rng = document.createRange();
			rng.setStart(startRangeNode, startIndx);
			rng.setEnd(startRangeNode, startIndx + txt.length);
			sel.removeAllRanges();
                sel.addRange(rng);
			createTrBlock.create(event,txt);
			
		}
		else{ // IE,
			txt = document.selection.createRange().text.split(' ');
			if(txt.length > 1 && !txt[0]) txt = txt[1];
			else txt = txt[0];
			if(!txt || txt == ' ') return false;
		}
		return txt;
	}
}
var checkStartWord = function(startRangeNode,startIndx,txt){
	var reg = /^([a-z-]+)$/i;
	if(!reg.test(startRangeNode[startIndx])){
		txt = txt.slice(1,0);
		startIndx++;
		return checkStartWord(startRangeNode,startIndx,txt);
	}
	else if(startIndx && reg.test(startRangeNode[startIndx - 1]) && startRangeNode[startIndx - 1] != 'undefined'){
		txt = startRangeNode[startIndx - 1] + txt;
		startIndx--;
		return checkStartWord(startRangeNode,startIndx,txt);
	}
	else if(reg.test(startRangeNode[startIndx + txt.length])){
		txt += startRangeNode[startIndx + txt.length];
		return checkStartWord(startRangeNode,startIndx,txt);
	}
	else{
		return {startIndx: startIndx, txt: txt};
	}
}

var checkEndWord = function(word){
	var reg = /^([a-z-]+)$/i;
	if(!reg.test(word[word.length-1])){
		word = word.slice(0, -1);
		return checkEndWord(word);
	}
	else
		return word;
}

var getSelectionCoords = function(){
    var sel = document.selection, range;
    var x = 0, y = 0;
    if (sel) {
        if (sel.type != "Control") {
            range = sel.createRange();
            range.collapse(true);
            x = range.boundingLeft;
            y = range.boundingTop;
        }
    } else if (window.getSelection) {
        sel = window.getSelection();
        if (sel.rangeCount) {
            range = sel.getRangeAt(0).cloneRange();
            if (range.getClientRects) {
                range.collapse(true);
                var rect = range.getClientRects()[0];
                x = rect.left;
                y = rect.top;
				h = rect.height;
            }
        }
    }
    return { x: x, y: y , h: h};
}


var logger = function(txt){
	txt && (vote(txt));
}

function getXmlHttp(){
  var xmlhttp;
  try {
    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
    try {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (E) {
      xmlhttp = false;
    }
  }
  if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
    xmlhttp = new XMLHttpRequest();
  }
  return xmlhttp;
}

function vote(elem,word) {
	var objRes = JSON.parse(bd),
		res = false;
	
	for(var k in objRes){
		if(objRes[k]['text'] == word){
			res = objRes[k];
			break;
		}
	}
	if(res){
		var meanings = res.meanings;
		var arImg = [];
		var ul = document.getElementById('translate-list'), li;
		for(var k in meanings){
			arImg[k] = new Image();
			arImg[k].src = meanings[k]['image_url'];
			arImg[k].id = 'tr-img' + k;
			li = document.createElement('li');
			document.getElementById('translate-list').appendChild(li);
			li.innerHTML = meanings[k]['translation'];
			li.src_img = meanings[k]['image_url'];
			li.addEventListener('mouseover',function(){
				document.getElementById('tr-img0').src = this.src_img;
				this.style['font-size'] = '20px';
			},false);
			li.addEventListener('mouseout',function(){
				this.style['font-size'] = '16px';
			},false);
		}
		document.getElementById('translate-img').appendChild(arImg[0]);
	}
	else{
		var li = document.createElement('li');
		document.getElementById('translate-list').appendChild(li);
		li.innerHTML = 'No translate.';
	}
	var coordsSl = getSelectionCoords(),
		d = document.getElementById('translate-block'),
		w = document.documentElement.clientWidth,
		h = document.documentElement.clientHeight,
		coords = d.getBoundingClientRect(),
		scrolled = window.pageYOffset || document.documentElement.scrollTop;
	if(d.offsetWidth + coords.left > w){
		d.style.left = d.offsetLeft - (d.offsetWidth + coords.left - w + 10) + 'px';
	}
	if(d.offsetHeight + coords.top > h){
		if((d.offsetTop - (d.offsetHeight + coordsSl.h + 15)) - scrolled >= 0){
			d.style.top = d.offsetTop - (d.offsetHeight + coordsSl.h + 15) + 'px';
		}
	}
}

var createTrBlock = {
	create: function(event,txt){
		var event = event || window.event;

		var d = document.createElement('div'),
			elem_img = document.createElement('div'),
			title = document.createElement('div'),
			ul = document.createElement('ul'),
			box = document.getElementsByTagName('div')[0];//.getElementById('word'),
			coordsSl = getSelectionCoords();
		d.className = 'translate-block';
		d.id = 'translate-block';
		d.style.left = (coordsSl.x - box.offsetLeft) + 'px';
		var scrolled = window.pageYOffset || document.documentElement.scrollTop;
		d.style.top = (coordsSl.y - box.offsetTop + coordsSl.h + 10 + scrolled) + 'px';
		box.appendChild(d);
		elem_img.className = 'translate-img';
		title.className = 'translate-title';
		ul.className = 'translate-list';
		elem_img.id = 'translate-img';
		title.id = 'translate-title';
		ul.id = 'translate-list';
		d.appendChild(elem_img);
		d.appendChild(title);
		d.appendChild(ul);
		document.getElementById('translate-title').innerHTML = txt;
		vote(d,txt);
		this.on = true;
	},
	on:false,
	remove: function(){
		this.on = false;
		var box = document.getElementsByTagName('div')[0];
		var d = document.getElementById('translate-block');
		d && box.removeChild(d);
	}
}

window.onload=function(){
	var block = document;
	if(block.addEventListener) {
		block.addEventListener("mouseup", function(event){
			createTrBlock.remove();
			selection.getText(event);
		}, false);
		block.addEventListener("mousedown", function(event){
			var d = document.getElementById('translate-block');
			createTrBlock.remove();
			for(var k in event.path){
				if(event.path[k] == d) {selection.getText(event);}
				
			}
			if(event.target == d) {selection.getText(event);}
		}, false);
	}
	else{
		block.attachEvent("onmouseup", function(){logger(selection.getText());});
	}
}

var bd = '[{"id":"203","text":"mother","meanings":[{"id":"192984","translation":"\u043c\u0430\u043c\u0430","preview_image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/73854\/width\/96\/height\/72","image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/73854\/width\/640\/height\/480","pos_code":"n","is_allowed_for_study":1},{"id":"192989","translation":"\u0437\u0430\u0431\u043e\u0442\u0438\u0442\u044c\u0441\u044f","preview_image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/18158\/width\/96\/height\/72","image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/18158\/width\/640\/height\/480","pos_code":"v","is_allowed_for_study":1},{"id":"192988","translation":"\u0432\u0434\u043e\u0445\u043d\u043e\u0432\u0435\u043d\u0438\u0435","preview_image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/28097\/width\/96\/height\/72","image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/28097\/width\/640\/height\/480","pos_code":"n","is_allowed_for_study":1},{"id":"192987","translation":"\u043c\u0430\u0442\u0443\u0448\u043a\u0430","preview_image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/13396\/width\/96\/height\/72","image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/13396\/width\/640\/height\/480","pos_code":"n","is_allowed_for_study":1},{"id":"192986","translation":"\u043c\u0430\u0442\u044c","preview_image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/13397\/width\/96\/height\/72","image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/13397\/width\/640\/height\/480","pos_code":"n","is_allowed_for_study":1},{"id":"192985","translation":"\u0437\u0430\u043a\u0432\u0430\u0441\u043a\u0430","preview_image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/96828\/width\/96\/height\/72","image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/96828\/width\/640\/height\/480","pos_code":"n","is_allowed_for_study":1},{"id":"232727","translation":"\u043c\u0430\u043c\u0430 ","preview_image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/76789\/width\/96\/height\/72","image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/76789\/width\/640\/height\/480","pos_code":"n","is_allowed_for_study":1}]},{"id":"2167","text":"grandmother","meanings":[{"id":"135491","translation":"\u0431\u0430\u0431\u0443\u0448\u043a\u0430","preview_image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/73865\/width\/96\/height\/72","image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/73865\/width\/640\/height\/480","pos_code":"n","is_allowed_for_study":1}]},{"id":"6757","text":"chemotherapy","meanings":[{"id":"169389","translation":"\u0445\u0438\u043c\u0438\u043e\u0442\u0435\u0440\u0430\u043f\u0438\u044f","preview_image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/3013\/width\/96\/height\/72","image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/3013\/width\/640\/height\/480","pos_code":"n","is_allowed_for_study":1}]},{"id":"7943","text":"motherhood","meanings":[{"id":"66226","translation":"\u043c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u0442\u0432\u043e","preview_image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/33029\/width\/96\/height\/72","image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/33029\/width\/640\/height\/480","pos_code":"n","is_allowed_for_study":1}]},{"id":"9190","text":"mother-in-law","meanings":[{"id":"169053","translation":"\u0442\u0451\u0449\u0430","preview_image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/73857\/width\/96\/height\/72","image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/73857\/width\/640\/height\/480","pos_code":"n","is_allowed_for_study":1}]},{"id":"9422","text":"smother","meanings":[{"id":"160758","translation":"\u043f\u043e\u043a\u0440\u044b\u0432\u0430\u0442\u044c","preview_image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/69476\/width\/96\/height\/72","image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/69476\/width\/640\/height\/480","pos_code":"v","is_allowed_for_study":1},{"id":"160760","translation":"\u0443\u043a\u0440\u044b\u0432\u0430\u0442\u044c","preview_image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/65907\/width\/96\/height\/72","image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/65907\/width\/640\/height\/480","pos_code":"v","is_allowed_for_study":1},{"id":"160759","translation":"\u0434\u0443\u0448\u0438\u0442\u044c","preview_image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/70156\/width\/96\/height\/72","image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/70156\/width\/640\/height\/480","pos_code":"v","is_allowed_for_study":1},{"id":"160756","translation":"\u0431\u0435\u0441\u043f\u043e\u0440\u044f\u0434\u043e\u043a","preview_image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/32648\/width\/96\/height\/72","image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/32648\/width\/640\/height\/480","pos_code":"n","is_allowed_for_study":1},{"id":"160757","translation":"\u0433\u0443\u0441\u0442\u043e\u0439 \u0442\u0443\u043c\u0430\u043d","preview_image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/14243\/width\/96\/height\/72","image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/14243\/width\/640\/height\/480","pos_code":"n","is_allowed_for_study":1}]},{"id":"10783","text":"stepmother","meanings":[{"id":"103150","translation":"\u043c\u0430\u0447\u0435\u0445\u0430","preview_image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/97603\/width\/96\/height\/72","image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/97603\/width\/640\/height\/480","pos_code":"n","is_allowed_for_study":1}]},{"id":"14051","text":"motherfucker","meanings":[{"id":"224310","translation":"\u0434\u0435\u0431\u0438\u043b","preview_image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/12714\/width\/96\/height\/72","image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/12714\/width\/640\/height\/480","pos_code":"n","is_allowed_for_study":1}]},{"id":"16338","text":"godmother","meanings":[{"id":"134709","translation":"\u043a\u0440\u0451\u0441\u0442\u043d\u0430\u044f \u043c\u0430\u0442\u044c","preview_image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/34304\/width\/96\/height\/72","image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/34304\/width\/640\/height\/480","pos_code":"n","is_allowed_for_study":1}]},{"id":"156163","text":"motherboard","meanings":[{"id":"233274","translation":"\u043c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u043b\u0430\u0442\u0430","preview_image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/77643\/width\/96\/height\/72","image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/77643\/width\/640\/height\/480","pos_code":"n","is_allowed_for_study":1}]},{"id":"20332","text":"motherland","meanings":[{"id":"16781","translation":"\u0440\u043e\u0434\u0438\u043d\u0430","preview_image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/33155\/width\/96\/height\/72","image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/33155\/width\/640\/height\/480","pos_code":"n","is_allowed_for_study":1}]},{"id":"21353","text":"mother-of-pearl","meanings":[{"id":"82023","translation":"\u043f\u0435\u0440\u043b\u0430\u043c\u0443\u0442\u0440","preview_image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/35909\/width\/96\/height\/72","image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/35909\/width\/640\/height\/480","pos_code":"n","is_allowed_for_study":1}]},{"id":"23550","text":"smothering","meanings":[{"id":"108940","translation":"\u0443\u0434\u0443\u0448\u0430\u044e\u0449\u0438\u0439","preview_image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/66150\/width\/96\/height\/72","image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/66150\/width\/640\/height\/480","pos_code":"j","is_allowed_for_study":1}]},{"id":"31762","text":"smothered","meanings":[{"id":"125287","translation":"\u0441\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0439","preview_image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/67455\/width\/96\/height\/72","image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/67455\/width\/640\/height\/480","pos_code":"j","is_allowed_for_study":1}]},{"id":"36584","text":"housemother","meanings":[{"id":"80892","translation":"\u043c\u0430\u0442\u044c \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0430","preview_image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/27650\/width\/96\/height\/72","image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/27650\/width\/640\/height\/480","pos_code":"n","is_allowed_for_study":1}]},{"id":"75347","text":"mother hen","meanings":[{"id":"119304","translation":"\u043d\u0430\u0441\u0435\u0434\u043a\u0430","preview_image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/51337\/width\/96\/height\/72","image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/51337\/width\/640\/height\/480","pos_code":"n","is_allowed_for_study":1}]},{"id":"69466","text":"homotherm","meanings":[{"id":"211538","translation":"\u0433\u043e\u043c\u043e\u0439\u043e\u0442\u0435\u0440\u043c\u0438\u044f","preview_image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/50290\/width\/96\/height\/72","image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/50290\/width\/640\/height\/480","pos_code":"n","is_allowed_for_study":1}]},{"id":"97789","text":"mother seton","meanings":[{"id":"32945","translation":"\u0441\u0435\u0442\u043e\u043d, \u0435\u043b\u0438\u0437\u0430\u0432\u0435\u0442\u0430 \u0430\u043d\u043d\u0430","preview_image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/31647\/width\/96\/height\/72","image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/31647\/width\/640\/height\/480","pos_code":"n","is_allowed_for_study":1}]},{"id":"161099","text":"step-mother","meanings":[{"id":"229431","translation":"\u043c\u0430\u0447\u0435\u0445\u0430","preview_image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/43002\/width\/96\/height\/72","image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/43002\/width\/640\/height\/480","pos_code":"n","is_allowed_for_study":1}]},{"id":"93719","text":"mother jones","meanings":[{"id":"170608","translation":"\u0445\u0430\u0440\u0440\u0438\u0441, \u043c\u044d\u0440\u0438","preview_image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/33724\/width\/96\/height\/72","image_url":"\/\/static.skyeng.ru\/image\/download\/project\/dictionary\/id\/33724\/width\/640\/height\/480","pos_code":"n","is_allowed_for_study":1}]}]';













