$(() => {
	// initialClass();

	$('[id^=2019]').click(function() {
		onClick($(this));
	});

	$('[class^=Inktober-day]').css('display', 'none');
	$('[id^=Inktober-day]').click(function() {
		inktober($(this));
	});

	const week = 1;
	$('[id^=Week]').each(function() {
		inktoberWeeks($(this), week);
	});
	$('[id$=Inktober]').each(function() {
		inktoberDays($(this), week);
	});

	// $('[id$=-year]').css('cursor', 'pointer');
	// $('[id$=-year]').click(function() { yearChange($(this)); });
});

function inktober(location) {
	const id = location.attr('id');
	const classDisplay = $(`[class^=${id}]`).css('display');
	const display = classDisplay === 'none' ? 'block' : 'none';
	$('[class^=Inktober-day]').css('display', 'none');
	$(`div.${id}`).css('display', display);
}

function inktoberWeeks(location, week) {
	let length = 0;
	for (let i = 0; i < week; i++) {
		if (location.not(`#Week${i + 1}`).length) {
			length++;
		}
	}
	if (length === week) {
		location.css('display', 'none');
	}
}

function inktoberDays(location, week) {
	const max = week * 7;
	let length = 0;
	for (let i = 0; i < max; i++) {
		if (location.not(`#day-${i + 1}-Inktober`).length) {
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
