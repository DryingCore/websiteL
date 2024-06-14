const elements = document.getElementById("containerLeft");

elements.forEach(function (item) {
	item.addEventListener("click", function () {
		item.classList.toggle("active");
	});
});
