const elementosLeft = document.querySelectorAll("#containerLeft");

elementosLeft.forEach(function (left) {
	left.addEventListener("click", function () {
		left.classList.toggle("ativa");
	});
});
