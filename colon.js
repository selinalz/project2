//change mouse to circle
$(document).mousemove(function(e) {
	$('.circle').css({
		left: e.pageX,
		top: e.pageY
	});
})
//activate move on click - period
document.getElementById('period').addEventListener('click', function() {
	document.querySelector('.period_bg').classList.add('move');
	document.querySelector('.period2_bg').classList.add('move2');
});
var punct = document.getElementById('period');
punct.addEventListener("click", Hide);

function Hide() {
	var period = document.getElementById('period');
	period.style.opacity = "0%";
	var punct2 = document.getElementById('period2');
	punct2.style.opacity = "0%";
	var text = document.getElementsByClassName("text")[0];
	text.style.opacity = "0%";
	var box = document.getElementsByClassName("box2")[0];
	box.style.top = "0%";
	var comabg = document.getElementsByClassName("coma_bg")[0];
	comabg.style.zIndex = "3";
}
//activate move on click - period2
document.getElementById('period2').addEventListener('click', function() {
	document.querySelector('.period_bg').classList.add('move');
	document.querySelector('.period2_bg').classList.add('move2');
});
var punct = document.getElementById('period2');
punct.addEventListener("click", Hide2);

function Hide2() {
	var period = document.getElementById('period');
	period.style.opacity = "0%";
	var period2 = document.getElementById('period2');
	period2.style.opacity = "0%";
	var text = document.getElementsByClassName("text")[0];
	text.style.opacity = "0%";
	var box = document.getElementsByClassName("box2")[0];
	box.style.top = "0%";
	var comabg = document.getElementsByClassName("coma_bg")[0];
	comabg.style.zIndex = "3";
}
//activate move on click - period3
document.getElementById('period3').addEventListener('click', function() {
	document.querySelector('.period3_bg').classList.add('move3');
	document.querySelector('.coma_bg').classList.add('move4');
});
var punct = document.getElementById('period3');
punct.addEventListener("click", Hide3);

function Hide3() {
	var period = document.getElementById('period3');
	period.style.opacity = "0%";
	var coma = document.getElementById('coma');
	coma.style.opacity = "0%";
	var text = document.getElementsByClassName("text")[0];
	text.style.opacity = "0%";
	var box = document.getElementsByClassName("box2")[0];
	box.style.top = "0%";
	var comabg = document.getElementsByClassName("coma_bg")[0];
	comabg.style.zIndex = "3";
}
//activate move on click - coma
document.getElementById('coma').addEventListener('click', function() {
	document.querySelector('.period3_bg').classList.add('move3');
	document.querySelector('.coma_bg').classList.add('move4');
});
var com = document.getElementById('coma');
com.addEventListener("click", Hide4);

function Hide4() {
	var period = document.getElementById('period3');
	period.style.opacity = "0%";
	var coma = document.getElementById('coma');
	coma.style.opacity = "0%";
	var text = document.getElementsByClassName("text")[0];
	text.style.opacity = "0%";
	var box = document.getElementsByClassName("box2")[0];
	box.style.top = "0%";
	var comabg = document.getElementsByClassName("coma_bg")[0];
	comabg.style.zIndex = "3";
}
//click coma to show next part of text
var comabg = document.getElementsByClassName("coma_bg")[0];
comabg.addEventListener("click", Show);

function Show() {
	var punct = document.getElementsByClassName("text2")[0];
	punct.style.opacity = "100%";
}
// Change hover color of mouse - period
var period = document.getElementById('period');
period.addEventListener("mouseover", ChangeColor);

function ChangeColor() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - period
var period = document.getElementById('period');
period.addEventListener("mouseout", ChangeBack);

function ChangeBack() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - period2
var period = document.getElementById('period2');
period.addEventListener("mouseover", ChangeColor2);

function ChangeColor2() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - period2
var period = document.getElementById('period2');
period.addEventListener("mouseout", ChangeBack2);

function ChangeBack2() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - period3
var period = document.getElementById('period3');
period.addEventListener("mouseover", ChangeColor3);

function ChangeColor3() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - period3
var period = document.getElementById('period3');
period.addEventListener("mouseout", ChangeBack3);

function ChangeBack3() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - coma
var coma = document.getElementById('coma');
coma.addEventListener("mouseover", ChangeColor4);

function ChangeColor4() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - coma
var coma = document.getElementById('coma');
coma.addEventListener("mouseout", ChangeBack4);

function ChangeBack4() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
