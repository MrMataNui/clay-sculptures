$(() => {
	$('[id^=2019]').click(function() {
		onClick($(this));
	});

	$('[id$=-Inktober]').click(function() {
		inktober($(this).children(':first'));
	});

	const week = 1;
	$('[id^=Week]').each(function() {
		inktoberImg($(this), week, ['#Week', '']);
	});
	$('[id$=Inktober]').each(function() {
		inktoberImg($(this), week * 7, ['#day-', '-Inktober']);
	});

	// $('[id$=-year]').css('cursor', 'pointer');
	// $('[id$=-year]').click(function() { yearChange($(this)); });
});

function inktober(location) {
	const id = location.attr('id');

	$('[class^=Inktober-day]').removeClass('selected');
	$(`div.${id}`).addClass('selected');
}

function inktoberImg(location, max, getPlace) {
	let length = 0;
	for (let i = 0; i < max; i++) {
		let locationID = getPlace[0] + (i + 1) + getPlace[1];
		if (location.not(locationID).length) {
			length++;
		}
	}
	if (length === max) {
		location.css('display', 'none');
	}
}

function initialClass() {
	$('#months li').addClass('deselected');
	$('#2019jan').addClass('selected');
	$('#months li#2019jan').addClass('selected');
	$('#months li#2019jan').removeClass('deselected');
}

function onClick(location) {
	const id = location.attr('id');
	$('#dates div').removeClass('selected');
	$('#months li').removeClass('selected');

	$(`#${id}`).addClass('selected');
	$(`#months li#${id}`).addClass('selected');

	// $('#months li').addClass('deselected');
	// $(`#months li#${date}`).removeClass('deselected');
}

function yearChange(location) {
	const date = location.attr('id');
	const getYears = [2019, 2020];
	let number = $('#date2019 num').html();
	number = parseInt($.trim(number));
	switch (date) {
		case 'previous-year':
			if (getYears.includes(number - 1)) {
				number--;
			}
			break;
		case 'following-year':
			if (getYears.includes(number + 1)) {
				number++;
			}
			break;
	}
	$('#date2019 num').html(number);
}
