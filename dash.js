//change mouse to circle
$(document).mousemove(function(e) {
	$('.circle').css({
		left: e.pageX,
		top: e.pageY
	});
})
// Press punctuation message to show text
var dash = document.getElementsByClassName("dash_bg")[0];
dash.addEventListener("click", Show);

function Show() {
	var text = document.getElementsByClassName("text")[0];
	text.style.opacity = "100%";
}
// Press punctuation message to show text
var period = document.getElementsByClassName("period_bg")[0];
period.addEventListener("click", Show2);

function Show2() {
	var text2 = document.getElementsByClassName("text2")[0];
	text2.style.opacity = "100%";
}
// Change hover color of mouse - period_bg
var period = document.getElementsByClassName("period_bg")[0];
period.addEventListener("mouseover", ChangeColor);

function ChangeColor() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - period_bg
var period = document.getElementsByClassName("period_bg")[0];
period.addEventListener("mouseout", ChangeBack);

function ChangeBack() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - dash_bg
var dash = document.getElementsByClassName("dash_bg")[0];
dash.addEventListener("mouseover", ChangeColor2);

function ChangeColor2() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - dash_bg
var dash = document.getElementsByClassName("dash_bg")[0];
dash.addEventListener("mouseout", ChangeBack2);

function ChangeBack2() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - apostrophe_bg
var apo = document.getElementsByClassName("apostrophe_bg")[0];
apo.addEventListener("mouseover", ChangeColor3);

function ChangeColor3() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - apostrophe_bg
var apo = document.getElementsByClassName("apostrophe_bg")[0];
apo.addEventListener("mouseout", ChangeBack3);

function ChangeBack3() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - back
var back = document.getElementsByClassName("back")[0];
back.addEventListener("mouseover", ChangeColor4);

function ChangeColor4() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - back
var back = document.getElementsByClassName("back")[0];
back.addEventListener("mouseout", ChangeBack4);

function ChangeBack4() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
