function insrt(num) {
	$('.cal-disply').val($('.cal-disply').val() + num);
}
function eql() {
	$('.cal-disply').val(eval($('.cal-disply').val())); 
}
function c() {
	$('.cal-disply').val('');
}
function del() {
	value = $('.cal-disply').val();
	$('.cal-disply').val(value.substring(0, value.length - 1));
}