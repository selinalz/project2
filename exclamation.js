//change mouse to circle
$(document).mousemove(function(e) {
	$('.circle').css({
		left: e.pageX,
		top: e.pageY
	});
})
// Press punctuation message to show some text
var ex = document.getElementsByClassName("ex")[0];
ex.addEventListener("click", Show);

function Show() {
	var text = document.getElementsByClassName("text")[0];
	text.style.opacity = "100%";
}
var quo = document.getElementsByClassName("quo")[0];
quo.addEventListener("click", Show2);

function Show2() {
	var text = document.getElementsByClassName("text")[0];
	text.style.opacity = "100%";
}
var quo = document.getElementsByClassName("quo2")[0];
quo.addEventListener("click", Show3);

function Show3() {
	var text = document.getElementsByClassName("text")[0];
	text.style.opacity = "100%";
}
var quo = document.getElementsByClassName("quo3")[0];
quo.addEventListener("click", Show4);

function Show4() {
	var text = document.getElementsByClassName("text")[0];
	text.style.opacity = "100%";
}
// Press punctuation message to show all text
var txt = document.getElementsByClassName("text")[0];
txt.addEventListener("click", Show5);

function Show5() {
	var punct = document.getElementsByClassName("ex")[0];
	punct.style.opacity = "0%";
	var punct2 = document.getElementsByClassName("quo")[0];
	punct2.style.opacity = "0%";
	var punct3 = document.getElementsByClassName("quo2")[0];
	punct3.style.opacity = "0%";
	var punct4 = document.getElementsByClassName("quo3")[0];
	punct4.style.opacity = "0%";
	var text = document.getElementsByClassName("text2")[0];
	text.style.opacity = "100%";
	var text = document.getElementsByClassName("text3")[0];
	text.style.opacity = "100%";
	var text = document.getElementsByClassName("text4")[0];
	text.style.opacity = "100%";
	var text = document.getElementsByClassName("text5")[0];
	text.style.opacity = "100%";
}
// Press punctuation message to show some text
var quo = document.getElementsByClassName("quo4")[0];
quo.addEventListener("click", Show6);

function Show6() {
	var text = document.getElementsByClassName("text6")[0];
	text.style.opacity = "100%";
}
var ex = document.getElementsByClassName("ex2")[0];
ex.addEventListener("click", Show7);

function Show7() {
	var text = document.getElementsByClassName("text6")[0];
	text.style.opacity = "100%";
}
// Press punctuation message to show full text
var txt = document.getElementsByClassName("text6")[0];
txt.addEventListener("click", Show8);

function Show8() {
	var text = document.getElementsByClassName("quo4")[0];
	text.style.opacity = "0%";
	var text = document.getElementsByClassName("ex2")[0];
	text.style.opacity = "0%";
	var text = document.getElementsByClassName("text7")[0];
	text.style.opacity = "100%";
	var text = document.getElementsByClassName("text8")[0];
	text.style.opacity = "100%";
}
// Change hover color of mouse - ex
var ex = document.getElementsByClassName("ex")[0];
ex.addEventListener("mouseover", ChangeColor);

function ChangeColor() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - ex
var ex = document.getElementsByClassName("ex")[0];
ex.addEventListener("mouseout", ChangeBack);

function ChangeBack() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - quo
var quo = document.getElementsByClassName("quo")[0];
quo.addEventListener("mouseover", ChangeColor2);

function ChangeColor2() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - quo
var quo = document.getElementsByClassName("quo")[0];
quo.addEventListener("mouseout", ChangeBack2);

function ChangeBack2() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - quo2
var quo = document.getElementsByClassName("quo2")[0];
quo.addEventListener("mouseover", ChangeColor3);

function ChangeColor3() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - quo2
var quo = document.getElementsByClassName("quo2")[0];
quo.addEventListener("mouseout", ChangeBack3);

function ChangeBack3() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - quo3
var quo = document.getElementsByClassName("quo3")[0];
quo.addEventListener("mouseover", ChangeColor4);

function ChangeColor4() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - quo3
var quo = document.getElementsByClassName("quo3")[0];
quo.addEventListener("mouseout", ChangeBack4);

function ChangeBack4() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - text
var txt = document.getElementsByClassName("text")[0];
txt.addEventListener("mouseover", ChangeColor5);

function ChangeColor5() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - text
var txt = document.getElementsByClassName("text")[0];
txt.addEventListener("mouseout", ChangeBack5);

function ChangeBack5() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - quo4
var quo = document.getElementsByClassName("quo4")[0];
quo.addEventListener("mouseover", ChangeColor6);

function ChangeColor6() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - quo4
var quo = document.getElementsByClassName("quo4")[0];
quo.addEventListener("mouseout", ChangeBack6);

function ChangeBack6() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - ex2
var ex = document.getElementsByClassName("ex2")[0];
ex.addEventListener("mouseover", ChangeColor7);

function ChangeColor7() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - ex2
var ex = document.getElementsByClassName("ex2")[0];
ex.addEventListener("mouseout", ChangeBack7);

function ChangeBack7() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - text6
var txt = document.getElementsByClassName("text6")[0];
txt.addEventListener("mouseover", ChangeColor8);

function ChangeColor8() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - text6
var txt = document.getElementsByClassName("text6")[0];
txt.addEventListener("mouseout", ChangeBack8);

function ChangeBack8() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - period_bg
var period = document.getElementsByClassName("period_bg")[0];
period.addEventListener("mouseover", ChangeColor9);

function ChangeColor9() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - period_bg
var period = document.getElementsByClassName("period_bg")[0];
period.addEventListener("mouseout", ChangeBack9);

function ChangeBack9() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - back
var back = document.getElementsByClassName("back")[0];
back.addEventListener("mouseover", ChangeColor10);

function ChangeColor10() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - back
var back = document.getElementsByClassName("back")[0];
back.addEventListener("mouseout", ChangeBack10);

function ChangeBack10() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
