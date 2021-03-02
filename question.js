//change mouse to circle
$(document).mousemove(function(e) {
	$('.circle').css({
		left: e.pageX,
		top: e.pageY
	});
})
// Press questionmark to show text
var question = document.getElementsByClassName("questionmark")[0];
question.addEventListener("click", Show);

function Show() {
	var text = document.getElementsByClassName("questionmark")[0];
	text.style.opacity = "20%";
	var text2 = document.getElementsByClassName("text2")[0];
	text2.style.opacity = "100%";
}
// Press text to show more text2
var txt = document.getElementsByClassName("text2")[0];
txt.addEventListener("click", Show2);

function Show2() {
	var text = document.getElementsByClassName("questionmark")[0];
	text.style.opacity = "0%";
	var text2 = document.getElementsByClassName("text3")[0];
	text2.style.opacity = "100%";
	var text3 = document.getElementsByClassName("question_bg2")[0];
	text3.style.opacity = "20%";
}
// Press text to show more text3
var txt = document.getElementsByClassName("text3")[0];
txt.addEventListener("click", Show3);

function Show3() {
	var text = document.getElementsByClassName("text4")[0];
	text.style.opacity = "100%";
	var text2 = document.getElementsByClassName("question_bg2")[0];
	text2.style.opacity = "0%";
}
// Change hover color of mouse - questionmark
var question = document.getElementsByClassName("questionmark")[0];
question.addEventListener("mouseover", ChangeColor);

function ChangeColor() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - questionmark
var question = document.getElementsByClassName("questionmark")[0];
question.addEventListener("mouseout", ChangeBack);

function ChangeBack() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - text2
var txt = document.getElementsByClassName("text2")[0];
txt.addEventListener("mouseover", ChangeColor2);

function ChangeColor2() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - text2
var txt = document.getElementsByClassName("text2")[0];
txt.addEventListener("mouseout", ChangeBack2);

function ChangeBack2() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - exclamation_bg
var ex = document.getElementsByClassName("exclamation_bg")[0];
ex.addEventListener("mouseover", ChangeColor3);

function ChangeColor3() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - exclamation_bg
var ex = document.getElementsByClassName("exclamation_bg")[0];
ex.addEventListener("mouseout", ChangeBack3);

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
