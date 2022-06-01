var swiper = new Swiper(".mySwiper", {
	spaceBetween: 30,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
  });


$(function(){
	$("#menuToggle").on("click", function(){
		$("#menu").toggleClass("menu-open");
		$("body").toggleClass("hidden");
	});
	$(".page_name").on("click", function(){
		$("#menu").toggleClass("menu-open");
		$("body").toggleClass("hidden");
	});
})(jQuery);