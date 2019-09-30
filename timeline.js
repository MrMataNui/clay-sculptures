$(() => {
	// $().timeline({ orientation: 'vertical', issuesSpeed: 300, datesSpeed: 100, arrowKeys: 'true', startAt: 3 });

	$('a[href="#2019jan"]').click(() => onClick('2019jan'));
	$('a[href="#2019mar"]').click(() => onClick('2019mar'));
	$('a[href="#2019may"]').click(() => onClick('2019may'));
	$('a[href="#2019aug"]').click(() => onClick('2019aug'));
	$('a[href="#2019sep"]').click(() => onClick('2019sep'));

	$('#previous-year').click(() => yearChange('previous-year'));
	$('#following-year').click(() => yearChange('following-year'));
});

function onClick(date) {
	$('#dates a').removeClass('selected');
	$('#issues li').removeClass('selected');

	$(`a[href="#${date}"]`).addClass('selected');
	$(`#issues li#${date}`).addClass('selected');
	// $('#issues li').addClass('deselected');
	// $(`#issues li#${date}`).removeClass('deselected');
}

function yearChange(date) {
	const getYears = [2019];
	let number = $('#date2019 num').html();
	number = parseInt($.trim(number));
	switch (date) {
		case 'previous-year':		if (getYears.includes(number - 1)) { number--; }		break;
		case 'following-year':	if (getYears.includes(number + 1)) { number++; }	break;
	}
	$('#date2019 num').html(number);
}
