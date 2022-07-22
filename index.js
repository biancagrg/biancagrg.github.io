// console.info(2);
// console.debug(2 + 3);
// console.warn(6 * 3 - 10);
// console.error("app started");

var myName = "Bianca";
var age = 19;

// console.info("My name is " + myName + ", I'm " + age + " years old.");
age = 30;
// console.info("My name is " + myName + ", I'm " + age + " years old.");
age = 31;
// console.info("My name is " + myName + ", I'm " + age + " years old.");

var jobTitle = "<span>Fast</span>TrackIT";
var mottoElement = document.getElementById("motto");

console.info(mottoElement);
console.warn(mottoElement.innerHTML);

mottoElement.innerHTML = mottoElement.innerHTML + " @ " + jobTitle;

function hide(id) {
  console.info("hide ", id);
  document.getElementById(id).style.display = "none";
}

function show(id) {
  console.warn("show", id);
  document.getElementById(id).style.display = "block";
}

function hideAllPages() {
  hide("home");
  hide("skills");
  hide("projects");
  hide("languages");
}

function showPage(id) {
  console.warn("please show me this page", id);
  hideAllPages();
  show(id);
}

var clickedElement = "menu-home";

function menuHover(id) {
  document.getElementById(id).style.color = "#006400";
  document.getElementById(id).style.background = "white";
  document.getElementById(id).style.borderRadius = "0.3em";
  document.getElementById(id).style.transition = "0.5s";
  document.getElementById(id).style.border = "1px solid #fff";
}

function menuStopHover(id) {
  if (clickedElement != id) {
    document.getElementById(id).style.color = "#fff";
    document.getElementById(id).style.background = "#006400";
    document.getElementById(id).style.border = "#006400";
  }
}

function menuClick(id) {
  var lastClickedElement = clickedElement;
  clickedElement = id;
  menuStopHover(lastClickedElement);
  menuHover(id);
}

showPage("home");
menuClick("menu-home");
