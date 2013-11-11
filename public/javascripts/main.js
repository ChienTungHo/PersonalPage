$(document).ready(function(){
		$('.modal-btn').on('click',function(e){
			$('#'+$(this).data('modal')).modal('toggle');
			$('#'+$(this).data('modal')).modal().css({
                		'top': function () {
					console.log(window.pageYOffset);
                    			return window.pageYOffset;
                		},
				'margin-top': '30px',
            		});
			//console.log($('#'+$(this).data('modal')).modal());
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
