const fontIcons = document.querySelectorAll(".menu-icon");

fontIcons.forEach(function(item, key) {
  item.addEventListener("mouseover", Iconspin.bind(this, item));
  item.addEventListener("mouseout", Iconspinner.bind(this, item));
});
function Iconspin(element) {
  if (element) {
    element.classList.add("spinny");
  }
}

function Iconspinner(element) {
  if (element) {
    element.classList.remove("spinny");
  }
}

let liItems = document.querySelectorAll("li.item");

liItems.forEach(function(item) {
  item.addEventListener("mouseenter", borders.bind(this, item));
  item.addEventListener("mouseleave", removeBorders.bind(this, item));
});

function borders(el) {
  var color = (el.style.borderRight = "5px solid #2f4f4f");
}

function removeBorders(el) {
  var color = (el.style.borderRight = "none");
}

const navigationItems = document.querySelectorAll("#menu .item a");

navigationItems.forEach(item => {
  item.addEventListener("click", displayContent.bind(this, item));
});

function displayContent(selectedItem) {
  const allTemplates = document.querySelectorAll("#contentContainer > div");
  allTemplates.forEach(item => {
    item.classList.add("hide");
  });

  const templateClass = selectedItem.classList;
  const templateToDisplay = document.querySelector(
    `#contentContainer .${templateClass}`
  );

  templateToDisplay.classList.remove("hide");
  document.querySelector("#contentContainer").classList.remove("hide");
}

const navigationAbout = document.querySelectorAll(".aboutInfo .about-li a");
/*console.log(navigationAbout);*/

navigationAbout.forEach(item => {
  item.addEventListener("click", displayContents.bind(this, item));
});

function displayContents(item) {
  const abtTemplate = document.querySelectorAll("#infoContainer > div");

  abtTemplate.forEach(item => {
    item.classList.add("hide");
  });
  const abtTemplates = item.classList;
  console.log(abtTemplates);
  const abtTemplateToDisplay = document.querySelector(
    `#infoContainer .${abtTemplates}`
  );

  abtTemplateToDisplay.classList.remove("hide");
  document.querySelector("#infoContainer").classList.remove("hide");
}
