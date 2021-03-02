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
