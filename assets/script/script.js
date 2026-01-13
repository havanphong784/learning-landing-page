const navMobile = document.getElementById("nav-mobile");
function onNavMobile() {
  navMobile.classList.add("active");
}
function hideNavMobile() {
  navMobile.classList.remove("active");
}
const linkNavMobile = navMobile.getElementsByTagName("a");
[...linkNavMobile].forEach((items) => {
  items.addEventListener("click", hideNavMobile);
  console.log(items);
});
