	$(document).ready(function() {
	
$.fn.slideMenu = function(slideItem) {
	
			var contener = $(this);
			var slidingElement = $(slideItem); 
	
	
		var lineWidth = slidingElement.outerWidth(); 
	

		var firstLi = contener.children().first(); 
		
		var offsetFirst = firstLi.offset();  
		var widthFirst = firstLi.outerWidth(); 
		var firstCenter = ((offsetFirst.left + (widthFirst / 2)) - (lineWidth / 2)); 
		slidingElement.css({left: firstCenter + 'px'}); 
		
		
	
	contener.children().each(function(index){					
		
				$(this).hover(function(){    					
							var $this = $(this);
					
						
					var offset = $this.offset(); 
					var width = $this.outerWidth(); 
					var $itemCenter = (offset.left + (width / 2)) - (lineWidth / 2); 
			
		slidingElement.stop().animate(
		{left: $itemCenter  + 'px'}, 1000);
						slidingElement.children().stop().animate(
		{color: '#66bb6a'
		}, 600, "linear");
		},
		function() {
		slidingElement.stop().animate(
		{left: firstCenter + 'px'}, 1000);
				slidingElement.children().stop().animate(
		{color: '#000',
		}, 300, "linear");
		}
		);
		
		
		
	});
	
} //koniec funkcji


$('.menu').slideMenu('.line');
$('.menu2').slideMenu('.line2');
		});