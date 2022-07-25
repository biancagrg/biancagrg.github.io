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

// console.info(mottoElement);
// console.warn(mottoElement.innerHTML);

mottoElement.innerHTML = mottoElement.innerHTML + " @ " + jobTitle;

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

var activePage = "skills";

function showPage(nextPage) {
  hide(activePage);
  show(nextPage);
  document
    .querySelector(`a[data-page=${activePage}]`)
    .classList.remove("active");
  document.querySelector(`a[data-page=${nextPage}]`).classList.add("active");
  activePage = nextPage;
}

function initEvents() {
  document
    .getElementById("top-menu-bar")
    .addEventListener("click", function (e) {
      if (e.target.matches("a")) {
        var id = e.target.getAttribute("data-page");
        console.warn("click pe menu", id);
        showPage(id);
      }
    });
}

showPage(activePage);
initEvents();
