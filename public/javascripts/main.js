$(document).ready(function(){
				
		$('.modal-btn').on('click',function(){
			$('#'+$(this).data('modal')).modal('toggle');
			$('.modal-backdrop').removeClass('modal-backdrop');
		});

		$('a[href^="#"]').on('click',function (e) {
			e.preventDefault();

			var target = this.hash,
			$target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
				}, 900, 'swing', function () {
				window.location.hash = target;
				});
			});
});
