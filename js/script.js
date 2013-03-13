$('ul.nav li').on('click', function(e){
	e.preventDefault();
	$('ul.nav li').removeClass('active');
	$(e.target).closest('li').addClass('active');

	$('.content').addClass('hidden');
	var tabName = $(e.target).data('tab');
	$('#' + tabName).removeClass('hidden');
})