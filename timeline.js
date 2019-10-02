$(() => {
	// initialClass();

	$('[id$=Inktober]').each(function() {
		const inktoberList = [1];
		let length = 0;
		for (let day in inktoberList) {
			day = inktoberList[day];
			if ($(this).not(`#day-${day}-Inktober`).length) {
				length++;
			}
		}
		if (length === inktoberList.length) {
			$(this).css('display', 'none');
		}
	});

	$('[class^=Inktober-day-de]').after('<br />');
	$('#lang-en').click(() => langChange('en'));
	$('#lang-de').click(() => langChange('de'));

	$('#2019jan').click(() => onClick('2019jan'));
	$('#2019mar').click(() => onClick('2019mar'));
	$('#2019may').click(() => onClick('2019may'));
	$('#2019aug').click(() => onClick('2019aug'));
	$('#2019sep').click(() => onClick('2019sep'));
	$('#2019oct').click(() => onClick('2019oct'));

	$('[class^=Inktober-day]').css('display', 'none');
	$('[id^=Inktober-day]').click(function() {
		inktober($(this));
	});

	// $('#previous-year').click(() => yearChange('previous-year'));
	// $('#following-year').click(() => yearChange('following-year'));
});

function inktober(location) {
	const id = location.attr('id');
	const classDisplay = $(`[class^=${id}]`).css('display');
	const display = classDisplay === 'none' ? 'block' : 'none';
	$('[class^=Inktober-day]').css('display', 'none');
	$(`div.${id}`).css('display', display);
}

function initialClass() {
	$('#months li').addClass('deselected');
	$('#2019jan').addClass('selected');
	$('#months li#2019jan').addClass('selected');
	$('#months li#2019jan').removeClass('deselected');
}

function langChange(lang) {
	$('.en').css('display', 'none');
	$('.de').css('display', 'none');
	switch (lang) {
		case 'en':
			$('.en').css('display', 'block');
			$('#lang-name').html('Language: English');
			break;
		case 'de':
			$('.de').css('display', 'block');
			$('#lang-name').html('Sprache: Deutsch');
			break;
	}
}

function onClick(date) {
	$('#dates div').removeClass('selected');
	$('#months li').removeClass('selected');

	$(`#${date}`).addClass('selected');
	$(`#months li#${date}`).addClass('selected');

	// $('#months li').addClass('deselected');
	// $(`#months li#${date}`).removeClass('deselected');
}

function yearChange(date) {
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
