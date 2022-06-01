/* МЕНЮ */
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