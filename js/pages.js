const pager = document.querySelectorAll(".pager");
pager.forEach((elem) => {
	elem.addEventListener("click", function (e) {
		elem.classList.toggle("active");
	});
});
