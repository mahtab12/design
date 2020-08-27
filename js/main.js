
$(document).ready( function(){
	var counter = 1;
	$('button#add').click( function(){
		counter = counter + 1;
		$('#counter').html(counter + 1);
	});

	$('#subs').click( function(){
		counter = counter - 1;
		$('#counter').html( counter - 1 );
	});

	$('#search-box-open').click( function(){
		$('.img-wrapper').fadeOut(2000);
	})
});

