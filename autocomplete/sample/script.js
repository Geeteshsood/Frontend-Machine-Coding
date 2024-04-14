const grandParent = document.getElementById("grandParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandParent.addEventListener("click", function (e) {
  console.log("grand parent clicked");
});

parent.addEventListener("click", function (e) {
  e.stopImmediatePropagation();
  //   e.stopPropagation();
  console.log("parent clicked");
});

parent.addEventListener("click", function (e) {
  console.log("another parent event listener");
});

child.addEventListener("click", function (e) {
  console.log("child clicked");
});

const data = (async () => await fetch())();
