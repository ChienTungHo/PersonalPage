function detectmob() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}

$(document).ready(function(){
		
                setTimeout(function(){
			if(!detectmob()){
                        	$('#skel-panels-defaultWrapper').remove();
				$('#skel-panels-fixedWrapper').remove();
			}
		}, 1000);
		
                $('.modal-btn').on('click',function(e){
			$('#skel-panels-pageWrapper').removeAttr('style');
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
