$(() => {
	$('[id^=2019]').click(function() {
		const id = $(this).attr('id');
		$('#dates div').removeClass('selected');
		$('#months li').removeClass('selected');
		$(`#${id}`).addClass('selected');
		$(`#months li#${id}`).addClass('selected');
	});

	$('[id$=-Inktober]').click(function() {
		const id = $(this).children(':first').attr('id');
		$('[class^=Inktober-day]').removeClass('selected');
		$(`div.${id}`).addClass('selected');
	});

	const weeks = 2;
	const days = weeks * 7;

	$('[id^=Week]').each(function() {
		const id = $(this).attr('id');
		let weekRegex;

		for (let i = 0; i < weeks; i++) { weekRegex = RegExp(`^Week${i + 1}`); }
		if (weekRegex.test(id)) { $(this).before('<br />'); }
	});
	$('[id^=Week]').each(function() { inktoberImg($(this), weeks, ['#Week', '']); });
	$('[id$=Inktober]').each(function() { inktoberImg($(this), days, ['#day-', '-Inktober']); });

	/*
 	$('[id$=-year]').click(function() {
		const date = $(this).attr('id'); const getYears = [2019, 2020];
		let getNumber = $('#date2019 num').html();
		getNumber = parseInt($.trim(getNumber));
		switch (date) {
			case 'previous-year': if (getYears.includes(getNumber - 1)) { getNumber--; } break;
			case 'following-year': if (getYears.includes(getNumber + 1)) { getNumber++; } break;
		}
		$('#date2019 num').html(getNumber);
	});
	*/
});

function inktoberImg(location, max, getPlace) {
	let length = 0;
	for (let i = 0; i < max; i++) {
		let locationID = getPlace[0] + (i + 1) + getPlace[1];
		if (location.not(locationID).length) { length++; }
	}
	if (length === max) { location.css('display', 'none'); }
}
