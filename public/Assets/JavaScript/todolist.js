//check off specific Todos by clicking
$('ul').on('click', 'li', function() {
	// //if li is black turn it gray
	// //else turn it black
	// if ($(this).css('color') === 'rgb(0, 0, 0)') {
	// 	$(this).css({
	// 		color: 'gray',
	// 		textDecoration: 'Line-through'
	// 	});
	// 	/**
	//     * same way to do the above code but without object
	//     * this will make the code longer
	//     */
	// 	// $(this).css('color', 'gray');
	// 	// $(this).css('text-decoration', 'line-through');
	// } else {
	// 	$(this).css({
	// 		color: 'black',
	// 		textDecoration: 'none'
	// 	});
	// }

	//The entire above code is replace by toggling this class
	$(this).toggleClass('completed');
});

//click on x to delete todos
$('ul').on('click', 'span', function(event) {
	// $(this).remove(); // this will only remove the span element
	$(this).parent().fadeOut(function() {
		$(this).remove();
	}); //this will also remove the parent element of span, that is the list element enclosing the clicked span

	event.stopPropagation(); //from deleting todos video
});

//adding todos to the list
$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		var todoText = $(this).val();
		//create new li and add to ul
		//'prepend' will add the new list element/todo task at the starting/top of the list
		//we could also add new list element to the end of the list by using 'append'
		$('ul').prepend('<li><span><i class="fas fa-trash-alt"></i></span> ' + todoText + ' </li>');
		//clearing the input field after hitting enter
		$(this).val('');
	}
});

//Toggling input field
$('#toggle-form').click(function() {
	$("input[type='text']").fadeToggle();
});
