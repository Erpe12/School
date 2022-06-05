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


var _emv = _emv || [];
_emv['campaign'] = 'a7c3525b2c5e247a26a774c7';

(function() {
	var em = document.createElement('script'); em.type = 'text/javascript'; em.async = true;
	em.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'leadback.ru/js/leadback.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(em, s);
})();
