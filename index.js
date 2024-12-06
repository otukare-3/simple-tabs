const clickTab = (event) => {
  if (event.target.getAttribute("class").includes("-active")) return;

  document
    .querySelector(".tab-header__item-active")
    .setAttribute("class", "tab-header__item tab-header__item-inactive");

  event.target.setAttribute(
    "class",
    "tab-header__item tab-header__item-active",
  );

  document.querySelector(".tab-content__item").innerHTML =
    event.target.innerHTML;
};

document.querySelectorAll(".tab-header__item").forEach((element) => {
  element.addEventListener("click", clickTab);
});
