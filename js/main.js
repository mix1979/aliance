const productionImage = document.querySelectorAll(".right_item_img");
productionImage.forEach((elem) => {
	elem.addEventListener("mouseover", function (e) {
		e.target.setAttribute("src", "./../img/burger_color.png");
	});
});
productionImage.forEach((elem) => {
	elem.addEventListener("mouseout", function (e) {
		e.target.setAttribute("src", "./../img/burger.png");
	});
});

const contracts = document.querySelector("#contracts_link");
const dropdown = document.querySelector(".dropdown_menu");
contracts.addEventListener("mouseover", function () {
	dropdown.classList.remove("none");
});
document.addEventListener("click", function (e) {
	dropdown.classList.add("none");
});

const popup = document.querySelector(".popup_menu");
const consult = document.querySelector(".header_btn");
consult.addEventListener("click", function () {
	popup.classList.remove("none");
});

const cross = document.querySelector(".popup_cross");
cross.addEventListener("click", function () {
	popup.classList.add("none");
});

const btn = document.querySelector("#btn");
const finalPopup = document.querySelector(".popup_final");
btn.addEventListener("click", function () {
	popup.classList.add("none");
	finalPopup.classList.remove("none");
});

const finalCross = document.querySelector(".final_cross");
finalCross.addEventListener("click", function () {
	finalPopup.classList.add("none");
});

const finalBtn = document.querySelector("#btn_final");
finalBtn.addEventListener("click", function () {
	finalPopup.classList.add("none");
});

const shemaItemLink = document.querySelector(".shema_item_link");
shemaItemLink.addEventListener("click", function () {
	popup.classList.remove("none");
});

const callbackForm = document.querySelector(".callback_form");
callbackForm.addEventListener("submit", function () {
	popup.classList.remove("none");
	document.querySelector("#name").value =
		document.querySelector("#callback_name").value;
	document.querySelector("#phone").value =
		document.querySelector("#callback_phone").value;
});
