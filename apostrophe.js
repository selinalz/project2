//change mouse to circle
$(document).mousemove(function(e) {
	$('.circle').css({
		left: e.pageX,
		top: e.pageY
	});
})
// Hover over apostrophes to show text
var punct = document.getElementsByClassName("punct")[0];
punct.addEventListener("mouseover", Show);

function Show() {
	var text = document.getElementsByClassName("text3")[0];
	text.style.opacity = "100%";
}
// Hover over apostrophes to show text
var punct = document.getElementsByClassName("punct2")[0];
punct.addEventListener("mouseover", Show2);

function Show2() {
	var text = document.getElementsByClassName("text4")[0];
	text.style.opacity = "100%";
}
// Hover over apostrophes to show text
var punct = document.getElementsByClassName("punct3")[0];
punct.addEventListener("mouseover", Show3);

function Show3() {
	var text = document.getElementsByClassName("text5")[0];
	text.style.opacity = "100%";
}
// Hover over apostrophes to show text
var punct = document.getElementsByClassName("punct4")[0];
punct.addEventListener("mouseover", Show4);

function Show4() {
	var text = document.getElementsByClassName("text6")[0];
	text.style.opacity = "100%";
}
// Hover over apostrophes to show text
var punct = document.getElementsByClassName("punct5")[0];
punct.addEventListener("mouseover", Show5);

function Show5() {
	var text = document.getElementsByClassName("text7")[0];
	text.style.opacity = "100%";
}
// Hover over apostrophes to show text
var punct = document.getElementsByClassName("punct6")[0];
punct.addEventListener("mouseover", Show6);

function Show6() {
	var text = document.getElementsByClassName("text8")[0];
	text.style.opacity = "100%";
}
// Hover over apostrophes to show text
var punct = document.getElementsByClassName("punct7")[0];
punct.addEventListener("mouseover", Show7);

function Show7() {
	var text = document.getElementsByClassName("text9")[0];
	text.style.opacity = "100%";
}
// Hover over apostrophes to show text
var punct = document.getElementsByClassName("punct8")[0];
punct.addEventListener("mouseover", Show8);

function Show8() {
	var text = document.getElementsByClassName("text10")[0];
	text.style.opacity = "100%";
}
// Hover over apostrophes to show text
var punct = document.getElementsByClassName("punct9")[0];
punct.addEventListener("mouseover", Show9);

function Show9() {
	var text = document.getElementsByClassName("text11")[0];
	text.style.opacity = "100%";
}
// Hover over apostrophes to show text
var punct = document.getElementsByClassName("punct10")[0];
punct.addEventListener("mouseover", Show10);

function Show10() {
	var text = document.getElementsByClassName("text12")[0];
	text.style.opacity = "100%";
}
// Hover over apostrophes to show text
var punct = document.getElementsByClassName("punct11")[0];
punct.addEventListener("mouseover", Show11);

function Show11() {
	var text = document.getElementsByClassName("text13")[0];
	text.style.opacity = "100%";
}
// Hover over apostrophes to show text
var punct = document.getElementsByClassName("punct12")[0];
punct.addEventListener("mouseover", Show12);

function Show12() {
	var text = document.getElementsByClassName("text14")[0];
	text.style.opacity = "100%";
}
// Hover over text to hide text
var txt = document.getElementsByClassName("text3")[0];
txt.addEventListener("mouseover", Hide);

function Hide() {
	var text = document.getElementsByClassName("text3")[0];
	text.style.opacity = "0%";
}
// Hover over text to hide text
var txt = document.getElementsByClassName("text4")[0];
txt.addEventListener("mouseover", Hide2);

function Hide2() {
	var text = document.getElementsByClassName("text4")[0];
	text.style.opacity = "0%";
}
// Hover over text to hide text
var txt = document.getElementsByClassName("text5")[0];
txt.addEventListener("mouseover", Hide3);

function Hide3() {
	var text = document.getElementsByClassName("text5")[0];
	text.style.opacity = "0%";
}
// Hover over text to hide text
var txt = document.getElementsByClassName("text6")[0];
txt.addEventListener("mouseover", Hide4);

function Hide4() {
	var text = document.getElementsByClassName("text6")[0];
	text.style.opacity = "0%";
}
// Hover over text to hide text
var txt = document.getElementsByClassName("text7")[0];
txt.addEventListener("mouseover", Hide5);

function Hide5() {
	var text = document.getElementsByClassName("text7")[0];
	text.style.opacity = "0%";
}
// Hover over text to hide text
var txt = document.getElementsByClassName("text8")[0];
txt.addEventListener("mouseover", Hide6);

function Hide6() {
	var text = document.getElementsByClassName("text8")[0];
	text.style.opacity = "0%";
}
// Hover over text to hide text
var txt = document.getElementsByClassName("text9")[0];
txt.addEventListener("mouseover", Hide7);

function Hide7() {
	var text = document.getElementsByClassName("text9")[0];
	text.style.opacity = "0%";
}
// Hover over text to hide text
var txt = document.getElementsByClassName("text10")[0];
txt.addEventListener("mouseover", Hide8);

function Hide8() {
	var text = document.getElementsByClassName("text10")[0];
	text.style.opacity = "0%";
}
// Hover over text to hide text
var txt = document.getElementsByClassName("text11")[0];
txt.addEventListener("mouseover", Hide9);

function Hide9() {
	var text = document.getElementsByClassName("text11")[0];
	text.style.opacity = "0%";
}
// Hover over text to hide text
var txt = document.getElementsByClassName("text12")[0];
txt.addEventListener("mouseover", Hide10);

function Hide10() {
	var text = document.getElementsByClassName("text12")[0];
	text.style.opacity = "0%";
}
// Hover over text to hide text
var txt = document.getElementsByClassName("text13")[0];
txt.addEventListener("mouseover", Hide11);

function Hide11() {
	var text = document.getElementsByClassName("text13")[0];
	text.style.opacity = "0%";
}
// Hover over text to hide text
var txt = document.getElementsByClassName("text14")[0];
txt.addEventListener("mouseover", Hide12);

function Hide12() {
	var text = document.getElementsByClassName("text14")[0];
	text.style.opacity = "0%";
}
// Change hover color of mouse - punct
var punct = document.getElementsByClassName("punct")[0];
punct.addEventListener("mouseover", ChangeColor);

function ChangeColor() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - punct
var punct = document.getElementsByClassName("punct")[0];
punct.addEventListener("mouseout", ChangeBack);

function ChangeBack() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - punct2
var punct = document.getElementsByClassName("punct2")[0];
punct.addEventListener("mouseover", ChangeColor2);

function ChangeColor2() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - punct2
var punct = document.getElementsByClassName("punct2")[0];
punct.addEventListener("mouseout", ChangeBack2);

function ChangeBack2() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - punct3
var punct = document.getElementsByClassName("punct3")[0];
punct.addEventListener("mouseover", ChangeColor3);

function ChangeColor3() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - punct3
var punct = document.getElementsByClassName("punct3")[0];
punct.addEventListener("mouseout", ChangeBack3);

function ChangeBack3() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - punct4
var punct = document.getElementsByClassName("punct4")[0];
punct.addEventListener("mouseover", ChangeColor4);

function ChangeColor4() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - punct4
var punct = document.getElementsByClassName("punct4")[0];
punct.addEventListener("mouseout", ChangeBack4);

function ChangeBack4() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - punct5
var punct = document.getElementsByClassName("punct5")[0];
punct.addEventListener("mouseover", ChangeColor5);

function ChangeColor5() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - punct5
var punct = document.getElementsByClassName("punct5")[0];
punct.addEventListener("mouseout", ChangeBack5);

function ChangeBack5() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - punct6
var punct = document.getElementsByClassName("punct6")[0];
punct.addEventListener("mouseover", ChangeColor6);

function ChangeColor6() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - punct6
var punct = document.getElementsByClassName("punct6")[0];
punct.addEventListener("mouseout", ChangeBack6);

function ChangeBack6() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - punct7
var punct = document.getElementsByClassName("punct7")[0];
punct.addEventListener("mouseover", ChangeColor7);

function ChangeColor7() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - punct7
var punct = document.getElementsByClassName("punct7")[0];
punct.addEventListener("mouseout", ChangeBack7);

function ChangeBack7() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - punct8
var punct = document.getElementsByClassName("punct8")[0];
punct.addEventListener("mouseover", ChangeColor8);

function ChangeColor8() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - punct8
var punct = document.getElementsByClassName("punct8")[0];
punct.addEventListener("mouseout", ChangeBack8);

function ChangeBack8() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - punct9
var punct = document.getElementsByClassName("punct9")[0];
punct.addEventListener("mouseover", ChangeColor9);

function ChangeColor9() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - punct9
var punct = document.getElementsByClassName("punct9")[0];
punct.addEventListener("mouseout", ChangeBack9);

function ChangeBack9() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - punct10
var punct = document.getElementsByClassName("punct10")[0];
punct.addEventListener("mouseover", ChangeColor10);

function ChangeColor10() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - punct10
var punct = document.getElementsByClassName("punct10")[0];
punct.addEventListener("mouseout", ChangeBack10);

function ChangeBack10() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - punct11
var punct = document.getElementsByClassName("punct11")[0];
punct.addEventListener("mouseover", ChangeColor11);

function ChangeColor11() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered -punct11
var punct = document.getElementsByClassName("punct11")[0];
punct.addEventListener("mouseout", ChangeBack11);

function ChangeBack11() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - punct12
var punct = document.getElementsByClassName("punct12")[0];
punct.addEventListener("mouseover", ChangeColor12);

function ChangeColor12() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - punct12
var question = document.getElementsByClassName("punct12")[0];
question.addEventListener("mouseout", ChangeBack12);

function ChangeBack12() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - period_bg
var period = document.getElementsByClassName("period_bg")[0];
period.addEventListener("mouseover", ChangeColor13);

function ChangeColor13() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - period_bg
var period = document.getElementsByClassName("period_bg")[0];
period.addEventListener("mouseout", ChangeBack13);

function ChangeBack13() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - back
var back = document.getElementsByClassName("back")[0];
back.addEventListener("mouseover", ChangeColor14);

function ChangeColor14() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - back
var back = document.getElementsByClassName("back")[0];
back.addEventListener("mouseout", ChangeBack14);

function ChangeBack14() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - text3
var text = document.getElementsByClassName("text3")[0];
text.addEventListener("mouseover", ChangeColor15);

function ChangeColor15() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - text3
var text = document.getElementsByClassName("text3")[0];
text.addEventListener("mouseout", ChangeBack15);

function ChangeBack15() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - text4
var text = document.getElementsByClassName("text4")[0];
text.addEventListener("mouseover", ChangeColor16);

function ChangeColor16() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - text4
var text = document.getElementsByClassName("text4")[0];
text.addEventListener("mouseout", ChangeBack16);

function ChangeBack16() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - text5
var text = document.getElementsByClassName("text5")[0];
text.addEventListener("mouseover", ChangeColor17);

function ChangeColor17() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - text5
var text = document.getElementsByClassName("text5")[0];
text.addEventListener("mouseout", ChangeBack17);

function ChangeBack17() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - text6
var text = document.getElementsByClassName("text6")[0];
text.addEventListener("mouseover", ChangeColor18);

function ChangeColor18() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - text6
var text = document.getElementsByClassName("text6")[0];
text.addEventListener("mouseout", ChangeBack18);

function ChangeBack18() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - text7
var text = document.getElementsByClassName("text7")[0];
text.addEventListener("mouseover", ChangeColor19);

function ChangeColor19() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - text7
var text = document.getElementsByClassName("text7")[0];
text.addEventListener("mouseout", ChangeBack19);

function ChangeBack19() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - text8
var text = document.getElementsByClassName("text8")[0];
text.addEventListener("mouseover", ChangeColor20);

function ChangeColor20() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - text8
var text = document.getElementsByClassName("text8")[0];
text.addEventListener("mouseout", ChangeBack20);

function ChangeBack20() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - text9
var text = document.getElementsByClassName("text9")[0];
text.addEventListener("mouseover", ChangeColor21);

function ChangeColor21() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - text9
var text = document.getElementsByClassName("text9")[0];
text.addEventListener("mouseout", ChangeBack21);

function ChangeBack21() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - text10
var text = document.getElementsByClassName("text10")[0];
text.addEventListener("mouseover", ChangeColor22);

function ChangeColor22() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - text10
var text = document.getElementsByClassName("text10")[0];
text.addEventListener("mouseout", ChangeBack22);

function ChangeBack22() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - text11
var text = document.getElementsByClassName("text11")[0];
text.addEventListener("mouseover", ChangeColor23);

function ChangeColor23() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - text11
var text = document.getElementsByClassName("text11")[0];
text.addEventListener("mouseout", ChangeBack23);

function ChangeBack23() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - text12
var text = document.getElementsByClassName("text12")[0];
text.addEventListener("mouseover", ChangeColor24);

function ChangeColor24() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - text12
var text = document.getElementsByClassName("text12")[0];
text.addEventListener("mouseout", ChangeBack24);

function ChangeBack24() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - text13
var text = document.getElementsByClassName("text13")[0];
text.addEventListener("mouseover", ChangeColor25);

function ChangeColor25() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - text13
var text = document.getElementsByClassName("text13")[0];
text.addEventListener("mouseout", ChangeBack25);

function ChangeBack25() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
// Change hover color of mouse - text14
var text = document.getElementsByClassName("text14")[0];
text.addEventListener("mouseover", ChangeColor26);

function ChangeColor26() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "black";
}
// Change color of mouse back when not hovered - text14
var text = document.getElementsByClassName("text14")[0];
text.addEventListener("mouseout", ChangeBack26);

function ChangeBack26() {
	var c = document.getElementsByClassName("circle")[0];
	c.style.backgroundColor = "#8D73EA";
}
