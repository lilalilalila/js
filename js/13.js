	function show() {
		var block = document.getElementById('visited');
		var oMask = document.getElementById('mask1');
		if (block.style.display == "none") {
			block.style.display = "block";
			oMask.style.display = "block";
		}
		else {
			block.style.display = "none";
			oMask.style.display = "none";
		}
		
	}


window.onload = function () {
	var oRed=document.getElementById('red');
	var oYellow=document.getElementById('yellow');
	var oBlue=document.getElementById('blue');
	var oInner=document.getElementById('inner');
	var oWidth1=document.getElementById('width1');
	var oWidth2=document.getElementById('width2');
	var oWidth3=document.getElementById('width3');
	var oHeight1=document.getElementById('height1');
	var oHeight2=document.getElementById('height2');
	var oHeight3=document.getElementById('height3');
	var oPig=document.getElementById('pig');
	var block = document.getElementById('visited');
	var oMask = document.getElementById('mask1');
	var oBtn1=document.getElementById('btn1');
	var oBtn2=document.getElementById('btn2');
		
	oRed.onclick = function () {
		oInner.style.background = 'red';
	}
	
	oYellow.onclick = function () {
		oInner.style.background = 'yellow';
	}
	
	oBlue.onclick = function () {
		oInner.style.background = 'blue';
	}
	
	oWidth1.onclick = function () {
		oInner.style.width = '100px';
		oInner.style.marginLeft = '-50px';
	}
	
	oWidth2.onclick = function () {
		oInner.style.width = '200px';
		oInner.style.marginLeft = '-100px';
	}
	
	oWidth3.onclick = function () {
		oInner.style.width = '300px';
		oInner.style.marginLeft = '-150px';
	}
	
	oHeight1.onclick = function () {
		oInner.style.height = '100px';
		oInner.style.marginTop = '-50px';
		oPig.style.lineHeight = '100px';
	}
	
	oHeight2.onclick = function () {
		oInner.style.height = '200px';
		oInner.style.marginTop = '-100px';
		oPig.style.lineHeight = '200px';
	}
	
	oHeight3.onclick = function () {
		oInner.style.height = '300px';
		oInner.style.marginTop = '-150px';
		oPig.style.lineHeight = '300px';
	}
	
	oBtn1.onclick = function() {
		oInner.style.width = '50px';
		oInner.style.height = '50px';
		oInner.style.marginTop = '-25px';
		oInner.style.marginLeft = '-25px';
		oInner.style.background = 'blanchedalmond';
		oPig.style.lineHeight = '50px';
	}
	
	oBtn2.onclick = function() {
		block.style.display = 'none';
		oMask.style.display = 'none';
	}
}



