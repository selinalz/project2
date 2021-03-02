//change mouse to circle
$(document).mousemove(function(e) {
	$('.circle').css({
		left: e.pageX,
		top: e.pageY
	});
})
var text = document.getElementsByClassName("text-coma")[0];
text.addEventListener("click", Show);

function Show() {
	var text = document.getElementsByClassName("text3")[0];
	text.style.opacity = "100%";
	var text2 = document.getElementsByClassName("text4")[0];
	text2.style.opacity = "100%";
	var text3 = document.getElementsByClassName("text5")[0];
	text3.style.opacity = "100%";
	var text4 = document.getElementsByClassName("text6")[0];
	text4.style.opacity = "100%";
	var text5 = document.getElementsByClassName("text7")[0];
	text5.style.opacity = "100%";
	var text6 = document.getElementsByClassName("text8")[0];
	text6.style.opacity = "100%";
	var text7 = document.getElementsByClassName("text9")[0];
	text7.style.opacity = "100%";
	var text8 = document.getElementsByClassName("text10")[0];
	text8.style.opacity = "100%";
	var text9 = document.getElementsByClassName("text11")[0];
	text9.style.opacity = "100%";
	var text10 = document.getElementsByClassName("text12")[0];
	text10.style.opacity = "100%";
	var text11 = document.getElementsByClassName("text13")[0];
	text11.style.opacity = "100%";
	var text12 = document.getElementsByClassName("text14")[0];
	text12.style.opacity = "100%";
}
// Change hover color of mouse - text-coma
var textc = document.getElementsByClassName("text-coma")[0];
textc.addEventListener("mouseover", ChangeColor);

function ChangeColor() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - text-coma
var textc = document.getElementsByClassName("text-coma")[0];
textc.addEventListener("mouseout", ChangeBack);

function ChangeBack() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - next
var next = document.getElementsByClassName("next")[0];
next.addEventListener("mouseover", ChangeColor2);

function ChangeColor2() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - next
var next = document.getElementsByClassName("next")[0];
next.addEventListener("mouseout", ChangeBack2);

function ChangeBack2() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - back
var back = document.getElementsByClassName("back")[0];
back.addEventListener("mouseover", ChangeColor3);

function ChangeColor3() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - back
var back = document.getElementsByClassName("back")[0];
back.addEventListener("mouseout", ChangeBack3);

function ChangeBack3() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
