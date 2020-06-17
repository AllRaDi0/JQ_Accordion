$(document).ready(function () {
	$(".accordion-item__title").click(function () {
		$(this).next(".accordion-item__content").slideToggle();
	});
});
