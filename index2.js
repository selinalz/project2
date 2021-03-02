//change mouse to circle
$(document).mousemove(function(e) {
	$('.circle').css({
		left: e.pageX,
		top: e.pageY
	});
})
// Change hover color of mouse - question
var que = document.getElementsByClassName("question")[0];
que.addEventListener("mouseover", ChangeColor);

function ChangeColor() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - question
var que = document.getElementsByClassName("question")[0];
que.addEventListener("mouseout", ChangeBack);

function ChangeBack() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - exclamation
var ex = document.getElementsByClassName("exclamation")[0];
ex.addEventListener("mouseover", ChangeColor2);

function ChangeColor2() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - exclamation
var past = document.getElementsByClassName("exclamation")[0];
past.addEventListener("mouseout", ChangeBack2);

function ChangeBack2() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - dash
var past = document.getElementsByClassName("dash")[0];
past.addEventListener("mouseover", ChangeColor3);

function ChangeColor3() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - dash
var past = document.getElementsByClassName("dash")[0];
past.addEventListener("mouseout", ChangeBack3);

function ChangeBack3() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - semicolon
var past = document.getElementsByClassName("semicolon")[0];
past.addEventListener("mouseover", ChangeColor4);

function ChangeColor4() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - semicolon
var past = document.getElementsByClassName("semicolon")[0];
past.addEventListener("mouseout", ChangeBack4);

function ChangeBack4() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - apostrophe
var past = document.getElementsByClassName("apostrophe")[0];
past.addEventListener("mouseover", ChangeColor5);

function ChangeColor5() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - apostrophe
var past = document.getElementsByClassName("apostrophe")[0];
past.addEventListener("mouseout", ChangeBack5);

function ChangeBack5() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - ellipsis
var past = document.getElementsByClassName("ellipsis")[0];
past.addEventListener("mouseover", ChangeColor6);

function ChangeColor6() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - ellipsis
var past = document.getElementsByClassName("ellipsis")[0];
past.addEventListener("mouseout", ChangeBack6);

function ChangeBack6() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - period
var past = document.getElementsByClassName("period")[0];
past.addEventListener("mouseover", ChangeColor7);

function ChangeColor7() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - period
var past = document.getElementsByClassName("period")[0];
past.addEventListener("mouseout", ChangeBack7);

function ChangeBack7() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - colon
var past = document.getElementsByClassName("colon")[0];
past.addEventListener("mouseover", ChangeColor8);

function ChangeColor8() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - colon
var past = document.getElementsByClassName("colon")[0];
past.addEventListener("mouseout", ChangeBack8);

function ChangeBack8() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - coma
var past = document.getElementsByClassName("coma")[0];
past.addEventListener("mouseover", ChangeColor9);

function ChangeColor9() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - coma
var past = document.getElementsByClassName("coma")[0];
past.addEventListener("mouseout", ChangeBack9);

function ChangeBack9() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
